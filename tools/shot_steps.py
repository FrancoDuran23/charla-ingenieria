# Renders específicos: python3 tools/shot_steps.py 3:1 7:4 ...  -> renders/full/slide-NN-stepM[$SFX].png
from playwright.sync_api import sync_playwright
import pathlib, sys, os
d=pathlib.Path(__file__).resolve().parent.parent; out=d/'renders'/'full'; out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1280,'height':720})
    for a in sys.argv[1:]:
        n,m=a.split(':')
        pg.goto(f'file://{d}/charla.html?slide={n}&step={m}'); pg.wait_for_timeout(1300)
        f=out/f'slide-{int(n):02d}-step{m}{os.environ.get("SFX","")}.png'; pg.screenshot(path=str(f)); print(f)
    b.close()
