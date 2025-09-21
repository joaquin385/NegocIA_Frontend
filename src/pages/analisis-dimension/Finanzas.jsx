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
           <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-emerald-700 to-green-700 bg-clip-text text-transparent mb-2">
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
                    activeTab === 'evolucion' ? 'text-slate-600 border-b-2 border-slate-600 bg-slate-50' : 'text-gray-500'
                  }`}
                >
                  Evolución
                </button>
                <button
                  onClick={() => setActiveTab('rentabilidad')}
                  className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                    activeTab === 'rentabilidad' ? 'text-slate-600 border-b-2 border-slate-600 bg-slate-50' : 'text-gray-500'
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
        >
          <div>
            {/* Métricas Generales */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">📊 Métricas Generales Financieras</h3>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                <strong>Resultados Financieros:</strong>
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Ingresos totales:</strong> Suma de todos los ingresos generados por el negocio.
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Gastos totales:</strong> Suma de todos los gastos operativos y no operativos.
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Beneficio neto:</strong> Diferencia entre ingresos y gastos (ganancia o pérdida).
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Margen de beneficio:</strong> Porcentaje de beneficio sobre los ingresos totales.
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>ROI:</strong> Retorno sobre la inversión realizada en el negocio.
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                <strong>Flujo de Caja:</strong>
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Flujo de caja operativo:</strong> Dinero generado por las operaciones del negocio.
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Flujo de caja libre:</strong> Dinero disponible después de inversiones y gastos operativos.
              </p>
              <p className="text-blue-800 text-xs leading-relaxed break-words">
                • <strong>Días de caja disponibles:</strong> Días que puede operar el negocio con el efectivo actual.
              </p>
            </div>

            {/* Filtros */}
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-green-900 mb-2">🔍 Filtros de Análisis</h3>
              <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
                <strong>Filtro por Fecha:</strong> Permite seleccionar el período de análisis financiero (hoy, ayer, última semana, etc.).
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
                Muestra la evolución temporal de ingresos totales, gastos totales y beneficio neto. Permite identificar tendencias de crecimiento y rentabilidad.
              </p>
              <p className="text-slate-700 text-xs leading-relaxed break-words mb-2">
                <strong>Rentabilidad:</strong>
              </p>
              <p className="text-slate-700 text-xs leading-relaxed break-words mb-2">
                Visualiza la evolución de indicadores de rentabilidad: Margen %, ROI (Retorno sobre Inversión) y ROA (Retorno sobre Activos).
              </p>
              <p className="text-slate-700 text-xs leading-relaxed break-words">
                <strong>Para qué sirve:</strong> Identificar patrones estacionales, tendencias de rentabilidad y el impacto de estrategias financieras.
              </p>
            </div>

            {/* Tabla de Estado de Resultados */}
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-indigo-900 mb-2">📋 Estado de Resultados</h3>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                <strong>Qué muestra:</strong>
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                Reporte financiero detallado que muestra los ingresos, gastos y beneficios del negocio en un período específico.
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                <strong>Estructura del Estado de Resultados:</strong>
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Ingresos:</strong> Ventas brutas, descuentos, ingresos netos.
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Costos:</strong> Costo de productos vendidos, costos directos.
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Gastos Operativos:</strong> Gastos de administración, ventas, marketing.
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Gastos No Operativos:</strong> Intereses, impuestos, otros gastos.
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Resultados:</strong> Beneficio bruto, beneficio operativo, beneficio neto.
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
                • <strong>Márgenes:</strong> Margen bruto, margen operativo, margen neto.
              </p>
              <p className="text-indigo-800 text-xs leading-relaxed break-words">
                <strong>Para qué sirve:</strong> Evaluar la rentabilidad del negocio, identificar áreas de mejora en costos y gastos, y tomar decisiones financieras informadas.
              </p>
            </div>
          </div>
        </ExpandableSidebar>
      </div>
    </div>
  )
}

export default Finanzas
