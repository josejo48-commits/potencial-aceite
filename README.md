# 🌿 Potencial de Aceite — Oleoflores

Sistema web para análisis de potencial de extracción de aceite de palma en tiempo real.

---

## 📁 Archivos

| Archivo | Descripción |
|---|---|
| `potencial_aceite.html` | Calculadora — ingreso de análisis |
| `dashboard.html` | Dashboard público en tiempo real |

---

## 🔗 Links

- **Calculadora:** [potencial_aceite.html](./potencial_aceite.html)
- **Dashboard:** [dashboard.html](./dashboard.html)

---

## ⚙️ Cómo funciona

1. El analista abre la **calculadora**, inicia sesión con Google e ingresa los datos del viaje (placa, proveedor, peso, laboratorio y calidad de fruta).
2. Al guardar, el registro se almacena en **Firebase Firestore**.
3. El **dashboard** detecta cada nuevo registro en tiempo real y actualiza automáticamente las tarjetas de potencial (AR%, HM%) y calidad de fruta (Verde, Sobremaduro, Podrido, Pedúnculo, Demotispa, Daño Corona).
4. El dashboard es de **solo lectura** — cualquier persona con el link lo puede ver sin iniciar sesión.

---

## 🧮 Fórmula

```
AR = FR × MF × AMF / 10000
AMF = 82.3 − 0.95 × HM
```

| Variable | Descripción |
|---|---|
| AR | Aceite sobre Racimo (%) |
| FR | Fruto sobre Racimo (%) |
| MF | Mesocarp sobre Fruto (%) |
| HM | Humedad de Mesocarp (%) |
| AMF | Aceite sobre Mesocarp y Fruto (%) |

---

## 🚦 Semáforo de calidad Oleoflores

| Defecto | Límite máximo |
|---|---|
| 🟢 Verde | 1,0 % |
| 🟠 Sobremaduro | 10,0 % |
| 🔴 Podrido | 0,0 % |
| 📏 Pedúnculo largo | 0,0 % |
| 🪲 Demotispa | 0,0 % |
| 💔 Daño corona | 0,0 % |

---

## 🛠️ Tecnologías

- HTML / CSS / JavaScript
- Firebase Firestore (base de datos en tiempo real)
- Firebase Authentication (Google Sign-In)
- Chart.js (gráficas)
- GitHub Pages (hosting)

---

*Oleoflores · Campos 3 al 22*
