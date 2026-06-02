# 🌴 Potencial de Aceite — Oleoflores

Herramienta de análisis y seguimiento del potencial de extracción de aceite de palma, conectada a Firebase en tiempo real.

## Archivos

| Archivo | Descripción |
|---|---|
| `potencial_aceite.html` | Calculadora completa — requiere login con Google para guardar |
| `dashboard.html` | Dashboard de solo lectura — cualquiera con el link puede ver |

## 🚀 Cómo publicar en GitHub Pages

1. Crea un repositorio en GitHub (puede ser público o privado)
2. Sube los dos archivos HTML al repositorio
3. Ve a **Settings → Pages**
4. En **Source** selecciona `main` branch → carpeta `/ (root)` → **Save**
5. Espera 1-2 minutos y GitHub te dará dos links:

```
https://TU_USUARIO.github.io/TU_REPO/potencial_aceite.html   ← calculadora
https://TU_USUARIO.github.io/TU_REPO/dashboard.html          ← dashboard público
```

## 🔥 Firebase (ya configurado)

- **Firestore**: almacena todos los registros en la nube
- **Auth Google**: solo usuarios autenticados pueden crear/editar registros
- **Reglas de seguridad**: 
  - ✅ Lectura: cualquiera (sin login)
  - ✅ Crear: cualquier usuario con Google
  - ✅ Editar/eliminar: solo el autor del registro

## 📊 Dashboard

El dashboard muestra en tiempo real:
- KPIs: AR promedio, máximo, mínimo, % en rango Cenipalma
- Gráfica de barras de AR % por registro (últimos 30)
- Barras de calidad promedio con semáforos
- Tabla completa con filtros por fecha, placa, proveedor y estado

## 🌐 Dominios autorizados en Firebase

Si publicas en GitHub Pages, agrega el dominio en:
> Firebase Console → Authentication → Settings → Dominios autorizados → Agregar dominio

Agrega: `TU_USUARIO.github.io`
