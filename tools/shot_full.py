from playwright.sync_api import sync_playwright
from PIL import Image, ImageDraw, ImageFont
import pathlib
d=pathlib.Path(__file__).resolve().parent.parent; out=d/'renders'/'full'; out.mkdir(parents=True,exist_ok=True)
N=20
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1280,'height':720})
    for n in range(1,N+1):
        pg.goto(f'file://{d}/charla.html?slide={n}&step=99'); pg.wait_for_timeout(900)
        pg.screenshot(path=str(out/f'slide-{n:02d}.png'))
    b.close()
tw,th,cols=400,225,4; rows=(N+cols-1)//cols; pad=16; lab=24
sheet=Image.new('RGB',(cols*(tw+pad)+pad,rows*(th+pad+lab)+pad),(241,240,234))
f=ImageFont.truetype(str(d/'fonts'/'SpaceMono-Bold.ttf'),15); dr=ImageDraw.Draw(sheet)
for k in range(N):
    im=Image.open(out/f'slide-{k+1:02d}.png').convert('RGB').resize((tw,th),Image.LANCZOS)
    x=pad+(k%cols)*(tw+pad); y=pad+(k//cols)*(th+pad+lab)
    dr.text((x,y),f'{k+1:02d}',fill=(10,10,10),font=f); sheet.paste(im,(x,y+lab))
sheet.save(out/'contact-sheet.jpg',quality=88); print('ok')
