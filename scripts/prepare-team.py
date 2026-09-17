#!/usr/bin/env python3
"""Turn the team photos into avatar-ready squares.

Drop the originals in public/team/raw/ — any names, any orientation — then:

    python3 scripts/prepare-team.py        (or: npm run team)

They are sorted by filename and mapped, in order, to the names in ORDER below,
which is the order they appear in `about.team` in lib/site.ts. The mapping is
printed so it can be checked.

Each photo is rotated per its EXIF flag, cropped square around a point a little
above centre (where a face sits in a selfie), and written out at 512px.
"""

from pathlib import Path

from PIL import Image, ImageOps

RAW = Path("public/team/raw")
OUT = Path("public/team")
ORDER = ["phee", "tent", "arty"]
SIZE = 512
# 0.5 is dead centre; lower crops higher up the frame, where faces sit.
FOCUS_Y = 0.38


def square(im: Image.Image) -> Image.Image:
    w, h = im.size
    side = min(w, h)

    left = round((w - side) / 2)
    top = round(h * FOCUS_Y - side / 2)
    top = max(0, min(top, h - side))

    return im.crop((left, top, left + side, top + side))


def main() -> None:
    if not RAW.is_dir():
        raise SystemExit(f"{RAW} does not exist — create it and add the photos.")

    photos = sorted(
        p for p in RAW.iterdir()
        if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp", ".heic"}
    )
    if not photos:
        raise SystemExit(f"No photos in {RAW}.")

    if len(photos) != len(ORDER):
        print(f"note: {len(photos)} photo(s) for {len(ORDER)} names — "
              "pairing as far as they go.")

    for src, name in zip(photos, ORDER):
        im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
        out = square(im).resize((SIZE, SIZE), Image.LANCZOS)
        dst = OUT / f"{name}.jpg"
        out.save(dst, quality=88, optimize=True)
        print(f"{src.name}  ->  {dst}   ({im.size[0]}x{im.size[1]} -> {SIZE}x{SIZE})")


if __name__ == "__main__":
    main()
