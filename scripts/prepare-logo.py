#!/usr/bin/env python3
"""Regenerate the logo assets from public/logo-source.png.

The supplied file is artwork composited on an opaque white background, so the
alpha is recovered from each pixel's distance to white and the colour is
un-premultiplied. Produces:

  public/logo.png       full lockup, background knocked out, cropped
  public/logo-mark.png  the symbol on its own, 512x512, for the favicon

    python3 scripts/prepare-logo.py        (or: npm run logo)
"""

from PIL import Image

SOURCE = "public/logo-source.png"
GAIN = 1.6  # lifts the brand colours to full opacity, keeps edges anti-aliased


def knock_out_white(src: Image.Image) -> Image.Image:
    w, h = src.size
    out = Image.new("RGBA", (w, h))
    sp, op = src.load(), out.load()
    for y in range(h):
        for x in range(w):
            r, g, b = sp[x, y]
            alpha = min(255, int(max(255 - r, 255 - g, 255 - b) * GAIN))
            if alpha <= 2:
                op[x, y] = (255, 255, 255, 0)
                continue
            f = alpha / 255

            def un(c: int) -> int:
                return max(0, min(255, round((c - 255 * (1 - f)) / f)))

            op[x, y] = (un(r), un(g), un(b), alpha)
    return out.crop(out.getbbox())


def split_mark(lockup: Image.Image) -> Image.Image:
    """Drop the wordmark by cutting at the first blank band below the symbol."""
    w, h = lockup.size
    px = lockup.load()
    filled = [any(px[x, y][3] > 8 for x in range(0, w, 3)) for y in range(h)]

    cut, run, gap_start = int(h * 0.75), 0, None
    for y, is_filled in enumerate(filled):
        if not is_filled:
            run += 1
            if run == 1:
                gap_start = y
        else:
            if run >= 5 and gap_start and gap_start > h * 0.4:
                cut = gap_start
                break
            run = 0

    mark = lockup.crop((0, 0, w, cut))
    mark = mark.crop(mark.getbbox())
    side = max(mark.size)
    square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    square.paste(mark, ((side - mark.width) // 2, (side - mark.height) // 2), mark)
    return square.resize((512, 512), Image.LANCZOS)


def main() -> None:
    lockup = knock_out_white(Image.open(SOURCE).convert("RGB"))
    lockup.save("public/logo.png")
    print("public/logo.png", lockup.size)

    mark = split_mark(lockup)
    mark.save("public/logo-mark.png")
    print("public/logo-mark.png", mark.size)


if __name__ == "__main__":
    main()
