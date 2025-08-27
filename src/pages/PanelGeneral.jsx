import { useState } from 'react'
import ExpandableSidebar from '@/components/ExpandableSidebar'

const PanelGeneral = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Subsección desplegable */}
      <ExpandableSidebar 
        title="Ayuda educativa - Panel General" 
        iconPosition="right"
        onToggle={(isOpen) => setIsSidebarOpen(isOpen)}
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

      {/* Contenido principal con desplazamiento CORREGIDO */}
      <div className={`
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'ml-96' : 'ml-0'}
        p-6
      `}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 relative">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Panel General
                </h1>
                <p className="text-gray-600">
                  Vista general de los indicadores clave de NegocIA
                </p>
              </div>
            </div>
          </div>

          {/* Grid de tarjetas de métricas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Ventas Totales</p>
                  <p className="text-2xl font-bold text-gray-900">$124,500</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Clientes Activos</p>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Productos</p>
                  <p className="text-2xl font-bold text-gray-900">856</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Tickets</p>
                  <p className="text-2xl font-bold text-gray-900">342</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gráfico de ejemplo */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Tendencia de Ventas</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gráfico de ventas mensuales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelGeneral 