import { useAtom } from 'jotai'
import { useState } from 'react'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'
import MetricasGenerales from '@/components/MetricasGenerales'
import GraficoEvolucionFinanciero from '@/components/charts/GraficoEvolucionFinanciero'
import GraficoEvolucionRentabilidad from '@/components/charts/GraficoEvolucionRentabilidad'
import TablaEstadoResultados from '@/components/TablaEstadoResultados'
import FiltrosFecha from '@/components/FiltrosFecha'

const Finanzas = () => {
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)
  const [activeTab, setActiveTab] = useState('evolucion')
  const [metrica, setMetrica] = useState('ingresos')
  const [fechaInicio, setFechaInicio] = useState('2025-07-28')
  const [fechaFin, setFechaFin] = useState('2025-08-28')

  // Datos simulados para el gráfico de evolución financiera
  const datosEvolucionFinanciera = [
    { fecha: '01/02', ingresos: 42000, gastos: 28000, beneficio: 14000 },
    { fecha: '02/02', ingresos: 43500, gastos: 29000, beneficio: 14500 },
    { fecha: '03/02', ingresos: 45000, gastos: 30000, beneficio: 15000 },
    { fecha: '04/02', ingresos: 48000, gastos: 32000, beneficio: 16000 },
    { fecha: '05/02', ingresos: 53500, gastos: 35000, beneficio: 18500 },
    { fecha: '06/02', ingresos: 49000, gastos: 33000, beneficio: 16000 },
    { fecha: '07/02', ingresos: 52000, gastos: 34000, beneficio: 18000 },
    { fecha: '08/02', ingresos: 55000, gastos: 36000, beneficio: 19000 },
    { fecha: '09/02', ingresos: 58000, gastos: 38000, beneficio: 20000 },
    { fecha: '10/02', ingresos: 54000, gastos: 42000, beneficio: 12000 },
    { fecha: '11/02', ingresos: 57000, gastos: 45000, beneficio: 12000 },
    { fecha: '12/02', ingresos: 65000, gastos: 46000, beneficio: 19000 },
    { fecha: '01/03', ingresos: 62000, gastos: 41000, beneficio: 21000 },
    { fecha: '02/03', ingresos: 68000, gastos: 43000, beneficio: 25000 },
    { fecha: '03/03', ingresos: 71000, gastos: 45000, beneficio: 26000 },
    { fecha: '04/03', ingresos: 75000, gastos: 48000, beneficio: 27000 },
    { fecha: '05/03', ingresos: 78000, gastos: 50000, beneficio: 28000 },
    { fecha: '06/03', ingresos: 72000, gastos: 46000, beneficio: 26000 },
    { fecha: '07/03', ingresos: 76000, gastos: 49000, beneficio: 27000 },
    { fecha: '08/03', ingresos: 80000, gastos: 52000, beneficio: 28000 },
    { fecha: '09/03', ingresos: 82000, gastos: 54000, beneficio: 28000 },
    { fecha: '10/03', ingresos: 78000, gastos: 58000, beneficio: 20000 },
    { fecha: '11/03', ingresos: 85000, gastos: 62000, beneficio: 23000 },
    { fecha: '12/03', ingresos: 90000, gastos: 65000, beneficio: 25000 }
  ]

  // Datos simulados para el gráfico de evolución de rentabilidad
  const datosEvolucionRentabilidad = [
    { fecha: '01/02', margenPorcentaje: 33.3, roi: 12.5, roa: 8.2 },
    { fecha: '02/02', margenPorcentaje: 33.3, roi: 12.8, roa: 8.4 },
    { fecha: '03/02', margenPorcentaje: 33.3, roi: 13.1, roa: 8.6 },
    { fecha: '04/02', margenPorcentaje: 33.3, roi: 13.4, roa: 8.8 },
    { fecha: '05/02', margenPorcentaje: 34.6, roi: 14.2, roa: 9.3 },
    { fecha: '06/02', margenPorcentaje: 32.7, roi: 13.8, roa: 9.0 },
    { fecha: '07/02', margenPorcentaje: 34.6, roi: 14.5, roa: 9.5 },
    { fecha: '08/02', margenPorcentaje: 34.5, roi: 14.8, roa: 9.7 },
    { fecha: '09/02', margenPorcentaje: 34.5, roi: 15.1, roa: 9.9 },
    { fecha: '10/02', margenPorcentaje: 22.2, roi: 10.5, roa: 6.9 },
    { fecha: '11/02', margenPorcentaje: 21.1, roi: 10.8, roa: 7.1 },
    { fecha: '12/02', margenPorcentaje: 29.2, roi: 13.2, roa: 8.7 },
    { fecha: '01/03', margenPorcentaje: 33.9, roi: 15.8, roa: 10.4 },
    { fecha: '02/03', margenPorcentaje: 36.8, roi: 17.2, roa: 11.3 },
    { fecha: '03/03', margenPorcentaje: 36.6, roi: 17.8, roa: 11.7 },
    { fecha: '04/03', margenPorcentaje: 36.0, roi: 18.2, roa: 11.9 },
    { fecha: '05/03', margenPorcentaje: 35.9, roi: 18.5, roa: 12.1 },
    { fecha: '06/03', margenPorcentaje: 36.1, roi: 18.8, roa: 12.3 },
    { fecha: '07/03', margenPorcentaje: 35.5, roi: 19.1, roa: 12.5 },
    { fecha: '08/03', margenPorcentaje: 35.0, roi: 19.4, roa: 12.7 },
    { fecha: '09/03', margenPorcentaje: 34.1, roi: 19.7, roa: 12.9 },
    { fecha: '10/03', margenPorcentaje: 25.6, roi: 15.2, roa: 10.0 },
    { fecha: '11/03', margenPorcentaje: 27.1, roi: 16.8, roa: 11.0 },
    { fecha: '12/03', margenPorcentaje: 27.8, roi: 17.5, roa: 11.5 }
  ]

  // Datos simulados para métricas generales de finanzas
  const metricasGenerales = [
    {
      titulo: 'Métricas Generales',
      metricas: [
        { 
          nombre: 'Ingresos totales', 
          valor: 2847890,
          formato: 'moneda'
        },
        { 
          nombre: 'Gastos totales', 
          valor: 1956780,
          formato: 'moneda'
        },
        { 
          nombre: 'Beneficio neto', 
          valor: 891110,
          formato: 'moneda'
        },
        { 
          nombre: 'Margen de beneficio', 
          valor: 31.3,
          formato: 'porcentaje'
        },
        { 
          nombre: 'ROI', 
          valor: 15.7,
          formato: 'porcentaje'
        }
      ]
    },
    {
      titulo: 'Flujo de Caja',
      metricas: [
        { 
          nombre: 'Flujo de caja operativo', 
          valor: 1256780,
          formato: 'moneda'
        },
        { 
          nombre: 'Flujo de caja libre', 
          valor: 890450,
          formato: 'moneda'
        },
        { 
          nombre: 'Días de caja disponibles', 
          valor: 45,
          formato: 'numero'
        }
      ]
    },
    {
      titulo: 'Análisis de Rentabilidad',
      metricas: [
        { 
          nombre: 'ROA (Retorno sobre activos)', 
          valor: 12.4,
          formato: 'porcentaje'
        },
        { 
          nombre: 'ROE (Retorno sobre patrimonio)', 
          valor: 18.9,
          formato: 'porcentaje'
        },
        { 
          nombre: 'Margen bruto', 
          valor: 45.2,
          formato: 'porcentaje'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="mb-5">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 bg-clip-text text-transparent mb-2">
            Análisis de Finanzas
          </h1>
          <p className="text-sm text-gray-600">Análisis completo de métricas y tendencias financieras por dimensión</p>
        </div>

        {/* Filtros */}
        <FiltrosFecha 
          fechaInicio={fechaInicio}
          fechaFin={fechaFin}
          onFechaInicioChange={setFechaInicio}
          onFechaFinChange={setFechaFin}
        />

        {/* Contenido principal */}
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
                  onClick={() => setActiveTab('rentabilidad')}
                  className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                    activeTab === 'rentabilidad' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' : 'text-gray-500'
                  }`}
                >
                  Rentabilidad
                </button>
              </div>

              {/* Contenido de las pestañas */}
              {activeTab === 'evolucion' && (
                <GraficoEvolucionFinanciero
                  datos={datosEvolucionFinanciera}
                  titulo="Evolución Ingresos vs Gastos vs Beneficio Neto"
                  altura="400px"
                  formatearEjeY={(value) => `$${value.toLocaleString()}`}
                  formatearTooltip={(value, name) => [`$${value.toLocaleString()}`, name]}
                />
              )}

              {activeTab === 'rentabilidad' && (
                <GraficoEvolucionRentabilidad
                  datos={datosEvolucionRentabilidad}
                  titulo="Evolución de Rentabilidad - Margen %, ROI y ROA"
                  altura="400px"
                  formatearEjeY={(value) => `${value}%`}
                  formatearTooltip={(value, name) => [`${value}%`, name]}
                />
              )}
            </div>
          </div>
        </div>

        {/* Estado de Resultados */}
        <div className="mt-5">
          <TablaEstadoResultados />
        </div>

        {/* Sidebar de ayuda educativa */}
        <ExpandableSidebar
          title="Ayuda educativa - Análisis Financiero"
          iconPosition="right"
          content={
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Qué es el Análisis Financiero?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  El análisis financiero es una herramienta fundamental para evaluar la salud económica de tu negocio. 
                  Permite identificar tendencias, medir la rentabilidad y tomar decisiones informadas sobre inversiones y gastos.
                </p>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-800 mb-2">Métricas Clave</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><strong>Ingresos totales:</strong> Suma de todos los ingresos generados</li>
                  <li><strong>Beneficio neto:</strong> Ingresos menos gastos totales</li>
                  <li><strong>Margen de beneficio:</strong> Porcentaje de beneficio sobre ingresos</li>
                  <li><strong>ROI:</strong> Retorno sobre la inversión realizada</li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-800 mb-2">Análisis de Rentabilidad</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Métricas que evalúan la eficiencia financiera:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>ROA:</strong> Retorno sobre activos totales</li>
                  <li><strong>ROE:</strong> Retorno sobre patrimonio neto</li>
                  <li><strong>Margen bruto:</strong> Beneficio antes de gastos operativos</li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-800 mb-2">Beneficios del Análisis</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Identificación de tendencias financieras</li>
                  <li>• Optimización de recursos y gastos</li>
                  <li>• Mejora en la toma de decisiones</li>
                  <li>• Control de flujo de caja</li>
                  <li>• Evaluación de rentabilidad por segmentos</li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default Finanzas
