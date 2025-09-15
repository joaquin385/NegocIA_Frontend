import { useAtom } from 'jotai'
import { useState } from 'react'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'
import MetricasGenerales from '@/components/MetricasGenerales'
import GraficoDistribucionStock from '@/components/charts/GraficoDistribucionStock'
import GraficoEvolucion from '@/components/charts/GraficoEvolucion'
import TablaInventarioProductos from '@/components/TablaInventarioProductos'

const Inventario = () => {
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)
  const [activeTab, setActiveTab] = useState('evolucion')
  const [metrica, setMetrica] = useState('valorCosto')

  // Datos simulados para métricas generales de inventario
  const metricasGenerales = [
    {
      titulo: 'Métricas Generales',
      metricas: [
        { 
          nombre: 'Stock total (unidades)', 
          valor: 45892,
          formato: 'numero'
        },
        { 
          nombre: 'Stock total ($)', 
          valor: 2847890,
          formato: 'moneda'
        },
        { 
          nombre: 'Stock valorizado a costo', 
          valor: 2847890,
          formato: 'moneda'
        },
        { 
          nombre: 'Stock valorizado a precio de venta', 
          valor: 4271835,
          formato: 'moneda'
        },
        { 
          nombre: 'Rotación de inventario', 
          valor: 3.8,
          formato: 'decimal'
        },
        { 
          nombre: '% Stock sobrevalorado', 
          valor: 2.3,
          formato: 'porcentaje'
        },
        { 
          nombre: 'Productos críticos', 
          valor: 47,
          formato: 'numero'
        },
        { 
          nombre: 'Stock inmovilizado (30+ días)', 
          valor: 156,
          formato: 'numero'
        }
      ]
    }
  ]

  // Datos simulados para evolución del stock
  const datosEvolucionStock = [
    { fecha: '02/01', cantidad: 42150, valorCosto: 2750000, valorVenta: 4125000 },
    { fecha: '03/01', cantidad: 45892, valorCosto: 2450000, valorVenta: 3675000 },
    { fecha: '04/01', cantidad: 42150, valorCosto: 2600000, valorVenta: 3900000 },
    { fecha: '05/01', cantidad: 44500, valorCosto: 2650000, valorVenta: 3975000 },
    { fecha: '06/01', cantidad: 47800, valorCosto: 2950000, valorVenta: 4425000 },
    { fecha: '07/01', cantidad: 46200, valorCosto: 2950000, valorVenta: 4425000 },
    { fecha: '08/01', cantidad: 47100, valorCosto: 2950000, valorVenta: 4425000 },
    { fecha: '09/01', cantidad: 44300, valorCosto: 2650000, valorVenta: 3975000 },
    { fecha: '10/01', cantidad: 45800, valorCosto: 2800000, valorVenta: 4200000 },
    { fecha: '11/01', cantidad: 47200, valorCosto: 2900000, valorVenta: 4350000 },
    { fecha: '12/01', cantidad: 48900, valorCosto: 3100000, valorVenta: 4650000 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Análisis de Inventario</h1>
            <p className="text-sm text-gray-600 mt-1">Gestión y análisis del inventario de productos</p>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Período:</label>
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>Últimos 30 días</option>
              <option>Últimos 90 días</option>
              <option>Último año</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Categoría:</label>
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>Todas las categorías</option>
              <option>Electrónicos</option>
              <option>Ropa</option>
              <option>Hogar</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Almacén:</label>
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>Todos los almacenes</option>
              <option>Almacén Central</option>
              <option>Almacén Norte</option>
              <option>Almacén Sur</option>
            </select>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Métricas Generales */}
            <div className="lg:col-span-1">
              <MetricasGenerales subsecciones={metricasGenerales} columnas={1} />
            </div>

          {/* Gráficos */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
              {/* Navegación de pestañas */}
              <div className="flex space-x-1 mb-6 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('evolucion')}
                  className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                    activeTab === 'evolucion' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' : 'text-gray-500'
                  }`}
                >
                  Evolución
                </button>
                <button
                  onClick={() => setActiveTab('distribucion')}
                  className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                    activeTab === 'distribucion' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' : 'text-gray-500'
                  }`}
                >
                  Distribución
                </button>
                <button
                  onClick={() => setActiveTab('rotacion')}
                  className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                    activeTab === 'rotacion' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' : 'text-gray-500'
                  }`}
                >
                  Rotación
                </button>
                <button
                  onClick={() => setActiveTab('categorias')}
                  className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                    activeTab === 'categorias' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' : 'text-gray-500'
                  }`}
                >
                  Por categorías
                </button>
                <button
                  onClick={() => setActiveTab('abc')}
                  className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                    activeTab === 'abc' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' : 'text-gray-500'
                  }`}
                >
                  Análisis ABC
                </button>
              </div>

              {/* Contenido de las pestañas */}
              {activeTab === 'evolucion' && (
                <GraficoEvolucion
                  datos={datosEvolucionStock}
                  titulo="Evolución del Valor del Stock en el Tiempo"
                  color="#3b82f6"
                  altura="400px"
                  opcionesMetricas={[
                    { value: 'cantidad', label: 'Cantidad (unidades)' },
                    { value: 'valorCosto', label: 'Valor a Costo ($)' },
                    { value: 'valorVenta', label: 'Valor a Precio de Venta ($)' }
                  ]}
                  campoDatos={metrica === 'cantidad' ? 'cantidad' : metrica === 'valorCosto' ? 'valorCosto' : 'valorVenta'}
                  formatearEjeY={(value) => {
                    if (metrica === 'cantidad') {
                      return `${value.toLocaleString()}`
                    } else {
                      return `$${value.toLocaleString()}`
                    }
                  }}
                  formatearTooltip={(value) => {
                    if (metrica === 'cantidad') {
                      return [`${value.toLocaleString()} unidades`, 'Cantidad']
                    } else if (metrica === 'valorCosto') {
                      return [`$${value.toLocaleString()}`, 'Valor a Costo']
                    } else {
                      return [`$${value.toLocaleString()}`, 'Valor a Venta']
                    }
                  }}
                  onMetricaChange={setMetrica}
                />
              )}

              {activeTab === 'distribucion' && (
                <GraficoDistribucionStock 
                  titulo="Distribución de Stock por Categoría"
                  altura="400px"
                />
              )}

              {activeTab === 'rotacion' && (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Análisis de Rotación</h3>
                    <p className="text-sm text-gray-500">Velocidad de rotación de productos y análisis de movimiento</p>
                  </div>
                </div>
              )}

              {activeTab === 'categorias' && (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Inventario por Categorías</h3>
                    <p className="text-sm text-gray-500">Distribución del inventario según categorías de productos</p>
                  </div>
                </div>
              )}

              {activeTab === 'abc' && (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Análisis ABC</h3>
                    <p className="text-sm text-gray-500">Clasificación ABC del inventario por valor e importancia</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabla de Análisis de Inventario */}
        <div className="mt-5">
          <TablaInventarioProductos />
        </div>

        {/* Sidebar de ayuda educativa */}
        <ExpandableSidebar
          title="Ayuda educativa - Análisis de Inventario"
          iconPosition="right"
          content={
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Qué es el Análisis de Inventario?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  El análisis de inventario es una herramienta fundamental para la gestión eficiente de productos en stock. 
                  Permite optimizar la inversión en inventario, reducir costos de almacenamiento y mejorar la disponibilidad de productos.
                </p>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-800 mb-2">Métricas Clave</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><strong>Valor total del inventario:</strong> Suma del valor de todos los productos en stock</li>
                  <li><strong>Rotación:</strong> Veces que se renueva el inventario en un período</li>
                  <li><strong>Días de inventario:</strong> Tiempo promedio que permanece un producto en stock</li>
                  <li><strong>Precisión:</strong> Exactitud entre inventario físico y sistema</li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-800 mb-2">Análisis ABC</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Clasificación que categoriza productos según su importancia:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>Categoría A:</strong> 20% de productos que representan 80% del valor</li>
                  <li><strong>Categoría B:</strong> 30% de productos con valor medio</li>
                  <li><strong>Categoría C:</strong> 50% de productos con menor valor</li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-800 mb-2">Beneficios del Análisis</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Optimización de la inversión en inventario</li>
                  <li>• Reducción de costos de almacenamiento</li>
                  <li>• Mejora en la disponibilidad de productos</li>
                  <li>• Identificación de productos obsoletos</li>
                  <li>• Mejor planificación de compras</li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default Inventario
