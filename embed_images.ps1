$root = 'C:\Users\Usuario\Desktop\projectes\cuestionario'
$htmlPath = Join-Path $root 'cuestionario.html'
$content = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

$files = @(
  'images/esqueleto.jpg',
  'images/musculos-frente.jpg',
  'images/huesos.jpg',
  'images/nino.jpg',
  'images/levantando-vaso.jpg',
  'images/cerebro.jpg',
  'images/celebrando.jpg'
)

foreach ($rel in $files) {
  $fullPath = Join-Path $root $rel
  $bytes = [System.IO.File]::ReadAllBytes($fullPath)
  $data = 'data:image/jpeg;base64,' + [Convert]::ToBase64String($bytes)
  $content = $content.Replace('src="' + $rel + '"', 'src="' + $data + '"')
  $content = $content.Replace("'" + $rel + "'", "'" + $data + "'")
  $content = $content.Replace('"' + $rel + '"', '"' + $data + '"')
}

[System.IO.File]::WriteAllText($htmlPath, $content, [System.Text.Encoding]::UTF8)
Write-Host 'Imágenes embebidas en cuestionario.html'
