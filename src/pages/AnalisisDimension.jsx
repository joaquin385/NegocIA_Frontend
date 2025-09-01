import { useAtom } from 'jotai'
import { useParams } from 'react-router-dom'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'
import Ventas from './analisis-dimension/Ventas'

const AnalisisDimension = () => {
  const { dimension } = useParams()
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)

  const dimensionTitles = {
    ventas: 'Análisis por Dimensión - Ventas',
    clientes: 'Análisis por Dimensión - Clientes',
    productos: 'Análisis por Dimensión - Productos',
    proveedores: 'Análisis por Dimensión - Proveedores',
    finanzas: 'Análisis por Dimensión - Finanzas'
  }

  const dimensionData = {
    ventas: {
      metricas: ['Ticket promedio', 'Valor promedio ($)', 'Unidades promedio'],
      valores: ['$1,234', '4.2', '85%'],
      descripcion: 'Análisis detallado de las ventas por diferentes dimensiones'
    },
    clientes: {
      metricas: ['Clientes activos', 'Retención', 'Satisfacción'],
      valores: ['1,247', '92%', '4.8/5'],
      descripcion: 'Análisis del comportamiento y satisfacción de clientes'
    },
    productos: {
      metricas: ['Productos vendidos', 'Margen promedio', 'Rotación'],
      valores: ['856', '23%', '15 días'],
      descripcion: 'Análisis del rendimiento de productos'
    },
    proveedores: {
      metricas: ['Proveedores activos', 'Tiempo entrega', 'Calidad'],
      valores: ['45', '3.2 días', '4.6/5'],
      descripcion: 'Análisis de la relación con proveedores'
    },
    finanzas: {
      metricas: ['Margen neto', 'Liquidez', 'ROI'],
      valores: ['18%', '2.4', '24%'],
      descripcion: 'Análisis de la salud financiera'
    }
  }

  const currentData = dimensionData[dimension] || dimensionData.ventas

  // Si es la dimensión de ventas, renderizar el componente específico
  if (dimension === 'ventas') {
    return <Ventas />
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Subsección desplegable */}
      <ExpandableSidebar 
        title={`Ayuda - ${dimensionTitles[dimension]}`}
        iconPosition="left"
      >
        <div className="space-y-5">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-base font-semibold text-blue-900 mb-3">
              {dimensionTitles[dimension]}
            </h3>
            <p className="text-blue-800 text-xs">
              {currentData.descripcion}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Métricas Clave</h4>
            <div className="space-y-2">
              {currentData.metricas.map((metrica, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-xs text-gray-700">{metrica}</span>
                  <span className="text-xs font-medium text-gray-900">{currentData.valores[index]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Filtros Disponibles</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>• Fecha inicio y fin</li>
              <li>• Categoría/Producto</li>
              <li>• Región geográfica</li>
              <li>• Segmento de cliente</li>
            </ul>
          </div>
        </div>
      </ExpandableSidebar>

      {/* Contenido principal con desplazamiento */}
      <div className={`
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'ml-[20%]' : 'ml-24'}
        p-5
      `}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-7">
            <div className="flex items-center">
              {/* Solo el título, sin icono duplicado */}
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {dimensionTitles[dimension]}
              </h1>
            </div>
            <p className="text-gray-600">
              {currentData.descripcion}
            </p>
          </div>

          {/* Filtros */}
          <div className="bg-white rounded-lg shadow p-5 mb-7">
            <h3 className="text-base font-medium text-gray-900 mb-4">Filtros de Análisis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Fecha inicio:
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Fecha fin:
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Categoría / Producto:
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Todas las categorías</option>
                  <option>Electrónicos</option>
                  <option>Ropa</option>
                  <option>Alimentos</option>
                </select>
              </div>
            </div>
          </div>

          {/* Métricas principales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-7">
            {currentData.metricas.map((metrica, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-5">
                <h4 className="text-base font-medium text-gray-900 mb-2">{metrica}</h4>
                <p className="text-2xl font-bold text-blue-600">{currentData.valores[index]}</p>
              </div>
            ))}
          </div>

          {/* Gráfico de ejemplo */}
          <div className="bg-white rounded-lg shadow p-5">
            <h3 className="text-base font-medium text-gray-900 mb-4">Evolución Temporal</h3>
            <div className="h-58 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gráfico de evolución de {dimension}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalisisDimension 