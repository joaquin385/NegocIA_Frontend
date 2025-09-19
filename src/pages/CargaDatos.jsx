import { useAtom } from 'jotai'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'

const CargaDatos = () => {
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Subsección desplegable */}
      <ExpandableSidebar 
        title="Ayuda - Carga de Datos"
        iconPosition="left"
      >
        <div className="space-y-5">
          <div className="bg-slate-50 rounded-lg p-4">
            <h3 className="text-base font-semibold text-slate-900 mb-3">
              Carga de Datos
            </h3>
            <p className="text-slate-800 text-xs">
              Sistema para cargar, validar y procesar datos de diferentes fuentes en NegocIA.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Tipos de Datos Soportados</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>• Archivos CSV y Excel</li>
              <li>• APIs externas</li>
              <li>• Bases de datos</li>
              <li>• Datos en tiempo real</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Proceso de Carga</h4>
            <ol className="space-y-2 text-xs text-gray-600 list-decimal list-inside">
              <li>Seleccionar archivo o fuente de datos</li>
              <li>Validar formato y estructura</li>
              <li>Mapear campos a la base de datos</li>
              <li>Procesar y cargar datos</li>
              <li>Verificar integridad</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Validaciones</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>• Formato de archivo</li>
              <li>• Tipos de datos</li>
              <li>• Campos obligatorios</li>
              <li>• Duplicados</li>
              <li>• Integridad referencial</li>
            </ul>
          </div>
        </div>
      </ExpandableSidebar>

      {/* Contenido principal con desplazamiento */}
      <div className={`
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'mr-[30%]' : 'mr-1'}
        p-5
      `}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-7">
            <div className="flex items-center">
              {/* Solo el título, sin icono duplicado */}
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Carga de Datos
              </h1>
            </div>
            <p className="text-gray-600">
              Sistema para cargar y procesar datos de diferentes fuentes
            </p>
          </div>

          {/* Estado de carga */}
          <div className="bg-white rounded-lg shadow p-5 mb-7">
            <h3 className="text-base font-medium text-gray-900 mb-4">Estado del Sistema</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-xl font-bold text-green-600">Online</div>
                <div className="text-xs text-green-600">Sistema</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-xl font-bold text-blue-600">0</div>
                <div className="text-xs text-blue-600">Cargas en Proceso</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-xl font-bold text-slate-600">24</div>
                <div className="text-xs text-slate-600">Cargas Exitosas Hoy</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-xl font-bold text-red-600">2</div>
                <div className="text-xs text-red-600">Errores Hoy</div>
              </div>
            </div>
          </div>

          {/* Opciones de carga */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-7">
            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="text-base font-medium text-gray-900 mb-4">Carga de Archivo</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Seleccionar archivo:
                  </label>
                  <input
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Tipo de datos:
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Ventas</option>
                    <option>Clientes</option>
                    <option>Productos</option>
                    <option>Inventario</option>
                  </select>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                  Cargar Datos
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="text-base font-medium text-gray-900 mb-4">Carga desde API</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    URL de la API:
                  </label>
                  <input
                    type="url"
                    placeholder="https://api.ejemplo.com/datos"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Clave de API:
                  </label>
                  <input
                    type="password"
                    placeholder="Ingresa tu clave de API"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200">
                  Conectar y Cargar
                </button>
              </div>
            </div>
          </div>

          {/* Historial de cargas */}
          <div className="bg-white rounded-lg shadow p-5">
            <h3 className="text-base font-medium text-gray-900 mb-4">Historial de Cargas</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tipo
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Registros
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-gray-900">
                      26/08/2025 14:30
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-gray-900">
                      Ventas CSV
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-gray-900">
                      1,247
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Completado
                      </span>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-gray-900">
                      <button className="text-blue-600 hover:text-blue-900">Ver detalles</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-gray-900">
                      26/08/2025 12:15
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-gray-900">
                      Clientes API
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-gray-900">
                      856
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Completado
                      </span>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-gray-900">
                      <button className="text-blue-600 hover:text-blue-900">Ver detalles</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-gray-900">
                      26/08/2025 10:45
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-gray-900">
                      Productos Excel
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-gray-900">
                      342
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Error
                      </span>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-gray-900">
                      <button className="text-red-600 hover:text-red-900">Reintentar</button>
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

export default CargaDatos 