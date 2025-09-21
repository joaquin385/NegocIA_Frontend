import { useAtom } from 'jotai'
import { useState } from 'react'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'
import MetricasGenerales from '@/components/MetricasGenerales'
import GraficoEvolucionClientes from '@/components/charts/GraficoEvolucionClientes'
import GraficoDistribucionCompras from '@/components/charts/GraficoDistribucionCompras'
import TablaClientesRFM from '@/components/TablaClientesRFM'
import FiltrosFecha from '@/components/FiltrosFecha'
// import GraficoDistribucionTiempo from '@/components/charts/GraficoDistribucionTiempo'

const Clientes = () => {
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)
  const [activeTab, setActiveTab] = useState('evolucion')
  const [metrica, setMetrica] = useState('nuevos')
  const [fechaInicio, setFechaInicio] = useState('2025-07-28')
  const [fechaFin, setFechaFin] = useState('2025-08-28')

  // Datos simulados para el gráfico de evolución
  const datosEvolucionClientes = [
    { fecha: '04/09', 'Clientes Nuevos': 15, 'Clientes Recurrentes': 180 },
    { fecha: '05/09', 'Clientes Nuevos': 22, 'Clientes Recurrentes': 195 },
    { fecha: '06/09', 'Clientes Nuevos': 18, 'Clientes Recurrentes': 175 },
    { fecha: '07/09', 'Clientes Nuevos': 25, 'Clientes Recurrentes': 200 },
    { fecha: '08/09', 'Clientes Nuevos': 20, 'Clientes Recurrentes': 185 },
    { fecha: '09/09', 'Clientes Nuevos': 28, 'Clientes Recurrentes': 210 },
    { fecha: '10/09', 'Clientes Nuevos': 16, 'Clientes Recurrentes': 170 },
    { fecha: '11/09', 'Clientes Nuevos': 24, 'Clientes Recurrentes': 190 },
    { fecha: '12/09', 'Clientes Nuevos': 19, 'Clientes Recurrentes': 180 },
    { fecha: '13/09', 'Clientes Nuevos': 26, 'Clientes Recurrentes': 205 },
    { fecha: '14/09', 'Clientes Nuevos': 21, 'Clientes Recurrentes': 185 },
    { fecha: '15/09', 'Clientes Nuevos': 17, 'Clientes Recurrentes': 175 },
    { fecha: '16/09', 'Clientes Nuevos': 23, 'Clientes Recurrentes': 195 },
    { fecha: '17/09', 'Clientes Nuevos': 27, 'Clientes Recurrentes': 200 },
    { fecha: '18/09', 'Clientes Nuevos': 14, 'Clientes Recurrentes': 165 },
    { fecha: '19/09', 'Clientes Nuevos': 29, 'Clientes Recurrentes': 215 },
    { fecha: '20/09', 'Clientes Nuevos': 18, 'Clientes Recurrentes': 180 },
    { fecha: '21/09', 'Clientes Nuevos': 25, 'Clientes Recurrentes': 190 },
    { fecha: '22/09', 'Clientes Nuevos': 22, 'Clientes Recurrentes': 185 },
    { fecha: '23/09', 'Clientes Nuevos': 16, 'Clientes Recurrentes': 170 },
    { fecha: '24/09', 'Clientes Nuevos': 30, 'Clientes Recurrentes': 220 },
    { fecha: '25/09', 'Clientes Nuevos': 20, 'Clientes Recurrentes': 185 },
    { fecha: '26/09', 'Clientes Nuevos': 24, 'Clientes Recurrentes': 195 },
    { fecha: '27/09', 'Clientes Nuevos': 17, 'Clientes Recurrentes': 175 },
    { fecha: '28/09', 'Clientes Nuevos': 26, 'Clientes Recurrentes': 205 }
  ]


  // Función para obtener datos según la métrica seleccionada
  const obtenerDatosPorMetrica = (metrica) => {
    switch (metrica) {
      case 'nuevos':
        return datosEvolucionClientes.map(item => ({ fecha: item.fecha, cantidad: item['Clientes Nuevos'] }));
      case 'recurrentes':
        return datosEvolucionClientes.map(item => ({ fecha: item.fecha, cantidad: item['Clientes Recurrentes'] }));
      default:
        return datosEvolucionClientes.map(item => ({ fecha: item.fecha, cantidad: item['Clientes Nuevos'] }));
    }
  }

  // Estructura de datos para las métricas generales
  const metricasGenerales = {
    titulo: "Métricas Generales",
    subsecciones: [
      {
        titulo: "Métricas Generales",
        metricas: [
          { nombre: "Cantidad total de clientes activos", valor: 1247, formato: "numero" },
          { nombre: "Cantidad de clientes nuevos", valor: 89, formato: "numero" },
          { nombre: "Cantidad de clientes recurrentes", valor: 1158, formato: "numero" }
        ]
      },
      {
        titulo: "Tasas de Retención",
        metricas: [
          { nombre: "Tasa de retención", valor: 78.5, formato: "porcentaje" },
          { nombre: "Tasa de abandono (churn)", valor: 21.5, formato: "porcentaje" }
        ]
      },
      {
        titulo: "Valor del Cliente",
        metricas: [
          { nombre: "Valor promedio por cliente", valor: 2456, formato: "moneda" },
          { nombre: "Frecuencia de compra promedio", valor: 3.2, formato: "numero" },
          { nombre: "Tiempo promedio entre compras", valor: "45 días", formato: "texto" }
        ]
      },
      {
        titulo: "Segmentación RFM",
        metricas: [
          { nombre: "Clientes Premium (RFM alto)", valor: 156, formato: "numero" },
          { nombre: "Clientes Regulares (RFM medio)", valor: 892, formato: "numero" },
          { nombre: "Clientes en Riesgo (RFM bajo)", valor: 199, formato: "numero" }
        ]
      }
    ]
  }

  return (
    <div className={`min-h-screen bg-gray-50 transition-all duration-300 ${isSidebarOpen ? 'mr-[30%]' : 'mr-1'} py-4`}>
      <div className="max-w-7xl mx-auto px-4">
          <div className="mb-5">
           <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-emerald-800 to-teal-800 bg-clip-text text-transparent mb-2">
             Análisis de Clientes
           </h1>
            <p className="text-sm text-gray-600">Análisis completo de métricas y tendencias de clientes por dimensión</p>
          </div>

        {/* Filtros */}
        <FiltrosFecha 
          fechaInicio={fechaInicio}
          fechaFin={fechaFin}
          onFechaInicioChange={setFechaInicio}
          onFechaFinChange={setFechaFin}
        />

        {/* Métricas Generales y Visualizaciones */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {/* Métricas Generales */}
          <div className="lg:col-span-1">
            <MetricasGenerales
              titulo={metricasGenerales.titulo}
              subsecciones={metricasGenerales.subsecciones}
              columnas={1}
              colorTema="#1e40af"
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
                      activeTab === 'evolucion' ? 'text-slate-600 border-b-2 border-slate-600 bg-slate-50' : 'text-gray-500'
                    }`}
                  >
                    Evolución
                  </button>
                  <button 
                    onClick={() => setActiveTab('distribucion-compra')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'distribucion-compra' ? 'text-slate-600 border-b-2 border-slate-600 bg-slate-50' : 'text-gray-500'
                    }`}
                  >
                    Distribución por compra
                  </button>
                  <button 
                    onClick={() => setActiveTab('curva-retencion')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'curva-retencion' ? 'text-slate-600 border-b-2 border-slate-600 bg-slate-50' : 'text-gray-500'
                    }`}
                  >
                    Curva de retención
                  </button>
                  <button 
                    onClick={() => setActiveTab('mapa-calor')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'mapa-calor' ? 'text-slate-600 border-b-2 border-slate-600 bg-slate-50' : 'text-gray-500'
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
                    <GraficoEvolucionClientes
                      datos={datosEvolucionClientes}
                      titulo="Evolución de Clientes Nuevos vs Recurrentes"
                      altura="400px"
                      formatearEjeY={(value) => `${value}`}
                      formatearTooltip={(value, name) => [`${value}`, name]}
                    />
                  </div>
                )}
                
                {activeTab === 'distribucion-compra' && (
                  <div>
                    <GraficoDistribucionCompras
                      titulo="Distribución de Clientes por Cantidad de Compras"
                      altura="400px"
                      formatearEjeY={(value) => `${value}`}
                      formatearTooltip={(value, name) => [`${value}`, name]}
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
                      <p className="text-sm text-gray-500">Análisis de retención de clientes a lo largo del tiempo</p>
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
                      <p className="text-sm text-gray-500">Visualización de patrones de actividad de clientes</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de Clientes con Métricas RFM */}
        <div className="mt-5">
          <TablaClientesRFM />
        </div>

        {/* Sidebar de ayuda educativa */}
        <ExpandableSidebar
          title="Ayuda educativa - Análisis de Clientes"
          iconPosition="right"
        >
          <div>
            {/* Métricas Generales */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">📊 Métricas Generales de Clientes</h3>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                <strong>Métricas Generales:</strong>
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Cantidad total de clientes activos:</strong> Clientes que han comprado en el período seleccionado.
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Cantidad de clientes nuevos:</strong> Clientes que realizaron su primera compra en el período.
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Cantidad de clientes recurrentes:</strong> Clientes que ya habían comprado anteriormente.
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                <strong>Tasas de Retención:</strong>
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Tasa de retención:</strong> Porcentaje de clientes que regresan a comprar.
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Tasa de abandono (churn):</strong> Porcentaje de clientes que dejan de comprar.
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                <strong>Valor del Cliente:</strong>
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Valor promedio por cliente:</strong> Gasto promedio de cada cliente.
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Frecuencia de compra promedio:</strong> Cuántas veces compra cada cliente en promedio.
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Tiempo promedio entre compras:</strong> Días que pasan entre una compra y otra.
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words">
                <strong>Segmentación RFM:</strong> Clasificación de clientes en Premium (alto valor), Regulares (valor medio) y en Riesgo (bajo valor).
              </p>
            </div>

            {/* Filtros */}
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-green-900 mb-2">🔍 Filtros de Análisis</h3>
              <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
                <strong>Filtro por Fecha:</strong> Permite seleccionar el período de análisis de clientes (hoy, ayer, última semana, etc.).
              </p>
              <p className="text-green-800 text-xs leading-relaxed break-words">
                Los filtros se aplican a todas las métricas, gráficos y la tabla de la página para análisis específicos por período.
              </p>
            </div>

            {/* Gráficos */}
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">📈 Gráficos de Análisis</h3>
              <p className="text-slate-700 text-xs leading-relaxed break-words mb-2">
                <strong>Evolución:</strong>
              </p>
              <p className="text-slate-700 text-xs leading-relaxed break-words mb-2">
                Muestra la evolución temporal de clientes nuevos vs recurrentes. Permite identificar patrones de crecimiento y retención.
              </p>
              <p className="text-slate-700 text-xs leading-relaxed break-words mb-2">
                <strong>Distribución por compra:</strong>
              </p>
              <p className="text-slate-700 text-xs leading-relaxed break-words mb-2">
                Analiza cómo se distribuyen los clientes según la cantidad de compras que han realizado.
              </p>
              <p className="text-slate-700 text-xs leading-relaxed break-words mb-2">
                <strong>Curva de retención:</strong>
              </p>
              <p className="text-slate-700 text-xs leading-relaxed break-words mb-2">
                Visualización de cómo se comporta la retención de clientes a lo largo del tiempo.
              </p>
              <p className="text-slate-700 text-xs leading-relaxed break-words">
                <strong>Mapa de calor:</strong> Visualización de patrones de actividad y comportamiento de clientes.
              </p>
            </div>

            {/* Tabla RFM */}
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-indigo-900 mb-2">📋 Tabla de Clientes RFM</h3>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                <strong>Qué muestra:</strong>
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                Lista detallada de clientes con análisis RFM (Recencia, Frecuencia, Monto) y su clasificación.
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                <strong>Métricas RFM:</strong>
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Recencia:</strong> Días desde la última compra.
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Frecuencia:</strong> Cantidad de compras realizadas.
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Monto:</strong> Valor total gastado por el cliente.
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Segmento:</strong> Clasificación del cliente (Campeón, Leal, Potencial, etc.).
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words">
                <strong>Para qué sirve:</strong> Identificar clientes valiosos, clientes en riesgo y oportunidades de reactivación.
              </p>
            </div>
          </div>
        </ExpandableSidebar>
      </div>
    </div>
  )
}

export default Clientes
