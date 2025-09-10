# proyecto TP CI/CD

## 1. Codigo del proyecto:
Incluye:
- `math.js` con las funciones de ejemplo.
- `maths.test.js` con los test correspondientes.

## 2. Workflows de CI/CD
- `.github/workflows/ci.yml`: ejecuta pruebas automáticas con Node.js.
- `.github/workflows/deploy.yml`: conecta al servidor vía SSH y hace `git pull` para actualizar el proyecto.

## 3. Funcionamiento
- Al hacer push a la rama `main`, se ejecuta el pipeline de CI para validar que el código funciona.
- Si CI pasa, el pipeline de CD se conecta al servidor y actualiza la carpeta `~/lemp-sites/santi_garola`.

## 4. Comprobación
Para validar que todo funciona:
1. Push a `main` dispara CI y CD.
2. El servidor refleja los cambios automáticamente.
3. Los archivos de prueba `.test.js` confirman que el código funciona.
Prueba staging
