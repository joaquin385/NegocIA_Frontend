import { useAtom } from 'jotai'
import { useLocation } from 'react-router-dom'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'

const AnalisisCross = () => {
  const location = useLocation()
  const dimension = location.pathname.split('/')[2] || 'productos'
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)
  
  const dimensionTitles = {
    productos: 'Análisis Cross de Productos',
    clientes: 'Análisis Cross de Clientes',
    proveedores: 'Análisis Cross de Proveedores'
  }
  
  const crossAnalysisData = {
    productos: {
      metricas: ['Ticket promedio', 'Valor promedio ($)', 'Unidades promedio'],
      valores: ['$1,234', '4.2', '85%'],
      descripcion: 'Análisis cruzado de productos con múltiples dimensiones'
    },
    clientes: {
      metricas: ['Clientes activos', 'Retención', 'Satisfacción'],
      valores: ['1,247', '92%', '4.8/5'],
      descripcion: 'Análisis cruzado de clientes por diferentes criterios'
    },
    proveedores: {
      metricas: ['Proveedores activos', 'Tiempo entrega', 'Calidad'],
      valores: ['45', '3.2 días', '4.6/5'],
      descripcion: 'Análisis cruzado de proveedores y su rendimiento'
    }
  }
  
  const currentData = crossAnalysisData[dimension]

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Subsección desplegable */}
      <ExpandableSidebar 
        title={`Ayuda - ${dimensionTitles[dimension]}`}
        iconPosition="left"
      >
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              {dimensionTitles[dimension]}
            </h3>
            <p className="text-blue-800 text-sm">
              {currentData.descripcion}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">¿Qué es el Análisis Cross?</h4>
            <p className="text-sm text-gray-600">
              El análisis cross permite examinar las relaciones entre diferentes dimensiones del negocio, 
              identificando patrones y correlaciones que no serían visibles en análisis individuales.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Dimensiones Analizadas</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Temporal (fechas, períodos)</li>
              <li>• Geográfica (regiones, países)</li>
              <li>• Categórica (productos, servicios)</li>
              <li>• Comportamental (clientes, segmentos)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Métricas Clave</h4>
            <div className="space-y-2">
              {currentData.metricas.map((metrica, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">{metrica}</span>
                  <span className="text-sm font-medium text-gray-900">{currentData.valores[index]}</span>
                </div>
              ))}
            </div>
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
          <div className="mb-8">
            <div className="flex items-center">
              {/* Solo el título, sin icono duplicado */}
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {dimensionTitles[dimension]}
              </h1>
            </div>
            <p className="text-gray-600">
              {currentData.descripcion}
            </p>
          </div>

          {/* Filtros */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Filtros de Análisis Cross</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha inicio:
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha fin:
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoría / Producto:
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Carnes</option>
                  <option>Lácteos</option>
                  <option>Verduras</option>
                  <option>Frutas</option>
                </select>
              </div>
            </div>
          </div>

          {/* Métricas principales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {currentData.metricas.map((metrica, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">{metrica}</h4>
                <p className="text-3xl font-bold text-blue-600">{currentData.valores[index]}</p>
              </div>
            ))}
          </div>

          {/* Análisis Cross */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Evolución</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Gráfico de evolución cross</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Evolución por tipo de ticket</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Gráfico por tipo de ticket</p>
              </div>
            </div>
          </div>

          {/* Tabla de datos cross */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Distribución Cross</h3>
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
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentData.metricas.map((metrica, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {metrica}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {currentData.valores[index]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          +5.2%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalisisCross 