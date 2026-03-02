# Calculadora de Notas Profesional 📊

Una aplicación web interactiva desarrollada con **React** y **Tailwind CSS** para que profesores y estudiantes calculen promedios de notas. Permite importar/exportar desde Excel, usar atajos de teclado, manejar puntajes diferenciados y sincronizar el progreso en tiempo real con otros usuarios mediante Firebase.

## 🚀 Características Principales

- **Tablas y Hojas Múltiples:** Administra distintos cursos en pestañas separadas.
- **Importación/Exportación Excel:** Carga tus propias plantillas masivas o descarga los reportes finales al instante.
- **Atajos de Teclado Avanzados:** Múltiples funcionalidades para una carga de notas ultrarrápida (flechas direccionales, `Ctrl + Z`, `Ctrl + A`).
- **Evaluaciones Diferenciadas:** Permite establecer puntajes distintos para los estudiantes según su destaque (códigos de colores).
- **Sincronización en la Nube:** (Novedad V2) Genera un código de 6 dígitos que permite colaborar a otros profesores simultáneamente.
- **Modo Oscuro/Claro:** Completamente adaptado para proteger tu vista visual.

---

## 📦 Instalación y Uso

Esta aplicación es 100% de lado del cliente y no requiere de un servidor, `npm` o herramientas complejas. Puedes usarla ejecutándola directamente.

1. Descarga el repositorio o presiona el botón *Code -> Download ZIP*.
2. Descomprime la carpeta en tu equipo.
3. Abre el archivo `index V2.html` haciendo doble clic sobre él con cualquier navegador moderno (Google Chrome, Firefox, Edge).

---

## ⚙️ Configurar Firebase (Opcional - Sincronización)

Si deseas alojar la página o utilizar el botón de **Generar código / Cargar desde la nube**, deberás proveer tus propias credenciales en la línea `116` del archivo `index V2.html`.

```javascript
window.__FIREBASE_CONFIG__ = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```
Puedes seguir la guía paso a paso en el archivo `firebase_setup_instructions.md` adjunto para crear la base de datos de manera gratuita.

---

## ⌨️ Atajos de Teclado Útiles

| Comando | Acción |
|---|---|
| `Ctrl + Z` | Deshacer (*Undo*) |
| `Ctrl + Y` / `Ctrl + Shift + Z` | Rehacer (*Redo*) |
| `Ctrl + Shift + A` | Agregar nuevo estudiante al final de la lista |
| `Ctrl + Shift + E` | Agregar nueva columna de evaluación al final |
| `Flechas Direccionales` | Navegar fluidamente por las casillas de notas |

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**, **Vanilla JS** (ES6+)
- **React** (cargado via CDN)
- **TailwindCSS** (Styling)
- **Firebase Firestore** (Sync en Tiempo Real & DB)
- **SheetJS** (XLSX parsing)
