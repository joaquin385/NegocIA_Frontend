import { useAtom } from 'jotai'
import { useState } from 'react'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'

const PanelGeneral = () => {
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)
  
  // Estado para controlar qué categorías están expandidas
  const [expandedCategories, setExpandedCategories] = useState({
    'Salud Financiera': true,
    'Salud Comercial': true,
    'Salud Operativa': true,
    'Proveedores': true,
    'Clientes': true
  })

  // Función para alternar el estado de una categoría
  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Subsección desplegable */}
      <ExpandableSidebar 
        title="Ayuda educativa - Panel General" 
        iconPosition="left"
      >
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Indicadores Globales (Semáforo)
            </h3>
            <p className="text-blue-800 text-sm">
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
        ${isSidebarOpen ? 'ml-[20%]' : 'ml-24'}
        p-6
      `}>
        <div className="max-w-7xl mx-auto">
          

                     

                       {/* Indicadores Globales (Semáforo) */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mr-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2zm0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Indicadores Globales
                  </h3>
                  <p className="text-gray-500 text-sm">Sistema de semáforo para monitoreo de métricas clave</p>
                </div>
              </div>
             
             <div className="overflow-x-auto">
                               <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <th className="px-8 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider border-b-2 border-blue-200">
                        Indicador
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider border-b-2 border-blue-200">
                        Valor Actual
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider border-b-2 border-blue-200">
                        Tendencia
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider border-b-2 border-blue-200">
                        Estado
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider border-b-2 border-blue-200">
                        Descripción
                      </th>
                    </tr>
                  </thead>
                 <tbody className="bg-white divide-y divide-gray-200">
                                       {/* Salud Financiera */}
                    <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500">
                      <td className="px-8 py-5 whitespace-nowrap">
                        <div className="flex items-center">
                          <button
                            onClick={() => toggleCategory('Salud Financiera')}
                            className="mr-3 p-1 hover:bg-blue-100 rounded transition-colors duration-200"
                          >
                            <svg 
                              className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${expandedCategories['Salud Financiera'] ? 'rotate-90' : ''}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                          <div className="text-lg font-bold text-blue-800">Salud Financiera</div>
                        </div>
                      </td>
                      <td className="px-8 py-5"></td>
                      <td className="px-8 py-5"></td>
                      <td className="px-8 py-5"></td>
                      <td className="px-8 py-5"></td>
                    </tr>
                    {expandedCategories['Salud Financiera'] && (
                      <>
                        <tr className="hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-green-200">
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                              <div className="text-base font-semibold text-gray-800">Margen neto</div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-xl font-bold text-gray-900 bg-green-50 px-3 py-1 rounded-lg inline-block">10.5%</div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                              <span className="text-base font-semibold text-green-600">+2.1%</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-3">
                                BIEN
                              </span>
                              <span className="text-sm text-gray-600">Margen saludable 10.5% (++2.1% vs mes anterior)</span>
                            </div>
                          </td>
                        </tr>
                        
                        <tr className="hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-yellow-200">
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                              <div className="text-base font-semibold text-gray-800">Liquidez</div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-xl font-bold text-gray-900 bg-yellow-50 px-3 py-1 rounded-lg inline-block">1.8</div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                              <span className="text-base font-semibold text-red-600">-0.2</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 mr-3">
                                ATENCIÓN
                              </span>
                              <span className="text-sm text-gray-600">Liquidez 1.8 (-0.2 vs mes anterior)</span>
                            </div>
                          </td>
                        </tr>
                        
                        <tr className="hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-green-200">
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                              <div className="text-base font-semibold text-gray-800">Flujo de caja</div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-xl font-bold text-gray-900 bg-green-50 px-3 py-1 rounded-lg inline-block">$3,567</div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                              <span className="text-base font-semibold text-green-600">+$1,234</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-3">
                                BIEN
                              </span>
                              <span className="text-sm text-gray-600">Flujo positivo $3,567 (++$1,234 vs mes anterior)</span>
                            </div>
                          </td>
                        </tr>
                      </>
                    )}
                   
                                                                              {/* Salud Comercial */}
                     <tr className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500">
                       <td className="px-8 py-5 whitespace-nowrap">
                         <div className="flex items-center">
                           <button
                             onClick={() => toggleCategory('Salud Comercial')}
                             className="mr-3 p-1 hover:bg-green-100 rounded transition-colors duration-200"
                           >
                             <svg 
                               className={`w-5 h-5 text-green-600 transition-transform duration-200 ${expandedCategories['Salud Comercial'] ? 'rotate-90' : ''}`} 
                               fill="none" 
                               stroke="currentColor" 
                               viewBox="0 0 24 24"
                             >
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                             </svg>
                           </button>
                           <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                           <div className="text-lg font-bold text-green-800">Salud Comercial</div>
                         </div>
                       </td>
                       <td className="px-8 py-5"></td>
                       <td className="px-8 py-5"></td>
                       <td className="px-8 py-5"></td>
                       <td className="px-8 py-5"></td>
                     </tr>
                   
                    {expandedCategories['Salud Comercial'] && (
                      <>
                        <tr className="hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-yellow-200">
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                              <div className="text-base font-semibold text-gray-800">Ventas vs objetivo</div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-xl font-bold text-gray-900 bg-yellow-50 px-3 py-1 rounded-lg inline-block">95.2%</div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                              <span className="text-base font-semibold text-red-600">-4.8%</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 mr-3">
                                ATENCIÓN
                              </span>
                              <span className="text-sm text-gray-600">95.2% del objetivo (-4.8% vs mes anterior)</span>
                            </div>
                          </td>
                        </tr>
                        
                        <tr className="hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-green-200">
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                              <div className="text-base font-semibold text-gray-800">Ticket promedio</div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-xl font-bold text-gray-900 bg-green-50 px-3 py-1 rounded-lg inline-block">$45.80</div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                              <span className="text-base font-semibold text-green-600">+$2.30</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-3">
                                BIEN
                              </span>
                              <span className="text-sm text-gray-600">Ticket alto $45.80 (++$2.30 vs mes anterior)</span>
                            </div>
                          </td>
                        </tr>
                        
                        <tr className="hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-green-200">
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                              <div className="text-base font-semibold text-gray-800">Crecimiento ventas</div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-xl font-bold text-gray-900 bg-green-50 px-3 py-1 rounded-lg inline-block">+12.3%</div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                              <span className="text-base font-semibold text-green-600">+2.1%</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-3">
                                BIEN
                              </span>
                              <span className="text-sm text-gray-600">Crecimiento fuerte +12.3% (++2.1% vs mes anterior)</span>
                            </div>
                          </td>
                        </tr>
                      </>
                    )}
                     
                                           {/* Salud Operativa */}
                      <tr className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500">
                        <td className="px-8 py-5 whitespace-nowrap">
                          <div className="flex items-center">
                            <button
                              onClick={() => toggleCategory('Salud Operativa')}
                              className="mr-3 p-1 hover:bg-purple-100 rounded transition-colors duration-200"
                            >
                              <svg 
                                className={`w-5 h-5 text-purple-600 transition-transform duration-200 ${expandedCategories['Salud Operativa'] ? 'rotate-90' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                            <div className="text-lg font-bold text-purple-800">Salud Operativa</div>
                          </div>
                        </td>
                        <td className="px-8 py-5"></td>
                        <td className="px-8 py-5"></td>
                        <td className="px-8 py-5"></td>
                        <td className="px-8 py-5"></td>
                      </tr>
                     
                    {expandedCategories['Salud Operativa'] && (
                      <>
                        <tr className="hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-yellow-200">
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                              <div className="text-base font-semibold text-gray-800">Rotación inventario</div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-xl font-bold text-gray-900 bg-yellow-50 px-3 py-1 rounded-lg inline-block">4.2x</div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                              <span className="text-base font-semibold text-red-600">-0.3x</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 mr-3">
                                ATENCIÓN
                              </span>
                              <span className="text-sm text-gray-600">Rotación 4.2x (-0.3x vs mes anterior)</span>
                            </div>
                          </td>
                        </tr>
                        
                        <tr className="hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-green-200">
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                              <div className="text-base font-semibold text-gray-800">Stock crítico</div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-xl font-bold text-gray-900 bg-green-50 px-3 py-1 rounded-lg inline-block">8%</div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                              <span className="text-base font-semibold text-green-600">-2%</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-200"></div>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-3">
                                BIEN
                              </span>
                              <span className="text-sm text-gray-600">Stock bajo 8% (--2% vs mes anterior)</span>
                            </div>
                          </td>
                        </tr>
                        
                        <tr className="hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-red-200">
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                              <div className="text-base font-semibold text-gray-800">Días cobertura</div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-xl font-bold text-gray-900 bg-red-50 px-3 py-1 rounded-lg inline-block">18 días</div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                              <span className="text-base font-semibold text-red-600">+3 días</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mr-3">
                                CRÍTICO
                              </span>
                              <span className="text-sm text-gray-600">Cobertura baja 18 días (++3 días vs mes anterior)</span>
                            </div>
                          </td>
                        </tr>
                      </>
                    )}
                     
                                                                                        {/* Proveedores */}
                       <tr className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500">
                         <td className="px-8 py-5 whitespace-nowrap">
                           <div className="flex items-center">
                             <button
                               onClick={() => toggleCategory('Proveedores')}
                               className="mr-3 p-1 hover:bg-orange-100 rounded transition-colors duration-200"
                             >
                               <svg 
                                 className={`w-5 h-5 text-orange-600 transition-transform duration-200 ${expandedCategories['Proveedores'] ? 'rotate-90' : ''}`} 
                                 fill="none" 
                                 stroke="currentColor" 
                                 viewBox="0 0 24 24"
                               >
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                               </svg>
                             </button>
                             <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                             <div className="text-lg font-bold text-orange-800">Proveedores</div>
                           </div>
                         </td>
                         <td className="px-8 py-5"></td>
                         <td className="px-8 py-5"></td>
                         <td className="px-8 py-5"></td>
                         <td className="px-8 py-5"></td>
                       </tr>
                     
                    {expandedCategories['Proveedores'] && (
                      <>
                        <tr className="hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-green-200">
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                              <div className="text-base font-semibold text-gray-800">Plazo promedio pago</div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-xl font-bold text-gray-900 bg-green-50 px-3 py-1 rounded-lg inline-block">30 días</div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-base font-medium text-gray-600">0 días</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-3">
                                BIEN
                              </span>
                              <span className="text-sm text-gray-600">Plazo óptimo 30 días</span>
                            </div>
                          </td>
                        </tr>
                        
                        <tr className="hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-yellow-200">
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                              <div className="text-base font-semibold text-gray-800">Cumplimiento</div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-xl font-bold text-gray-900 bg-yellow-50 px-3 py-1 rounded-lg inline-block">94%</div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                              <span className="text-base font-semibold text-red-600">-3%</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 mr-3">
                                ATENCIÓN
                              </span>
                              <span className="text-sm text-gray-600">Cumplimiento 94% (--3% vs mes anterior)</span>
                            </div>
                          </td>
                        </tr>
                      </>
                    )}
                     
                                                                                        {/* Clientes */}
                       <tr className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500">
                         <td className="px-8 py-5 whitespace-nowrap">
                           <div className="flex items-center">
                             <button
                               onClick={() => toggleCategory('Clientes')}
                               className="mr-3 p-1 hover:bg-teal-100 rounded transition-colors duration-200"
                             >
                               <svg 
                                 className={`w-5 h-5 text-teal-600 transition-transform duration-200 ${expandedCategories['Clientes'] ? 'rotate-90' : ''}`} 
                                 fill="none" 
                                 stroke="currentColor" 
                                 viewBox="0 0 24 24"
                               >
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                               </svg>
                             </button>
                             <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                             <div className="text-lg font-bold text-teal-800">Clientes</div>
                           </div>
                         </td>
                         <td className="px-8 py-5"></td>
                         <td className="px-8 py-5"></td>
                         <td className="px-8 py-5"></td>
                         <td className="px-8 py-5"></td>
                       </tr>
                     
                    {expandedCategories['Clientes'] && (
                      <>
                        <tr className="hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-green-200">
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                              <div className="text-base font-semibold text-gray-800">Satisfacción</div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-xl font-bold text-gray-900 bg-green-50 px-3 py-1 rounded-lg inline-block">4.2/5</div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                              <span className="text-base font-semibold text-green-600">+0.1</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-3">
                                BIEN
                              </span>
                              <span className="text-sm text-gray-600">Satisfacción alta 4.2/5 (++0.1 vs mes anterior)</span>
                            </div>
                          </td>
                        </tr>
                        
                        <tr className="hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-green-200">
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                              <div className="text-base font-semibold text-gray-800">Retención</div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-xl font-bold text-gray-900 bg-green-50 px-3 py-1 rounded-lg inline-block">78%</div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                              <span className="text-base font-semibold text-green-600">+5%</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-3">
                                BIEN
                              </span>
                              <span className="text-sm text-gray-600">Retención alta 78% (++5% vs mes anterior)</span>
                            </div>
                          </td>
                        </tr>
                      </>
                    )}
                   </tbody>
                 </table>
                            </div>
           </div>

          {/* Resumen Ejecutivo */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mr-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Resumen Ejecutivo
                </h3>
                <p className="text-gray-500 text-sm">Vista rápida del estado general del negocio</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Columna de Preguntas */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-gray-800">¿Cómo está la salud general del negocio hoy?</h4>
                    <h4 className="text-lg font-bold text-gray-800">¿Qué áreas están en riesgo?</h4>
                    <h4 className="text-lg font-bold text-gray-800">¿Dónde tengo mayor potencial de mejora?</h4>
                    <h4 className="text-lg font-bold text-gray-800">¿Cuáles son las 3 acciones más urgentes?</h4>
                  </div>
                </div>

                {/* Columna de Respuestas */}
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-yellow-500 rounded-full mr-3"></div>
                    <span className="text-base font-medium text-gray-700">ATENCIÓN - 3 indicadores en amarillo, 1 en rojo</span>
                  </div>
                  
                  <div className="text-base font-medium text-gray-700">
                    Stock (días de cobertura bajos), Costos (subiendo 10%)
                  </div>
                  
                  <div className="text-base font-medium text-gray-700">
                    Optimización de precios, Gestión de inventario
                  </div>
                  
                  <div className="text-base font-medium text-gray-700">
                    1. Renegociar proveedor X, 2. Ajustar precios, 3. Liquidar stock crítico
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alertas Inteligentes */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl mr-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Alertas Inteligentes
                </h3>
                <p className="text-gray-500 text-sm">Sistema de monitoreo automático de alertas de negocio</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-yellow-200">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Prioridad
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Alerta
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Análisis
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Acción Sugerida
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {/* Alerta ALTA - Margen en caída */}
                  <tr className="bg-red-50 hover:bg-red-100 transition-colors duration-200 border-l-4 border-red-500">
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-sm font-bold text-red-800">ALTA</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="text-base font-semibold text-gray-900">Margen en caída</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-sm text-gray-600">Las ventas crecieron 15%, pero el margen bajó 8%</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-sm text-gray-700 font-medium">Revisar costos o ajustar precios</div>
                    </td>
                  </tr>

                  {/* Alerta ALTA - Stock crítico */}
                  <tr className="bg-red-50 hover:bg-red-100 transition-colors duration-200 border-l-4 border-red-500">
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-sm font-bold text-red-800">ALTA</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="text-base font-semibold text-gray-900">Stock crítico</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-sm text-gray-600">20% de productos están con margen negativo y alto stock</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-sm text-gray-700 font-medium">Definir estrategia de liquidación</div>
                    </td>
                  </tr>

                  {/* Alerta MEDIA - Inventario bajo */}
                  <tr className="bg-yellow-50 hover:bg-yellow-100 transition-colors duration-200 border-l-4 border-yellow-500">
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-sm font-bold text-yellow-800">MEDIA</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="text-base font-semibold text-gray-900">Inventario bajo</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-sm text-gray-600">Inventario cubrirá solo 15 días de ventas</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-sm text-gray-700 font-medium">Aumentar pedidos de productos clave</div>
                    </td>
                  </tr>

                  {/* Alerta MEDIA - Costos subiendo */}
                  <tr className="bg-yellow-50 hover:bg-yellow-100 transition-colors duration-200 border-l-4 border-yellow-500">
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-sm font-bold text-yellow-800">MEDIA</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="text-base font-semibold text-gray-900">Costos subiendo</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-sm text-gray-600">Costos de proveedor X subieron 10% este mes</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-sm text-gray-700 font-medium">Renegociar precios o buscar alternativas</div>
                    </td>
                  </tr>

                  {/* Alerta BAJA - Productos lentos */}
                  <tr className="bg-green-50 hover:bg-green-100 transition-colors duration-200 border-l-4 border-green-500">
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm font-bold text-green-800">BAJA</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="text-base font-semibold text-gray-900">Productos lentos</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-sm text-gray-600">30% de productos tienen rotación menor a 2x</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-sm text-gray-700 font-medium">Lanzar promociones para productos de baja rotación</div>
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