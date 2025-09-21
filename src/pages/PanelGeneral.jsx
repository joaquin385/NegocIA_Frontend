import { useAtom } from 'jotai'
import { useEffect } from 'react'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'
import { metricaSeleccionadaAtom, panelExpandidoAtom } from '@/stores/metricas'
import MetricaExpandible from '../components/MetricaExpandible'
import PanelExpandible from '../components/PanelExpandible'

const PanelGeneral = () => {
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)
  const [, setMetricaSeleccionada] = useAtom(metricaSeleccionadaAtom)
  const [, setPanelExpandido] = useAtom(panelExpandidoAtom)

  // Inicializar con el análisis de Ventas desplegado por defecto
  useEffect(() => {
    const metricaVentas = {
      nombre: "Ventas",
      valor: "$85,420",
      status: "Bien - Crecimiento +8.5%",
      categoria: "Salud Financiera"
    }
    setMetricaSeleccionada(metricaVentas)
    setPanelExpandido(true)
  }, [setMetricaSeleccionada, setPanelExpandido])

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Subsección desplegable */}
      <ExpandableSidebar 
        title="Ayuda educativa - Panel General" 
        iconPosition="left"
      >
        <div>
          {/* Tabla de Indicadores Globales */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">📊 Tabla de Indicadores Globales</h3>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              <strong>Qué muestra:</strong>
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              Sistema de semáforo con métricas clave organizadas por categorías de salud del negocio.
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              <strong>Estructura de la Tabla:</strong>
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Indicador:</strong> Nombre de la métrica
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Valor:</strong> Valor actual de la métrica
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Status:</strong> Estado con colores: Verde (Bien), Amarillo (Revisar), Rojo (Crítico)
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Detalle:</strong> Botón para expandir análisis específico
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words">
              <strong>Categorías de Salud:</strong> Financiera, Comercial, Operativa, Proveedores, Clientes
            </p>
          </div>

          {/* Métricas por Categoría */}
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-green-900 mb-2">📈 Métricas por Categoría</h3>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              <strong>Salud Financiera:</strong>
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Ventas:</strong> Ingresos totales generados
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Costos:</strong> Gastos totales del negocio
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Beneficio Neto:</strong> Ganancia después de gastos
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Margen de Beneficio:</strong> Porcentaje de rentabilidad
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Utilidad Neta:</strong> Beneficio final del negocio
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              <strong>Salud Comercial:</strong>
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Ventas vs Objetivo:</strong> Cumplimiento de metas de ventas
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Ticket Promedio:</strong> Valor promedio por transacción
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Crecimiento Ventas:</strong> Incremento porcentual de ventas
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              <strong>Salud Operativa:</strong>
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Rotación Inventario:</strong> Veces que se renueva el stock
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Stock Crítico:</strong> Porcentaje de productos con stock bajo
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Días Cobertura:</strong> Días que durará el stock actual
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              <strong>Proveedores:</strong>
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Plazo Promedio Pago:</strong> Días promedio para pagar proveedores
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Cumplimiento:</strong> Porcentaje de cumplimiento de entregas
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              <strong>Clientes:</strong>
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Satisfacción:</strong> Nivel de satisfacción del cliente
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words">
              • <strong>Retención:</strong> Porcentaje de clientes que regresan
            </p>
          </div>

          {/* Panel de Análisis Detallado */}
          <div className="bg-slate-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">🔍 Panel de Análisis Detallado</h3>
            <p className="text-slate-700 text-xs leading-relaxed break-words mb-2">
              <strong>Qué hace:</strong>
            </p>
            <p className="text-slate-700 text-xs leading-relaxed break-words mb-2">
              Al hacer clic en "Detalle" de cualquier métrica, se despliega un análisis específico con gráficos, tablas y recomendaciones.
            </p>
            <p className="text-slate-700 text-xs leading-relaxed break-words mb-2">
              <strong>Tipos de Análisis Disponibles:</strong>
            </p>
            <p className="text-slate-700 text-xs leading-relaxed break-words mb-2">
              • <strong>Detalle de Ventas:</strong> Gráficos de evolución, distribución por categoría, análisis de productos
            </p>
            <p className="text-slate-700 text-xs leading-relaxed break-words mb-2">
              • <strong>Detalle de Costos:</strong> Análisis de costos por producto, proveedor y categoría
            </p>
            <p className="text-slate-700 text-xs leading-relaxed break-words mb-2">
              • <strong>Detalle de Beneficio:</strong> Análisis de rentabilidad, márgenes y ratios financieros
            </p>
            <p className="text-slate-700 text-xs leading-relaxed break-words">
              <strong>Para qué sirve:</strong> Obtener insights profundos sobre cada métrica para tomar decisiones informadas y acciones correctivas.
            </p>
          </div>

          {/* Sistema de Semáforo */}
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-indigo-900 mb-2">🚦 Sistema de Semáforo</h3>
            <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
              <strong>Colores de Status:</strong>
            </p>
            <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Verde (Bien):</strong> La métrica está en rango óptimo y funcionando correctamente
            </p>
            <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Amarillo (Revisar):</strong> La métrica necesita atención o está fuera del rango óptimo
            </p>
            <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Rojo (Crítico):</strong> La métrica requiere acción inmediata o está en estado crítico
            </p>
            <p className="text-indigo-800 text-xs leading-relaxed break-words">
              <strong>Interpretación:</strong> Los colores ayudan a identificar rápidamente qué áreas del negocio necesitan atención prioritaria.
            </p>
          </div>
        </div>
      </ExpandableSidebar>

      {/* Contenido principal con desplazamiento */}
      <div className={`
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'mr-[30%]' : 'mr-1'}
        p-6
      `}>
        <div className="max-w-7xl mx-auto">

                       {/* Indicadores Globales (Semáforo) */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-6 mb-8">
            <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2zm0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Indicadores Globales
                  </h3>
                  <p className="text-gray-500 text-sm">Sistema de semáforo para monitoreo de métricas clave</p>
                </div>
              </div>
             
            {/* Layout de dos columnas: Tabla y Panel Expandible */}
            <div className="flex gap-6">
              {/* Tabla de Indicadores Globales - 40% */}
              <div className="w-2/5">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-800">Indicadores Globales</h4>
                  </div>
                               <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Indicador
                      </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Valor
                      </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                      </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Detalle
                      </th>
                    </tr>
                  </thead>
                 <tbody className="bg-white divide-y divide-gray-200">
                                       {/* Salud Financiera */}
                    <tr className="bg-slate-50">
                      <td className="px-4 py-2 text-sm font-semibold text-slate-800" colSpan="4">
                        Salud Financiera
                      </td>
                    </tr>
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Ventas",
                        valor: "$85,420",
                        status: "Bien - Crecimiento +8.5%",
                        categoria: "Salud Financiera"
                      }}
                    />
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Costos",
                        valor: "$69,970",
                        status: "Revisar - Incremento +6.2%",
                        categoria: "Salud Financiera"
                      }}
                    />
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Beneficio Neto",
                        valor: "$15,450",
                        status: "Bien - Crecimiento +12%",
                        categoria: "Salud Financiera"
                      }}
                    />
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Margen de Beneficio",
                        valor: "18.2%",
                        status: "Bien - Por encima del 15%",
                        categoria: "Salud Financiera"
                      }}
                    />
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Utilidad Neta",
                        valor: "$12,890",
                        status: "Revisar - Bajo vs objetivo",
                        categoria: "Salud Financiera"
                      }}
                    />
                   
                                                                              {/* Salud Comercial */}
                    <tr className="bg-slate-50">
                      <td className="px-4 py-2 text-sm font-semibold text-slate-800" colSpan="4">
                        Salud Comercial
                          </td>
                        </tr>
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Ventas vs Objetivo",
                        valor: "95.2%",
                        status: "Revisar - 4.8% bajo objetivo",
                        categoria: "Salud Comercial"
                      }}
                    />
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Ticket Promedio",
                        valor: "$45.80",
                        status: "Bien - Crecimiento +5.3%",
                        categoria: "Salud Comercial"
                      }}
                    />
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Crecimiento Ventas",
                        valor: "+12.3%",
                        status: "Bien - Por encima del 10%",
                        categoria: "Salud Comercial"
                      }}
                    />
                        
                    {/* Salud Operativa */}
                    <tr className="bg-slate-50">
                      <td className="px-4 py-2 text-sm font-semibold text-slate-800" colSpan="4">
                        Salud Operativa
                          </td>
                        </tr>
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Rotación Inventario",
                        valor: "4.2x",
                        status: "Revisar - Bajo vs estándar 6x",
                        categoria: "Salud Operativa"
                      }}
                    />
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Stock Crítico",
                        valor: "8%",
                        status: "Bien - Dentro del rango óptimo",
                        categoria: "Salud Operativa"
                      }}
                    />
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Días Cobertura",
                        valor: "18 días",
                        status: "Crítico - Muy bajo para operación",
                        categoria: "Salud Operativa"
                      }}
                    />
                        
                    {/* Proveedores */}
                    <tr className="bg-orange-50">
                      <td className="px-4 py-2 text-sm font-semibold text-orange-800" colSpan="4">
                        Proveedores
                      </td>
                    </tr>
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Plazo Promedio Pago",
                        valor: "30 días",
                        status: "Bien - Plazo estándar",
                        categoria: "Proveedores"
                      }}
                    />
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Cumplimiento",
                        valor: "94%",
                        status: "Revisar - Bajo del 98% objetivo",
                        categoria: "Proveedores"
                      }}
                    />

                    {/* Clientes */}
                    <tr className="bg-teal-50">
                      <td className="px-4 py-2 text-sm font-semibold text-teal-800" colSpan="4">
                        Clientes
                      </td>
                    </tr>
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Satisfacción",
                        valor: "4.2/5",
                        status: "Bien - Por encima de 4.0",
                        categoria: "Clientes"
                      }}
                    />
                    <MetricaExpandible 
                      metrica={{
                        nombre: "Retención",
                        valor: "78%",
                        status: "Bien - Crecimiento +3%",
                        categoria: "Clientes"
                      }}
                    />
                </tbody>
              </table>
            </div>
          </div>

          {/* Panel Expandible - 60% */}
          <PanelExpandible />
        </div>
      </div>
        </div>
      </div>
    </div>
  )
 }
 
 export default PanelGeneral 