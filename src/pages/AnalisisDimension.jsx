import { useLocation } from 'react-router-dom'

const AnalisisDimension = () => {
  const location = useLocation()
  
  // Extraer la dimensión de la URL
  const dimension = location.pathname.split('/')[2] || 'ventas'
  
  const dimensionTitles = {
    ventas: 'Análisis de Ventas',
    tickets: 'Análisis de Tickets',
    productos: 'Análisis de Productos',
    clientes: 'Análisis de Clientes',
    proveedores: 'Análisis de Proveedores',
    inventario: 'Análisis de Inventario',
    finanzas: 'Análisis Financiero'
  }

  const dimensionData = {
    ventas: {
      metric: '$124,500',
      change: '+12.5%',
      changeType: 'positive',
      description: 'Ventas totales del período actual'
    },
    tickets: {
      metric: '342',
      change: '+8.2%',
      changeType: 'positive',
      description: 'Total de tickets procesados'
    },
    productos: {
      metric: '856',
      change: '+5.1%',
      changeType: 'positive',
      description: 'Productos en catálogo activo'
    },
    clientes: {
      metric: '1,247',
      change: '+15.3%',
      changeType: 'positive',
      description: 'Clientes activos registrados'
    },
    proveedores: {
      metric: '89',
      change: '+2.1%',
      changeType: 'positive',
      description: 'Proveedores activos'
    },
    inventario: {
      metric: '12,450',
      change: '-3.2%',
      changeType: 'negative',
      description: 'Unidades en inventario'
    },
    finanzas: {
      metric: '$89,200',
      change: '+18.7%',
      changeType: 'positive',
      description: 'Ingresos netos del período'
    }
  }

  const currentData = dimensionData[dimension]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {dimensionTitles[dimension]}
          </h1>
          <p className="text-gray-600">
            Análisis detallado de la dimensión {dimension}
          </p>
        </div>

        {/* Métrica principal */}
        <div className="bg-white rounded-lg shadow p-8 mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {currentData.metric}
            </div>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              currentData.changeType === 'positive' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {currentData.change}
            </div>
            <p className="text-gray-600 mt-2">{currentData.description}</p>
          </div>
        </div>

        {/* Gráficos y análisis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Tendencia Temporal</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gráfico de tendencia para {dimension}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Distribución</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gráfico de distribución para {dimension}</p>
            </div>
          </div>
        </div>

        {/* Tabla de datos */}
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Datos Detallados</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Indicador
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Valor Actual
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cambio
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Total
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {currentData.metric}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {currentData.change}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      currentData.changeType === 'positive' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {currentData.changeType === 'positive' ? 'Mejorando' : 'Disminuyendo'}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalisisDimension 