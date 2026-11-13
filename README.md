# VoBax (Vorax Bank)

App web instalable para controlar entradas y gastos en efectivo, quincena por quincena.
Proyecto académico y de uso personal.

## Archivos (deben quedar todos en la misma carpeta)
- `index.html` – la app
- `manifest.webmanifest` – datos de instalación (nombre, colores, íconos)
- `sw.js` – permite abrirla sin internet
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` – logotipo

## Cómo publicarla en GitHub Pages
1. Entra a github.com e inicia sesión (o crea tu cuenta).
2. **New repository** → nombre: `vobax` → **Public** → **Create repository**.
3. **uploading an existing file** → sube los 7 archivos (incluido este README) → **Commit changes**.
4. **Settings → Pages** → en *Branch* elige `main` y carpeta `/ (root)` → **Save**.
5. Espera 1 o 2 minutos. Tu link será: `https://TU-USUARIO.github.io/vobax/`

## Cómo instalarla en Android
1. Abre tu link en **Chrome**.
2. Menú de tres puntos → **Instalar app** (o *Agregar a pantalla de inicio*).
3. Abre VoBax desde su ícono. Funciona a pantalla completa y sin internet.

## Notas
- Tus datos se guardan solo en tu teléfono (en el navegador). Si borras los datos de Chrome, se pierden.
- La primera vez que la abras necesita internet para cargar el generador de PDF; después queda guardado.
- Si cambias algo y subes una versión nueva, cambia `vobax-v1` por `vobax-v2` en `sw.js` para que los teléfonos actualicen.
