import { useAtom } from 'jotai'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'

const PanelGeneral = () => {
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Subsección desplegable */}
      <ExpandableSidebar 
        title="Ayuda educativa - Panel General" 
        iconPosition="left"
      >
        <div className="space-y-5">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-base font-semibold text-blue-900 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2zm0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Indicadores Globales (Semáforo)
            </h3>
            <p className="text-blue-800 text-xs">
              Métricas clave con colores: verde (bien), amarillo (atención), rojo (crítico).
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Salud Financiera</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Margen neto</li>
              <li>• Liquidez</li>
              <li>• Flujo de caja</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Salud Comercial</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Ventas vs objetivo</li>
              <li>• Ticket promedio</li>
              <li>• Crecimiento ventas</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Salud Operativa</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Eficiencia operativa</li>
              <li>• Satisfacción del cliente</li>
              <li>• Tiempo de respuesta</li>
            </ul>
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
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2zm0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Indicadores Globales
                </h3>
                <p className="text-gray-500 text-sm">Sistema de semáforo para monitoreo de métricas clave</p>
              </div>
            </div>

            {/* Tabla de Indicadores Globales */}
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
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Salud Financiera */}
                    <tr className="bg-blue-50">
                      <td className="px-4 py-2 text-sm font-semibold text-blue-800" colSpan="3">
                        Salud Financiera
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Ventas</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">$85,420</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Bien - Crecimiento +8.5%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Costos</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">$69,970</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                          Revisar - Incremento +6.2%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Beneficio Neto</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">$15,450</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Bien - Crecimiento +12%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Margen de Beneficio</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">18.2%</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Bien - Por encima del 15%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Utilidad Neta</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">$12,890</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                          Revisar - Bajo vs objetivo
                        </span>
                      </td>
                    </tr>

                    {/* Salud Comercial */}
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 text-sm font-semibold text-green-800" colSpan="3">
                        Salud Comercial
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Ventas vs Objetivo</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">95.2%</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                          Revisar - 4.8% bajo objetivo
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Ticket Promedio</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">$45.80</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Bien - Crecimiento +5.3%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Crecimiento Ventas</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">+12.3%</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Bien - Por encima del 10%
                        </span>
                      </td>
                    </tr>

                    {/* Salud Operativa */}
                    <tr className="bg-purple-50">
                      <td className="px-4 py-2 text-sm font-semibold text-purple-800" colSpan="3">
                        Salud Operativa
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Rotación Inventario</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">4.2x</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                          Revisar - Bajo vs estándar 6x
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Stock Crítico</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">8%</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Bien - Dentro del rango óptimo
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Días Cobertura</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">18 días</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                          Crítico - Muy bajo para operación
                        </span>
                      </td>
                    </tr>

                    {/* Proveedores */}
                    <tr className="bg-orange-50">
                      <td className="px-4 py-2 text-sm font-semibold text-orange-800" colSpan="3">
                        Proveedores
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Plazo Promedio Pago</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">30 días</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Bien - Plazo estándar
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Cumplimiento</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">94%</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                          Revisar - Bajo del 98% objetivo
                        </span>
                      </td>
                    </tr>

                    {/* Clientes */}
                    <tr className="bg-teal-50">
                      <td className="px-4 py-2 text-sm font-semibold text-teal-800" colSpan="3">
                        Clientes
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Satisfacción</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">4.2/5</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Bien - Por encima de 4.0
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Retención</td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">78%</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Bien - Crecimiento +3%
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default PanelGeneral