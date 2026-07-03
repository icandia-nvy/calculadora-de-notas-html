# Administrador de Notas

Una aplicación web moderna (Single Page Application) e interactiva diseñada para profesores y educadores. Permite gestionar calificaciones de múltiples cursos o secciones, calcular notas automáticamente a partir de puntajes basados en porcentajes de exigencia, colaborar en tiempo real y exportar reportes profesionales de forma sencilla.

---

## 🚀 Características Destacadas

### 📊 Gestión de Notas y Hojas (Secciones)
*   **Múltiples Hojas (Pestañas):** Administra diferentes cursos o semestres de forma independiente en una misma sesión. Las pestañas se pueden arrastrar para reordenarlas, renombrarlas o eliminarlas.
*   **Escala Personalizada por Hoja:** Configura de forma independiente la nota mínima, nota máxima y la nota de aprobación (corte) de cada sección.
*   **Ancho de Columnas Ajustable:** Ajusta el ancho de la columna de nombres de los alumnos arrastrando el borde lateral del encabezado de la tabla.

### ✏️ Entrada de Datos Inteligente
*   **Cálculo Automatizado:** Las notas se calculan de forma instantánea al ingresar el puntaje del alumno en base al puntaje máximo y porcentaje de exigencia configurados para cada prueba.
*   **Puntajes Diferenciados:** Permite habilitar puntajes máximos reducidos o adecuados para alumnos que pertenezcan a los grupos Verde, Amarillo o Azul (adecuaciones curriculares o evaluaciones especiales).
*   **Visualización por Foco:** El nombre del alumno cuya casilla de nota o nombre se está editando se resalta levemente en color azul claro, ayudando a guiar la vista y evitar errores de ingreso de datos.

### ⚠️ Estados Especiales de Notas
*   **Pendientes (PND):** Al ingresar un puntaje de `0`, la nota se muestra como **"PND"** en color rojo y negrita. El nombre del estudiante se tiñe de rojo en la lista para alertar de la evaluación pendiente.
*   **Exenciones (EX):** Permite eximir a un alumno de cualquier evaluación de forma manual. Al hacerlo, la casilla de puntaje se bloquea mostrando **"EX"** para evitar ediciones accidentales.
*   *Nota:* Tanto los estados **"PND"** como **"EX"** se **excluyen automáticamente del cálculo del promedio final del alumno** y de las estadísticas del curso, evitando alterar el promedio real del alumno.

### ⚙️ Ajustes manuales (Décimas)
*   **Ajuste por Doble Clic:** Haciendo doble clic sobre el casillero de nota de cualquier estudiante se abre el panel de ajuste rápido, permitiendo sumarle o restarle décimas (offset) a la nota calculada (ej: `+0.2` o `-0.1`) o gestionar el estado de exención.

### ☁️ Sincronización en la Nube (Firebase)
*   **Colaboración Multi-Usuario:** Genera un código único de 6 dígitos para sincronizar tus planillas en la nube. Permite que múltiples profesores vean y editen las notas en tiempo real.
*   **Pestaña Activa Independiente:** El cambio de pestaña o sección es personal. Diferentes usuarios conectados a la misma sesión pueden trabajar en hojas o cursos distintos al mismo tiempo sin interrumpir la visualización del otro.
*   **Compatibilidad:** Maneja automáticamente los conflictos de sincronización y mantiene retrocompatibilidad con esquemas antiguos.

### 📑 Exportación e Importación Completa
*   **Reportes PDF:** Genera documentos PDF listos para imprimir, respetando el formato de colores de las celdas, notas eximidas (`EX`), pruebas pendientes (`PND`), nombres destacados y promedios.
*   **Importación y Exportación a Excel (.xlsx):** Exporta tus hojas con fórmulas de notas y estadísticas, e importa planillas Excel externas. El importador asocia y asigna de forma exacta las pruebas, puntajes, notas, décimas de ajuste, resaltados y exenciones.

---

## ⌨️ Atajos de Teclado y Navegación Rápida

La aplicación cuenta con soporte para atajos de teclado que aceleran el ingreso de información:

| Atajo | Acción |
| :--- | :--- |
| `Flechas Direccionales` | Moverse rápidamente por las celdas de la grilla de puntajes. |
| `Enter` | Confirmar y saltar directamente a la celda del alumno de abajo. |
| `Ctrl + Z` | Deshacer la última acción (soporta historial de hasta 50 cambios). |
| `Ctrl + Y` o `Ctrl + Shift + Z` | Rehacer la última acción deshecha. |
| `Ctrl + Shift + A` | Agregar un nuevo alumno al final de la tabla. |
| `Ctrl + Shift + E` | Agregar una nueva evaluación (columna). |

---

## 🛠️ Tecnologías Utilizadas

*   **HTML5 & CSS3** (Basado en variables y tokens de diseño moderno, adaptativo y compatible con modo oscuro).
*   **Tailwind CSS v3** (Para el estilizado interactivo y responsivo).
*   **React JS v18** (Librería para la gestión reactiva del estado y componentes).
*   **Babel Standalone** (Para la compilación de la sintaxis JSX en tiempo de ejecución).
*   **SheetJS (XLSX.js)** (Para el procesamiento y generación de archivos Excel).
*   **jsPDF & jsPDF-AutoTable** (Para la compilación y exportación de reportes PDF).
*   **Firebase Firestore** (Base de datos NoSQL para la sincronización colaborativa en la nube).
*   **Service Worker** (Soporte Offline PWA que permite cargar la aplicación sin internet tras la primera visita).

---

## 📂 Estructura del Proyecto

El proyecto está diseñado bajo una arquitectura de un solo archivo (Single File Application) para facilitar su portabilidad y despliegue rápido:

```bash
calculadora de notas/
├── index.html       # Estructura HTML, estilos CSS y lógica React + Firebase
├── manifest.json    # Configuración de Aplicación Web Progresiva (PWA)
├── sw.js            # Service Worker para almacenamiento en caché y soporte offline
├── icon-192.png     # Icono de la aplicación para dispositivos móviles
└── icon-512.png     # Icono de la aplicación en alta resolución
```

---

## 📥 Instrucciones de Uso

Para ejecutar la aplicación localmente:
1. Descarga la carpeta del proyecto.
2. Abre el archivo `index.html` en tu navegador web de preferencia (Chrome, Edge, Firefox, Safari).
3. Para la sincronización colaborativa, asegúrate de estar conectado a internet. Una vez cargada la página por primera vez, el Service Worker te permitirá utilizar la aplicación incluso sin conexión.
