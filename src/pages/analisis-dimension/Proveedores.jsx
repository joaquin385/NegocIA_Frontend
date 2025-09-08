import { useAtom } from 'jotai'
import { useState } from 'react'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'
import MetricasGenerales from '@/components/MetricasGenerales'
import GraficoEvolucion from '@/components/charts/GraficoEvolucion'
import GraficoDistribucionMonto from '@/components/charts/GraficoDistribucionMonto'
import TablaClientesRFM from '@/components/TablaClientesRFM'

const Proveedores = () => {
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)
  const [activeTab, setActiveTab] = useState('evolucion')

  // Datos simulados para el gráfico de evolución de compras
  const datosEvolucionCompras = [
    { fecha: '01/08', gasto: 95000 },
    { fecha: '02/08', gasto: 92000 },
    { fecha: '03/08', gasto: 98000 },
    { fecha: '04/08', gasto: 94000 },
    { fecha: '05/08', gasto: 96000 },
    { fecha: '06/08', gasto: 93000 },
    { fecha: '07/08', gasto: 97000 },
    { fecha: '08/08', gasto: 95000 },
    { fecha: '09/08', gasto: 92000 },
    { fecha: '10/08', gasto: 98000 },
    { fecha: '11/08', gasto: 94000 },
    { fecha: '12/08', gasto: 96000 },
    { fecha: '13/08', gasto: 93000 },
    { fecha: '14/08', gasto: 97000 },
    { fecha: '15/08', gasto: 95000 },
    { fecha: '16/08', gasto: 92000 },
    { fecha: '17/08', gasto: 98000 },
    { fecha: '18/08', gasto: 94000 },
    { fecha: '19/08', gasto: 96000 },
    { fecha: '20/08', gasto: 93000 },
    { fecha: '21/08', gasto: 97000 },
    { fecha: '22/08', gasto: 95000 },
    { fecha: '23/08', gasto: 92000 },
    { fecha: '24/08', gasto: 98000 },
    { fecha: '25/08', gasto: 94000 },
    { fecha: '26/08', gasto: 96000 },
    { fecha: '27/08', gasto: 93000 },
    { fecha: '28/08', gasto: 97000 },
    { fecha: '29/08', gasto: 95000 },
    { fecha: '30/08', gasto: 92000 },
    { fecha: '31/08', gasto: 98000 },
    { fecha: '01/09', gasto: 79000 },
    { fecha: '02/09', gasto: 76000 },
    { fecha: '03/09', gasto: 82000 },
    { fecha: '04/09', gasto: 78000 },
    { fecha: '05/09', gasto: 80000 },
    { fecha: '06/09', gasto: 77000 },
    { fecha: '07/09', gasto: 81000 },
    { fecha: '08/09', gasto: 79000 },
    { fecha: '09/09', gasto: 76000 },
    { fecha: '10/09', gasto: 82000 },
    { fecha: '11/09', gasto: 78000 },
    { fecha: '12/09', gasto: 80000 },
    { fecha: '13/09', gasto: 77000 },
    { fecha: '14/09', gasto: 81000 },
    { fecha: '15/09', gasto: 79000 },
    { fecha: '16/09', gasto: 76000 },
    { fecha: '17/09', gasto: 82000 },
    { fecha: '18/09', gasto: 78000 },
    { fecha: '19/09', gasto: 80000 },
    { fecha: '20/09', gasto: 77000 },
    { fecha: '21/09', gasto: 81000 },
    { fecha: '22/09', gasto: 79000 },
    { fecha: '23/09', gasto: 76000 },
    { fecha: '24/09', gasto: 82000 },
    { fecha: '25/09', gasto: 78000 },
    { fecha: '26/09', gasto: 80000 },
    { fecha: '27/09', gasto: 77000 },
    { fecha: '28/09', gasto: 81000 },
    { fecha: '29/09', gasto: 79000 },
    { fecha: '30/09', gasto: 76000 },
    { fecha: '01/10', gasto: 85000 },
    { fecha: '02/10', gasto: 82000 },
    { fecha: '03/10', gasto: 88000 },
    { fecha: '04/10', gasto: 84000 },
    { fecha: '05/10', gasto: 86000 },
    { fecha: '06/10', gasto: 83000 },
    { fecha: '07/10', gasto: 87000 },
    { fecha: '08/10', gasto: 85000 },
    { fecha: '09/10', gasto: 82000 },
    { fecha: '10/10', gasto: 88000 },
    { fecha: '11/10', gasto: 84000 },
    { fecha: '12/10', gasto: 86000 },
    { fecha: '13/10', gasto: 83000 },
    { fecha: '14/10', gasto: 87000 },
    { fecha: '15/10', gasto: 85000 },
    { fecha: '16/10', gasto: 82000 },
    { fecha: '17/10', gasto: 88000 },
    { fecha: '18/10', gasto: 84000 },
    { fecha: '19/10', gasto: 86000 },
    { fecha: '20/10', gasto: 83000 },
    { fecha: '21/10', gasto: 87000 },
    { fecha: '22/10', gasto: 85000 },
    { fecha: '23/10', gasto: 82000 },
    { fecha: '24/10', gasto: 88000 },
    { fecha: '25/10', gasto: 84000 },
    { fecha: '26/10', gasto: 86000 },
    { fecha: '27/10', gasto: 83000 },
    { fecha: '28/10', gasto: 87000 },
    { fecha: '29/10', gasto: 85000 },
    { fecha: '30/10', gasto: 82000 },
    { fecha: '31/10', gasto: 88000 },
    { fecha: '01/11', gasto: 80000 },
    { fecha: '02/11', gasto: 77000 },
    { fecha: '03/11', gasto: 83000 },
    { fecha: '04/11', gasto: 79000 },
    { fecha: '05/11', gasto: 81000 },
    { fecha: '06/11', gasto: 78000 },
    { fecha: '07/11', gasto: 82000 },
    { fecha: '08/11', gasto: 80000 },
    { fecha: '09/11', gasto: 77000 },
    { fecha: '10/11', gasto: 83000 },
    { fecha: '11/11', gasto: 79000 },
    { fecha: '12/11', gasto: 81000 },
    { fecha: '13/11', gasto: 78000 },
    { fecha: '14/11', gasto: 82000 },
    { fecha: '15/11', gasto: 80000 },
    { fecha: '16/11', gasto: 77000 },
    { fecha: '17/11', gasto: 83000 },
    { fecha: '18/11', gasto: 79000 },
    { fecha: '19/11', gasto: 81000 },
    { fecha: '20/11', gasto: 78000 },
    { fecha: '21/11', gasto: 82000 },
    { fecha: '22/11', gasto: 80000 },
    { fecha: '23/11', gasto: 77000 },
    { fecha: '24/11', gasto: 83000 },
    { fecha: '25/11', gasto: 79000 },
    { fecha: '26/11', gasto: 81000 },
    { fecha: '27/11', gasto: 78000 },
    { fecha: '28/11', gasto: 82000 },
    { fecha: '29/11', gasto: 80000 },
    { fecha: '30/11', gasto: 77000 },
    { fecha: '01/12', gasto: 90000 },
    { fecha: '02/12', gasto: 87000 },
    { fecha: '03/12', gasto: 93000 },
    { fecha: '04/12', gasto: 89000 },
    { fecha: '05/12', gasto: 91000 },
    { fecha: '06/12', gasto: 88000 },
    { fecha: '07/12', gasto: 92000 },
    { fecha: '08/12', gasto: 90000 },
    { fecha: '09/12', gasto: 87000 },
    { fecha: '10/12', gasto: 93000 },
    { fecha: '11/12', gasto: 89000 },
    { fecha: '12/12', gasto: 91000 },
    { fecha: '13/12', gasto: 88000 },
    { fecha: '14/12', gasto: 92000 },
    { fecha: '15/12', gasto: 90000 },
    { fecha: '16/12', gasto: 87000 },
    { fecha: '17/12', gasto: 93000 },
    { fecha: '18/12', gasto: 89000 },
    { fecha: '19/12', gasto: 91000 },
    { fecha: '20/12', gasto: 88000 },
    { fecha: '21/12', gasto: 92000 },
    { fecha: '22/12', gasto: 90000 },
    { fecha: '23/12', gasto: 87000 },
    { fecha: '24/12', gasto: 93000 },
    { fecha: '25/12', gasto: 89000 },
    { fecha: '26/12', gasto: 91000 },
    { fecha: '27/12', gasto: 88000 },
    { fecha: '28/12', gasto: 92000 },
    { fecha: '29/12', gasto: 90000 },
    { fecha: '30/12', gasto: 87000 },
    { fecha: '31/12', gasto: 93000 }
  ]

  // Datos simulados para las métricas generales
  const metricasGenerales = {
    titulo: "Métricas Generales",
    subsecciones: [
      {
        titulo: "Métricas Generales",
        metricas: [
          { nombre: "Monto total de compras", valor: 1247890, formato: "moneda" },
          { nombre: "Cantidad de proveedores activos", valor: 89, formato: "numero" },
          { nombre: "Variación del costo promedio vs período anterior", valor: 5.2, formato: "porcentaje" },
          { nombre: "Variación del costo promedio vs mismo período año anterior", valor: -2.1, formato: "porcentaje" },
          { nombre: "Relación cantidad comprada vs vendida", valor: 1.15, formato: "numero" }
        ]
      }
    ]
  }

  return (
    <div className={`transition-all duration-300 ${isSidebarOpen ? 'mr-[30%]' : 'mr-1'}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-5">
          <h1 className="text-2xl font-bold text-purple-600 mb-2">Análisis de Proveedores</h1>
          <p className="text-gray-600 text-sm">
            Análisis completo de métricas y tendencias de proveedores por dimensión
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

          {/* Gráficos */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5">
              {/* Pestañas de gráficos */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  <button 
                    onClick={() => setActiveTab('evolucion')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'evolucion' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' : 'text-gray-500'
                    }`}
                  >
                    Evolución
                  </button>
                  <button 
                    onClick={() => setActiveTab('distribucion-compra')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'distribucion-compra' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' : 'text-gray-500'
                    }`}
                  >
                    Distribución por compra
                  </button>
                  <button 
                    onClick={() => setActiveTab('curva-retencion')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'curva-retencion' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' : 'text-gray-500'
                    }`}
                  >
                    Curva de retención
                  </button>
                  <button 
                    onClick={() => setActiveTab('mapa-calor')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'mapa-calor' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' : 'text-gray-500'
                    }`}
                  >
                    Mapa de calor
                  </button>
                </div>
              </div>

              {/* Contenido de gráficos */}
              <div className="bg-gray-50 rounded-lg p-5" style={{ height: '500px' }}>
            {activeTab === 'evolucion' && (
              <div>
                <GraficoEvolucion
                  datos={datosEvolucionCompras}
                  titulo="Evolución del Gasto en Compras por Mes"
                  color="#8b5cf6"
                  altura="400px"
                  opcionesMetricas={[
                    { value: 'gasto', label: 'Gasto en Compras ($)' }
                  ]}
                  campoDatos="gasto"
                  formatearEjeY={(value) => `$${value.toLocaleString()}`}
                  formatearTooltip={(value, name) => [`$${value.toLocaleString()}`, 'Gasto en Compras']}
                />
              </div>
            )}
            
            {activeTab === 'distribucion-compra' && (
              <div>
                <GraficoDistribucionMonto
                  titulo="Distribución de Costos por Categoría de Producto"
                  altura="400px"
                  etiquetaEjeY="Cantidad de Productos"
                  etiquetaLeyenda="Cantidad de Productos"
                  formatearEjeY={(value) => `${value}`}
                  formatearTooltip={(value, name) => [`${value}`, 'Cantidad de Productos']}
                />
              </div>
            )}
            
            {activeTab === 'curva-retencion' && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Curva de Retención</h3>
                  <p className="text-sm text-gray-500">Análisis de retención de proveedores a lo largo del tiempo</p>
                </div>
              </div>
            )}
            
            {activeTab === 'mapa-calor' && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Mapa de Calor</h3>
                  <p className="text-sm text-gray-500">Visualización de patrones de actividad de proveedores</p>
                </div>
              </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de Proveedores con Métricas RFM */}
        <div className="mt-5">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Tabla de Proveedores con Métricas y Categoría RFM
            </h3>
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Tabla de Proveedores</h3>
                <p className="text-sm text-gray-500">Análisis detallado de proveedores con métricas RFM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar de ayuda educativa */}
        <ExpandableSidebar
          title="Ayuda educativa - Análisis de Proveedores"
          iconPosition="right"
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">¿Qué es el Análisis de Proveedores?</h3>
              <p className="text-xs text-gray-600 break-words">
                El análisis de proveedores te permite evaluar el rendimiento, la confiabilidad y el valor de tus proveedores. 
                Incluye métricas como retención, frecuencia de compras, y segmentación RFM para optimizar las relaciones comerciales.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Métricas Generales</h3>
              <p className="text-xs text-gray-600 break-words">
                <strong>Proveedores Activos:</strong> Total de proveedores con actividad reciente.<br/>
                <strong>Proveedores Nuevos:</strong> Proveedores incorporados en el período.<br/>
                <strong>Proveedores Recurrentes:</strong> Proveedores con compras regulares.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Tasas de Retención</h3>
              <p className="text-xs text-gray-600 break-words">
                <strong>Tasa de Retención:</strong> Porcentaje de proveedores que continúan activos.<br/>
                <strong>Tasa de Abandono:</strong> Porcentaje de proveedores que dejaron de comprar.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Valor del Proveedor</h3>
              <p className="text-xs text-gray-600 break-words">
                <strong>Valor Promedio:</strong> Monto promedio de compras por proveedor.<br/>
                <strong>Frecuencia:</strong> Número promedio de compras por período.<br/>
                <strong>Tiempo entre Compras:</strong> Días promedio entre transacciones.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Segmentación RFM</h3>
              <p className="text-xs text-gray-600 break-words">
                <strong>Premium:</strong> Proveedores de alto valor y frecuencia.<br/>
                <strong>Regulares:</strong> Proveedores con comportamiento moderado.<br/>
                <strong>En Riesgo:</strong> Proveedores con actividad decreciente.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Gráficos Disponibles</h3>
              <p className="text-xs text-gray-600 break-words">
                <strong>Evolución:</strong> Tendencias de proveedores nuevos vs recurrentes.<br/>
                <strong>Distribución por Compra:</strong> Análisis de frecuencia de compras.<br/>
                <strong>Curva de Retención:</strong> Análisis temporal de retención.<br/>
                <strong>Mapa de Calor:</strong> Patrones de actividad por tiempo.
              </p>
            </div>
          </div>
        </ExpandableSidebar>
      </div>
    </div>
  )
}

export default Proveedores
