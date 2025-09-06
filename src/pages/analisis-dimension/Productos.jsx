import { useAtom } from 'jotai'
import { useState } from 'react'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'
import MetricasGenerales from '@/components/MetricasGenerales'
import GraficoEvolucion from '@/components/charts/GraficoEvolucion'
import TablaAnalisisProductos from '@/components/TablaAnalisisProductos'

const Productos = () => {
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)
  const [activeTab, setActiveTab] = useState('evolucion')
  const [metrica, setMetrica] = useState('cantidad')

  // Datos simulados para el gráfico de evolución
  const datosCantidadProductos = [
    { fecha: '19/7', cantidad: 45 },
    { fecha: '20/7', cantidad: 52 },
    { fecha: '21/7', cantidad: 38 },
    { fecha: '22/7', cantidad: 61 },
    { fecha: '23/7', cantidad: 55 },
    { fecha: '24/7', cantidad: 48 },
    { fecha: '25/7', cantidad: 42 },
    { fecha: '26/7', cantidad: 58 },
    { fecha: '27/7', cantidad: 63 },
    { fecha: '28/7', cantidad: 47 },
    { fecha: '29/7', cantidad: 51 },
    { fecha: '30/7', cantidad: 56 },
    { fecha: '31/7', cantidad: 44 },
    { fecha: '1/8', cantidad: 59 },
    { fecha: '2/8', cantidad: 53 },
    { fecha: '3/8', cantidad: 49 },
    { fecha: '4/8', cantidad: 62 },
    { fecha: '5/8', cantidad: 57 },
    { fecha: '6/8', cantidad: 50 },
    { fecha: '7/8', cantidad: 54 },
    { fecha: '8/8', cantidad: 46 },
    { fecha: '9/8', cantidad: 60 },
    { fecha: '10/8', cantidad: 52 },
    { fecha: '11/8', cantidad: 48 },
    { fecha: '12/8', cantidad: 55 },
    { fecha: '13/8', cantidad: 61 },
    { fecha: '14/8', cantidad: 47 },
    { fecha: '15/8', cantidad: 53 },
    { fecha: '16/8', cantidad: 58 },
    { fecha: '17/8', cantidad: 50 },
    { fecha: '18/8', cantidad: 56 },
    { fecha: '19/8', cantidad: 44 },
    { fecha: '20/8', cantidad: 59 },
    { fecha: '21/8', cantidad: 51 },
    { fecha: '22/8', cantidad: 57 },
    { fecha: '23/8', cantidad: 49 },
    { fecha: '24/8', cantidad: 62 },
    { fecha: '25/8', cantidad: 54 }
  ]

  const datosVentas = [
    { fecha: '19/7', ventas: 85000 },
    { fecha: '20/7', ventas: 92000 },
    { fecha: '21/7', ventas: 78000 },
    { fecha: '22/7', ventas: 105000 },
    { fecha: '23/7', ventas: 98000 },
    { fecha: '24/7', ventas: 89000 },
    { fecha: '25/7', ventas: 110000 },
    { fecha: '26/7', ventas: 95000 },
    { fecha: '27/7', ventas: 102000 },
    { fecha: '28/7', ventas: 87000 },
    { fecha: '29/7', ventas: 96000 },
    { fecha: '30/7', ventas: 104000 },
    { fecha: '31/7', ventas: 88000 },
    { fecha: '1/8', ventas: 97000 },
    { fecha: '2/8', ventas: 103000 },
    { fecha: '3/8', ventas: 91000 },
    { fecha: '4/8', ventas: 108000 },
    { fecha: '5/8', ventas: 99000 },
    { fecha: '6/8', ventas: 105000 },
    { fecha: '7/8', ventas: 92000 },
    { fecha: '8/8', ventas: 101000 },
    { fecha: '9/8', ventas: 94000 },
    { fecha: '10/8', ventas: 106000 },
    { fecha: '11/8', ventas: 89000 },
    { fecha: '12/8', ventas: 98000 },
    { fecha: '13/8', ventas: 104000 },
    { fecha: '14/8', ventas: 93000 },
    { fecha: '15/8', ventas: 100000 },
    { fecha: '16/8', ventas: 107000 },
    { fecha: '17/8', ventas: 95000 },
    { fecha: '18/8', ventas: 102000 },
    { fecha: '19/8', ventas: 88000 },
    { fecha: '20/8', ventas: 99000 },
    { fecha: '21/8', ventas: 105000 },
    { fecha: '22/8', ventas: 96000 },
    { fecha: '23/8', ventas: 103000 },
    { fecha: '24/8', ventas: 92000 },
    { fecha: '25/8', ventas: 101000 }
  ]

  const datosMargenDolares = [
    { fecha: '19/7', margenDolares: 27625 },
    { fecha: '20/7', margenDolares: 29900 },
    { fecha: '21/7', margenDolares: 25350 },
    { fecha: '22/7', margenDolares: 34125 },
    { fecha: '23/7', margenDolares: 31850 },
    { fecha: '24/7', margenDolares: 28925 },
    { fecha: '25/7', margenDolares: 35750 },
    { fecha: '26/7', margenDolares: 30875 },
    { fecha: '27/7', margenDolares: 33150 },
    { fecha: '28/7', margenDolares: 28275 },
    { fecha: '29/7', margenDolares: 31200 },
    { fecha: '30/7', margenDolares: 33800 },
    { fecha: '31/7', margenDolares: 28600 },
    { fecha: '1/8', margenDolares: 31525 },
    { fecha: '2/8', margenDolares: 33475 },
    { fecha: '3/8', margenDolares: 29575 },
    { fecha: '4/8', margenDolares: 35100 },
    { fecha: '5/8', margenDolares: 32175 },
    { fecha: '6/8', margenDolares: 34125 },
    { fecha: '7/8', margenDolares: 29900 },
    { fecha: '8/8', margenDolares: 32825 },
    { fecha: '9/8', margenDolares: 30550 },
    { fecha: '10/8', margenDolares: 34450 },
    { fecha: '11/8', margenDolares: 28925 },
    { fecha: '12/8', margenDolares: 31850 },
    { fecha: '13/8', margenDolares: 33800 },
    { fecha: '14/8', margenDolares: 30225 },
    { fecha: '15/8', margenDolares: 32500 },
    { fecha: '16/8', margenDolares: 34775 },
    { fecha: '17/8', margenDolares: 30875 },
    { fecha: '18/8', margenDolares: 33150 },
    { fecha: '19/8', margenDolares: 28600 },
    { fecha: '20/8', margenDolares: 32175 },
    { fecha: '21/8', margenDolares: 34125 },
    { fecha: '22/8', margenDolares: 31200 },
    { fecha: '23/8', margenDolares: 33475 },
    { fecha: '24/8', margenDolares: 29900 },
    { fecha: '25/8', margenDolares: 32825 }
  ]

  const datosMargenPorcentaje = [
    { fecha: '19/7', margenPorcentaje: 32.5 },
    { fecha: '20/7', margenPorcentaje: 32.5 },
    { fecha: '21/7', margenPorcentaje: 32.5 },
    { fecha: '22/7', margenPorcentaje: 32.5 },
    { fecha: '23/7', margenPorcentaje: 32.5 },
    { fecha: '24/7', margenPorcentaje: 32.5 },
    { fecha: '25/7', margenPorcentaje: 32.5 },
    { fecha: '26/7', margenPorcentaje: 32.5 },
    { fecha: '27/7', margenPorcentaje: 32.5 },
    { fecha: '28/7', margenPorcentaje: 32.5 },
    { fecha: '29/7', margenPorcentaje: 32.5 },
    { fecha: '30/7', margenPorcentaje: 32.5 },
    { fecha: '31/7', margenPorcentaje: 32.5 },
    { fecha: '1/8', margenPorcentaje: 32.5 },
    { fecha: '2/8', margenPorcentaje: 32.5 },
    { fecha: '3/8', margenPorcentaje: 32.5 },
    { fecha: '4/8', margenPorcentaje: 32.5 },
    { fecha: '5/8', margenPorcentaje: 32.5 },
    { fecha: '6/8', margenPorcentaje: 32.5 },
    { fecha: '7/8', margenPorcentaje: 32.5 },
    { fecha: '8/8', margenPorcentaje: 32.5 },
    { fecha: '9/8', margenPorcentaje: 32.5 },
    { fecha: '10/8', margenPorcentaje: 32.5 },
    { fecha: '11/8', margenPorcentaje: 32.5 },
    { fecha: '12/8', margenPorcentaje: 32.5 },
    { fecha: '13/8', margenPorcentaje: 32.5 },
    { fecha: '14/8', margenPorcentaje: 32.5 },
    { fecha: '15/8', margenPorcentaje: 32.5 },
    { fecha: '16/8', margenPorcentaje: 32.5 },
    { fecha: '17/8', margenPorcentaje: 32.5 },
    { fecha: '18/8', margenPorcentaje: 32.5 },
    { fecha: '19/8', margenPorcentaje: 32.5 },
    { fecha: '20/8', margenPorcentaje: 32.5 },
    { fecha: '21/8', margenPorcentaje: 32.5 },
    { fecha: '22/8', margenPorcentaje: 32.5 },
    { fecha: '23/8', margenPorcentaje: 32.5 },
    { fecha: '24/8', margenPorcentaje: 32.5 },
    { fecha: '25/8', margenPorcentaje: 32.5 }
  ]


  // Función para obtener datos según la métrica seleccionada
  const obtenerDatosPorMetrica = (metrica) => {
    switch (metrica) {
      case 'cantidad':
        return datosCantidadProductos;
      case 'ventas':
        return datosVentas;
      case 'margen-dolares':
        return datosMargenDolares;
      case 'margen-porcentaje':
        return datosMargenPorcentaje;
      default:
        return datosCantidadProductos;
    }
  }

  // Estructura de datos para las métricas generales
  const metricasGenerales = {
    titulo: "Métricas Generales",
    subsecciones: [
      {
        titulo: "Ventas y Rotación",
        metricas: [
          { nombre: "Unidades vendidas", valor: 48, formato: "numero" },
          { nombre: "Tickets vendidos", valor: 35, formato: "numero" },
          { nombre: "Ventas totales", valor: 125450, formato: "moneda" },
          { nombre: "Rentabilidad total", valor: 32800, formato: "moneda" },
          { nombre: "% de rotación", valor: 18, formato: "porcentaje" }
        ]
      },
      {
        titulo: "Margen",
        metricas: [
          { nombre: "Margen promedio %", valor: 32.5, formato: "porcentaje" },
          { nombre: "Margen máximo / mínimo %", valor: "45% / 5%", formato: "texto" }
        ]
      },
      {
        titulo: "Concentración",
        metricas: [
          { nombre: "% ventas top 10", valor: 70, formato: "porcentaje" },
          { nombre: "% rentabilidad top 10", valor: 65, formato: "porcentaje" },
          { nombre: "% productos con alta rotación", valor: 25, formato: "porcentaje" }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <ExpandableSidebar 
        title="Ayuda educativa - Análisis de Productos" 
        iconPosition="right"
      >
        <div>
          {/* Placeholder para contenido educativo */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">📦 Propósito de esta página</h3>
            <p className="text-blue-800 text-xs leading-relaxed break-words">
              Esta página te permite analizar el rendimiento de productos desde múltiples perspectivas temporales y métricas. 
              Podrás identificar tendencias, patrones y oportunidades de mejora en tu catálogo de productos.
            </p>
          </div>

          {/* Placeholder para gráficos */}
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-green-900 mb-2">📈 Gráficos de Análisis</h3>
            <p className="text-green-800 text-xs leading-relaxed break-words">
              Los gráficos te ayudarán a visualizar tendencias, distribuciones y patrones en los datos de productos.
            </p>
          </div>

          {/* Placeholder para tabla */}
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-indigo-900 mb-2">📋 Tabla de Comparación</h3>
            <p className="text-indigo-800 text-xs leading-relaxed break-words">
              La tabla te permitirá comparar métricas de productos entre diferentes períodos.
            </p>
          </div>
        </div>
      </ExpandableSidebar>

      <div className={`
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'mr-[30%]' : 'mr-0'}
        py-4
      `}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-5">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 bg-clip-text text-transparent mb-2">
              Análisis de Productos
            </h1>
            <p className="text-gray-600 text-sm">
              Análisis completo de métricas y tendencias de productos por dimensión
            </p>
          </div>

          {/* Filtros de Fecha */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 mb-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Filtros de Fecha</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <label className="text-xs font-medium text-gray-700">Fecha inicio:</label>
                <input
                  type="date"
                  className="px-3 py-1 border border-gray-300 rounded text-xs"
                  defaultValue="2025-07-28"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label className="text-xs font-medium text-gray-700">Fecha fin:</label>
                <input
                  type="date"
                  className="px-3 py-1 border border-gray-300 rounded text-xs"
                  defaultValue="2025-08-28"
                />
              </div>
            </div>
          </div>

          {/* Métricas Generales y Visualizaciones */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
            {/* Métricas Generales */}
            <div className="lg:col-span-1">
              <MetricasGenerales 
                titulo={metricasGenerales.titulo}
                subsecciones={metricasGenerales.subsecciones}
                columnas={1}
                colorTema="#8b5cf6"
              />
            </div>

            {/* Visualizaciones */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                {/* Pestañas de gráficos */}
                <div className="border-b border-gray-200 p-4">
                  <div className="flex space-x-1">
                    <button 
                      onClick={() => setActiveTab('evolucion')}
                      className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                        activeTab === 'evolucion' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' : 'text-gray-500'
                      }`}
                    >
                      Evolución
                    </button>
                  </div>
                </div>

                {/* Contenido de gráficos */}
                <div className="bg-gray-50 rounded-lg p-5" style={{ height: '500px' }}>
                  {activeTab === 'evolucion' && (
                    <div>
                      <GraficoEvolucion 
                        datos={obtenerDatosPorMetrica(metrica)}
                        titulo="Evolución de Productos"
                        color="#8b5cf6"
                        altura="400px"
                        opcionesAgrupacion={['Día', 'Mes', 'Año']}
                        opcionesMetricas={[
                          { value: 'cantidad', label: 'Unidades vendidas' },
                          { value: 'ventas', label: 'Ventas' },
                          { value: 'margen-dolares', label: 'Margen $' },
                          { value: 'margen-porcentaje', label: 'Margen %' }
                        ]}
                        campoDatos={metrica === 'cantidad' ? 'cantidad' : metrica === 'ventas' ? 'ventas' : metrica === 'margen-dolares' ? 'margenDolares' : 'margenPorcentaje'}
                        formatearEjeY={(value) => {
                          if (metrica === 'cantidad') {
                            return `${value}`;
                          } else if (metrica === 'ventas' || metrica === 'margen-dolares') {
                            return `$${value.toLocaleString()}`;
                          } else {
                            return `${value}%`;
                          }
                        }}
                        formatearTooltip={(value) => {
                          if (metrica === 'cantidad') {
                            return [`${value}`, 'Unidades vendidas'];
                          } else if (metrica === 'ventas') {
                            return [`$${value.toLocaleString()}`, 'Ventas'];
                          } else if (metrica === 'margen-dolares') {
                            return [`$${value.toLocaleString()}`, 'Margen $'];
                          } else {
                            return [`${value}%`, 'Margen %'];
                          }
                        }}
                        onMetricaChange={setMetrica}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tabla de Análisis de Productos */}
          <div className="mt-5">
            <TablaAnalisisProductos />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productos
