# Renderiza los mockups de assets/capturas/src/06-mockups.html a assets/capturas/06-*.png (2x)
from playwright.sync_api import sync_playwright
import pathlib
d=pathlib.Path(__file__).resolve().parent.parent; c=d/'assets'/'capturas'
names=['06-1-chat-copiar-pegar','06-2-autocompletar-ide','06-3-cli-agente','06-4-prompt-larguisimo','06-5-agents-md-skills','06-6-agentes-paralelo']
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':700,'height':2400},device_scale_factor=2)
    pg.goto(f'file://{c}/src/06-mockups.html'); pg.wait_for_timeout(600)
    for i,n in enumerate(names,1):
        pg.locator(f'#m{i}').screenshot(path=str(c/f'{n}.png'),omit_background=True); print(n)
    b.close()
