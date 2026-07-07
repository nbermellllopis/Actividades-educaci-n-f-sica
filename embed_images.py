import base64
from pathlib import Path

root = Path('C:/Users/Usuario/Desktop/projectes/cuestionario')
path = root / 'cuestionario.html'
text = path.read_text(encoding='utf-8')
files = [
    'images/esqueleto.jpg',
    'images/musculos-frente.jpg',
    'images/huesos.jpg',
    'images/nino.jpg',
    'images/levantando-vaso.jpg',
    'images/cerebro.jpg',
    'images/celebrando.jpg',
]

for rel in files:
    data = base64.b64encode((root / rel).read_bytes()).decode('ascii')
    data_url = f'data:image/jpeg;base64,{data}'
    text = text.replace(f'src="{rel}"', f'src="{data_url}"')
    text = text.replace(f"'{rel}'", f"'{data_url}'")
    text = text.replace(f'"{rel}"', f'"{data_url}"')

path.write_text(text, encoding='utf-8')
print('Imágenes embebidas en cuestionario.html')
