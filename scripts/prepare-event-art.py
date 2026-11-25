"""Create web derivatives and a review sheet from preserved generated masters.

Run from project root: python scripts/prepare-event-art.py
Requires Pillow; no generation API calls or source-image modifications.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import json

root = Path(__file__).resolve().parents[1]
masters = root / 'artwork/event-masters'
output = root / 'public/art/events'
output.mkdir(parents=True, exist_ok=True)
manifest = json.loads((masters / 'manifest.json').read_text())
sheet = Image.new('RGB', (1440, 1080), '#ead8ad')
draw = ImageDraw.Draw(sheet)
font = ImageFont.truetype('C:/Windows/Fonts/georgia.ttf', 19)
for index, item in enumerate(manifest):
    name = item['slug']
    image = Image.open(masters / f'{name}.png').convert('RGB')
    # Generated masters are already 4:5: resample the complete frame, never crop.
    for width in (400, 800, 1200):
        image.resize((width, width * 5 // 4), Image.Resampling.LANCZOS).save(
            output / f'{name}-{width}.webp', quality=82, method=6)
    x, y = (index % 4) * 360 + 20, (index // 4) * 540 + 18
    sheet.paste(image.resize((320, 400), Image.Resampling.LANCZOS), (x, y))
    draw.text((x, y + 418), item['title'], fill='#2b170e', font=font)
sheet.save(root / 'artwork/event-art-contact-sheet.jpg', quality=92)
print(f'Prepared {len(manifest)} paintings at three sizes and a contact sheet.')
