# Componentes de Filtros

Este directorio contiene componentes reutilizables para filtros en las páginas de análisis por dimensión.

## Componentes Disponibles

### 1. FiltrosFecha
Componente simple que solo incluye filtros de fecha inicio y fin.

**Uso:**
```jsx
import FiltrosFecha from '@/components/FiltrosFecha'

// En tu componente
const [fechaInicio, setFechaInicio] = useState('2025-07-28')
const [fechaFin, setFechaFin] = useState('2025-08-28')

<FiltrosFecha 
  fechaInicio={fechaInicio}
  fechaFin={fechaFin}
  onFechaInicioChange={setFechaInicio}
  onFechaFinChange={setFechaFin}
/>
```

**Props:**
- `fechaInicio` (string): Fecha de inicio en formato 'YYYY-MM-DD'
- `fechaFin` (string): Fecha de fin en formato 'YYYY-MM-DD'
- `onFechaInicioChange` (function): Callback cuando cambia la fecha de inicio
- `onFechaFinChange` (function): Callback cuando cambia la fecha de fin

### 2. FiltrosCompletos
Componente completo que incluye filtros de fecha y opcionalmente filtro de categoría/producto.

**Uso:**
```jsx
import FiltrosCompletos from '@/components/FiltrosCompletos'

// En tu componente
const [fechaInicio, setFechaInicio] = useState('2025-07-28')
const [fechaFin, setFechaFin] = useState('2025-08-28')
const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Carnes')

// Solo fechas
<FiltrosCompletos 
  fechaInicio={fechaInicio}
  fechaFin={fechaFin}
  onFechaInicioChange={setFechaInicio}
  onFechaFinChange={setFechaFin}
/>

// Con filtro de categoría
<FiltrosCompletos 
  fechaInicio={fechaInicio}
  fechaFin={fechaFin}
  onFechaInicioChange={setFechaInicio}
  onFechaFinChange={setFechaFin}
  mostrarFiltroCategoria={true}
  categoriaSeleccionada={categoriaSeleccionada}
  onCategoriaChange={setCategoriaSeleccionada}
  opcionesCategoria={categoriasPersonalizadas}
/>
```

**Props:**
- Todas las props de `FiltrosFecha`
- `mostrarFiltroCategoria` (boolean): Mostrar o no el filtro de categoría
- `categoriaSeleccionada` (string): Categoría/producto seleccionado
- `onCategoriaChange` (function): Callback cuando cambia la categoría
- `opcionesCategoria` (array): Opciones personalizadas para el dropdown

## Ejemplos de Implementación

### Página de Ventas (solo fechas)
```jsx
// src/pages/analisis-dimension/Ventas.jsx
import FiltrosFecha from '@/components/FiltrosFecha'

const Ventas = () => {
  const [fechaInicio, setFechaInicio] = useState('2025-07-28')
  const [fechaFin, setFechaFin] = useState('2025-08-28')

  return (
    <div>
      <FiltrosFecha 
        fechaInicio={fechaInicio}
        fechaFin={fechaFin}
        onFechaInicioChange={setFechaInicio}
        onFechaFinChange={setFechaFin}
      />
      {/* resto del contenido */}
    </div>
  )
}
```

### Página de Productos (fechas + categoría)
```jsx
// src/pages/analisis-dimension/Productos.jsx
import FiltrosCompletos from '@/components/FiltrosCompletos'

const Productos = () => {
  const [fechaInicio, setFechaInicio] = useState('2025-07-28')
  const [fechaFin, setFechaFin] = useState('2025-08-28')
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Carnes')

  const categoriasPersonalizadas = [
    { nombre: 'Carnes', productos: ['Pollo', 'Carne de Res', 'Cerdo'] },
    { nombre: 'Verduras', productos: ['Tomate', 'Lechuga', 'Zanahoria'] },
    // ... más categorías
  ]

  return (
    <div>
      <FiltrosCompletos 
        fechaInicio={fechaInicio}
        fechaFin={fechaFin}
        onFechaInicioChange={setFechaInicio}
        onFechaFinChange={setFechaFin}
        mostrarFiltroCategoria={true}
        categoriaSeleccionada={categoriaSeleccionada}
        onCategoriaChange={setCategoriaSeleccionada}
        opcionesCategoria={categoriasPersonalizadas}
      />
      {/* resto del contenido */}
    </div>
  )
}
```

## Estilos

Los componentes utilizan Tailwind CSS y siguen el diseño del sistema:

- **Colores**: Grises neutros con acentos azules para focus
- **Espaciado**: Consistente con el resto de la aplicación
- **Responsive**: Se adaptan a diferentes tamaños de pantalla
- **Iconos**: SVG inline para los iconos de calendario y dropdown

## Tecnologías Utilizadas

- **React**: Componentes funcionales con hooks
- **Tailwind CSS**: Styling utility-first
- **useState**: Estado local para fechas y categorías
- **useEffect**: Manejo de eventos de click fuera del dropdown
- **useRef**: Referencias para el dropdown
