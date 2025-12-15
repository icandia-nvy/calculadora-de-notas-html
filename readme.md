# 📊 Calculadora de Notas Avanzada (HTML + React)

Aplicación web **completa y autocontenida en un solo archivo HTML** para la gestión avanzada de evaluaciones académicas. Está pensada para uso docente real y permite **calcular, importar, exportar y analizar notas** de forma flexible, visual e interactiva, sin requerir backend ni instalación.

La aplicación funciona 100% en el navegador y está construida con **React (CDN)**, **Tailwind CSS** y **XLSX.js**.

---

## ✨ Características principales

- 📁 **Gestión de múltiples hojas** (cursos, secciones o asignaturas)
- 👩‍🎓 **Administración de alumnos** por hoja
- 🧪 **Gestión de evaluaciones** con:
  - puntaje máximo configurable
  - exigencia (%) configurable
  - notas diferenciadas por categoría (highlight)
- ➕ **Soporte de offsets** por evaluación
- 🧮 **Cálculo automático de notas y promedios finales**
- ⌨️ **Atajos de teclado** para acciones frecuentes
- 🔁 **Deshacer / Rehacer (Undo / Redo)**
- 📥 **Importación desde Excel (.xlsx)** con detección inteligente de columnas
- 📤 **Exportación a Excel** compatible con el formato de importación
- 💾 **Persistencia automática local** mediante `localStorage`
- 🌙 **Modo oscuro**
- ⚙️ **Configuración global de escala de notas**
- 🎨 **Interfaz moderna, responsive y clara** (Tailwind CSS)

---

## 🧩 Tecnologías utilizadas

- **HTML5** (archivo único)
- **React + ReactDOM** (CDN)
- **Tailwind CSS**
- **XLSX.js (SheetJS)** para lectura/escritura de Excel
- **Babel (runtime)** para JSX
- **localStorage** para persistencia de datos

---

## 🚀 Uso

1. Descarga el archivo `index.html`
2. Ábrelo directamente en cualquier navegador moderno (Chrome, Edge, Firefox)
3. Importa un archivo Excel o crea una hoja manualmente
4. Agrega alumnos y evaluaciones
5. Calcula notas y promedios automáticamente
6. Exporta los resultados a Excel cuando lo necesites

> No requiere servidor, instalación ni conexión a internet (salvo para los CDN).

---

## 📥 Importación desde Excel

La aplicación soporta un formato estructurado que permite:

- múltiples evaluaciones por hoja
- columnas de **Puntaje**, **Nota** y **Offset**
- exigencia y puntaje máximo por evaluación
- diferenciación por categoría (highlight)

Se recomienda **exportar un archivo desde la aplicación** para usarlo como plantilla base de importación.

---

## ⌨️ Atajos de teclado

- **Ctrl / Cmd + Shift + A** → Agregar alumno
- **Ctrl / Cmd + Shift + E** → Agregar evaluación
- **Ctrl / Cmd + Z** → Deshacer
- **Ctrl / Cmd + Shift + Z** o **Ctrl / Cmd + Y** → Rehacer

---

## 🎯 Objetivo del proyecto

Este proyecto busca ofrecer una **herramienta práctica, flexible y robusta para docentes**, combinando:

- rigor en el cálculo académico
- compatibilidad con Excel
- buena experiencia de usuario
- cero dependencia de backend

Es ideal para contextos educativos donde se requiere rapidez, portabilidad y control total de los datos.

---

## 📄 Licencia

Este proyecto puede publicarse bajo licencia **MIT** u otra licencia de uso educativo, según se defina.

---

## 🙌 Contribuciones

Las sugerencias y mejoras son bienvenidas. Este proyecto está pensado como una base sólida y extensible para herramientas educativas basadas en la web.

