import { useLocation } from 'react-router-dom'

const AnalisisCross = () => {
  const location = useLocation()
  
  // Extraer la dimensión de la URL
  const dimension = location.pathname.split('/')[2] || 'productos'
  
  const dimensionTitles = {
    productos: 'Análisis Cross de Productos',
    clientes: 'Análisis Cross de Clientes',
    proveedores: 'Análisis Cross de Proveedores'
  }

  const crossAnalysisData = {
    productos: {
      primary: 'Productos por Categoría',
      secondary: 'Rendimiento de Inventario',
      correlation: '0.78',
      insights: [
        'Los productos electrónicos tienen mayor rotación',
        'El 60% del inventario está en productos de bajo valor',
        'Los productos premium tienen menor rotación pero mayor margen',
        'Existe correlación entre precio y demanda estacional'
      ]
    },
    clientes: {
      primary: 'Clientes por Segmento',
      secondary: 'Valor del Cliente',
      correlation: '0.85',
      insights: [
        'Los clientes corporativos generan 70% de los ingresos',
        'Los clientes premium tienen mayor retención',
        'Existe correlación entre edad del cliente y preferencias',
        'Los clientes activos tienen mayor probabilidad de compra'
      ]
    },
    proveedores: {
      primary: 'Proveedores por Categoría',
      secondary: 'Calidad de Servicio',
      correlation: '0.73',
      insights: [
        'Los proveedores locales tienen mejor tiempo de entrega',
        'La calidad está inversamente relacionada con el precio',
        'Los proveedores certificados tienen menor tasa de devoluciones',
        'Existe correlación entre ubicación y costos logísticos'
      ]
    }
  }

  const currentData = crossAnalysisData[dimension]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {dimensionTitles[dimension]}
          </h1>
          <p className="text-gray-600">
            Análisis de correlaciones y patrones entre dimensiones para {dimension}
          </p>
        </div>

        {/* Métricas de correlación */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {currentData.correlation}
              </div>
              <p className="text-sm font-medium text-gray-600">Coeficiente de Correlación</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">
                {currentData.primary}
              </div>
              <p className="text-sm font-medium text-gray-600">Dimensión Primaria</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">
                {currentData.secondary}
              </div>
              <p className="text-sm font-medium text-gray-600">Dimensión Secundaria</p>
            </div>
          </div>
        </div>

        {/* Gráficos de correlación */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Correlación Principal</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gráfico de correlación: {currentData.primary} vs {currentData.secondary}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Patrones Identificados</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Análisis de patrones y tendencias para {dimension}</p>
            </div>
          </div>
        </div>

        {/* Insights y recomendaciones */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Insights y Recomendaciones</h3>
          <div className="space-y-4">
            {currentData.insights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-blue-800">{insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabla de métricas cruzadas */}
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Métricas Cruzadas</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Métrica
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Valor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tendencia
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Impacto
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Correlación
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {currentData.correlation}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Estable
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Alto
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

export default AnalisisCross 