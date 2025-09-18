# Componentes de Layout Estándar

Este directorio contiene componentes estandarizados para asegurar consistencia en todas las páginas de análisis por dimensión.

## Componentes Disponibles

### 1. LayoutAnalisis
Componente principal que define el layout estándar de 2 columnas (gráficos a la izquierda, métricas a la derecha).

**Uso:**
```jsx
import LayoutAnalisis from '@/components/LayoutAnalisis'

<LayoutAnalisis 
  metricasGenerales={metricasGenerales}
  colorTema="#10b981"
>
  {/* Contenido de los gráficos (pestañas, controles, etc.) */}
  <div className="flex space-x-1 border-b mb-4">
    {/* Pestañas */}
  </div>
  
  {/* Contenido de las pestañas */}
  {activeTab === 'evolucion' && (
    <GraficoEvolucion />
  )}
</LayoutAnalisis>
```

### 2. MetricasWrapper
Wrapper para las métricas generales que asegura altura y estructura consistente.

**Uso:**
```jsx
import MetricasWrapper from '@/components/MetricasWrapper'

<MetricasWrapper 
  metricasGenerales={metricasGenerales}
  colorTema="#10b981"
/>
```

### 3. GraficosWrapper
Wrapper para la sección de gráficos que asegura altura y estructura consistente.

**Uso:**
```jsx
import GraficosWrapper from '@/components/GraficosWrapper'

<GraficosWrapper>
  {/* Contenido de gráficos */}
</GraficosWrapper>
```

## Características Estándar

### Altura Consistente
- ✅ **min-h-[550px]** en ambos contenedores (gráficos y métricas)
- ✅ **Altura idéntica** en todas las páginas
- ✅ **Sin diferencias** de altura entre páginas

### Layout Responsive
- ✅ **lg:grid-cols-3** para el grid principal
- ✅ **lg:col-span-2** para gráficos (izquierda)
- ✅ **lg:col-span-1** para métricas (derecha)
- ✅ **Responsive** en móviles y tablets

### Estilos Consistentes
- ✅ **shadow-lg** para gráficos
- ✅ **shadow-sm** para métricas
- ✅ **border-gray-100** en ambos
- ✅ **p-5** para gráficos, **p-4** para métricas

## Ejemplo Completo de Implementación

### Página de Ventas
```jsx
// src/pages/analisis-dimension/Ventas.jsx
import LayoutAnalisis from '@/components/LayoutAnalisis'
import FiltrosFecha from '@/components/FiltrosFecha'

const Ventas = () => {
  const [fechaInicio, setFechaInicio] = useState('2025-07-28')
  const [fechaFin, setFechaFin] = useState('2025-08-28')

  return (
    <div>
      {/* Filtros */}
      <FiltrosFecha 
        fechaInicio={fechaInicio}
        fechaFin={fechaFin}
        onFechaInicioChange={setFechaInicio}
        onFechaFinChange={setFechaFin}
      />

      {/* Layout estándar */}
      <LayoutAnalisis 
        metricasGenerales={metricasGenerales}
        colorTema="#10b981"
      >
        {/* Pestañas */}
        <div className="flex space-x-1 border-b mb-4">
          <button onClick={() => setActiveTab('evolucion')}>
            Evolución
          </button>
          {/* más pestañas */}
        </div>
        
        {/* Contenido de pestañas */}
        {activeTab === 'evolucion' && (
          <GraficoEvolucion />
        )}
      </LayoutAnalisis>
    </div>
  )
}
```

### Página de Productos
```jsx
// src/pages/analisis-dimension/Productos.jsx
import LayoutAnalisis from '@/components/LayoutAnalisis'
import FiltrosCompletos from '@/components/FiltrosCompletos'

const Productos = () => {
  const [fechaInicio, setFechaInicio] = useState('2025-07-28')
  const [fechaFin, setFechaFin] = useState('2025-08-28')
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Carnes')

  return (
    <div>
      {/* Filtros */}
      <FiltrosCompletos 
        fechaInicio={fechaInicio}
        fechaFin={fechaFin}
        onFechaInicioChange={setFechaInicio}
        onFechaFinChange={setFechaFin}
        mostrarFiltroCategoria={true}
        categoriaSeleccionada={categoriaSeleccionada}
        onCategoriaChange={setCategoriaSeleccionada}
      />

      {/* Layout estándar */}
      <LayoutAnalisis 
        metricasGenerales={metricasGenerales}
        colorTema="#8b5cf6"
      >
        {/* Contenido específico de productos */}
      </LayoutAnalisis>
    </div>
  )
}
```

## Beneficios

1. **Consistencia Visual**: Altura y estructura idénticas en todas las páginas
2. **Mantenibilidad**: Cambios centralizados en un solo lugar
3. **Reutilización**: Fácil implementación en nuevas páginas
4. **Responsive**: Layout que se adapta a diferentes pantallas
5. **Estandarización**: Misma experiencia de usuario en toda la aplicación

## Migración de Páginas Existentes

Para migrar una página existente:

1. **Importar** `LayoutAnalisis`
2. **Reemplazar** el grid manual por `<LayoutAnalisis>`
3. **Mover** el contenido de gráficos dentro del componente
4. **Eliminar** el código de métricas manual
5. **Verificar** que la altura sea consistente

Esto asegura que todas las páginas tengan exactamente la misma altura y estructura visual.
