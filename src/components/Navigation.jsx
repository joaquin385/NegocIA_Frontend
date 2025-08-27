import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const location = useLocation()
  
  const mainNavItems = [
    { path: '/', label: 'Panel General' },
    { path: '/analisis-dimension', label: 'Análisis por Dimensión' },
    { path: '/analisis-cross', label: 'Análisis Cross' },
    { path: '/carga-datos', label: 'Carga de Datos' }
  ]

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo NegocIA y navegación principal */}
          <div className="flex items-center space-x-8">
            {/* Logo NegocIA con estilo mejorado */}
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  NegocIA
                </h1>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </Link>

            {/* Navegación principal */}
            <nav className="hidden md:flex space-x-6">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group",
                    location.pathname === item.path
                      ? "text-blue-600 bg-blue-50 border-2 border-blue-200 shadow-sm"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:border-2 hover:border-blue-100"
                  )}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Espacio para elementos futuros del lado derecho */}
          <div className="ml-auto">
            {/* Aquí puedes agregar elementos como notificaciones, perfil de usuario, etc. */}
          </div>

          {/* Navegación móvil */}
          <div className="md:hidden ml-4">
            <button className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation 