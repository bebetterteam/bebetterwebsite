#!/usr/bin/env python3
"""Turn the team photos into avatar-ready squares.

Drop the originals in public/team/raw/ — any orientation — then:

    python3 scripts/prepare-team.py        (or: npm run team)

A file whose name matches someone in ORDER (phee.JPG, tent.jpg, …) goes to that
person. Anything else is paired off in filename order with whoever is left. The
mapping is printed so it can be checked.

Each photo is rotated per its EXIF flag, then cropped square. CROP holds a
per-person box because these photos frame their subject very differently:

    x, y   where to centre the square, as a fraction of width / height
    zoom   side of the square as a fraction of the shorter edge; 1 is the
           largest square that fits, lower crops in tighter

Output is at most 512px and is never upscaled, so a tight crop on a small
source stays smaller than that.
"""

from pathlib import Path

from PIL import Image, ImageOps

RAW = Path("public/team/raw")
OUT = Path("public/team")
ORDER = ["phee", "tent", "arty"]
MAX_SIZE = 512
DEFAULT_CROP = {"x": 0.5, "y": 0.38, "zoom": 1.0}
CROP = {
    # Full-frame square works; the face just sits lower than a usual selfie.
    "phee": {"x": 0.5, "y": 0.48, "zoom": 1.0},
    # Shot from below, so the face is well below centre.
    "tent": {"x": 0.5, "y": 0.55, "zoom": 1.0},
    # A full-length mirror shot — the head is a small part of the frame, so
    # this one crops in hard. See the note in the README about replacing it.
    "arty": {"x": 0.46, "y": 0.37, "zoom": 0.42},
}


def square(im: Image.Image, crop: dict[str, float]) -> Image.Image:
    w, h = im.size
    side = round(min(w, h) * crop["zoom"])

    left = round(w * crop["x"] - side / 2)
    top = round(h * crop["y"] - side / 2)
    left = max(0, min(left, w - side))
    top = max(0, min(top, h - side))

    return im.crop((left, top, left + side, top + side))


def pair(photos: list[Path]) -> list[tuple[Path, str]]:
    """Filename match first, then fill the gaps in order."""
    by_stem = {p.stem.lower(): p for p in photos}
    matched = {name: by_stem[name] for name in ORDER if name in by_stem}

    leftover = [p for p in photos if p not in matched.values()]
    for name in ORDER:
        if name not in matched and leftover:
            matched[name] = leftover.pop(0)

    return [(matched[name], name) for name in ORDER if name in matched]


def main() -> None:
    if not RAW.is_dir():
        raise SystemExit(f"{RAW} does not exist — create it and add the photos.")

    photos = sorted(
        p for p in RAW.iterdir()
        if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp", ".heic"}
    )
    if not photos:
        raise SystemExit(f"No photos in {RAW}.")

    for src, name in pair(photos):
        im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
        crop = CROP.get(name, DEFAULT_CROP)
        cropped = square(im, crop)
        size = min(MAX_SIZE, cropped.width)
        out = cropped.resize((size, size), Image.LANCZOS)
        dst = OUT / f"{name}.jpg"
        out.save(dst, quality=88, optimize=True)
        print(f"{src.name:<14} -> {dst}   {im.size[0]}x{im.size[1]} "
              f"-> {size}x{size}  crop={crop}")


if __name__ == "__main__":
    main()
