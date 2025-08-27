import { useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const SecondaryNavigation = () => {
  const location = useLocation()
  
  // Solo mostrar cuando estemos en análisis por dimensión o análisis cross
  const shouldShow = location.pathname.startsWith('/analisis-dimension') || 
                     location.pathname.startsWith('/analisis-cross')
  
  if (!shouldShow) return null

  // Navegación secundaria para análisis por dimensión
  const dimensionNavItems = [
    { path: '/analisis-dimension/ventas', label: 'Ventas' },
    { path: '/analisis-dimension/tickets', label: 'Tickets' },
    { path: '/analisis-dimension/productos', label: 'Productos' },
    { path: '/analisis-dimension/clientes', label: 'Clientes' },
    { path: '/analisis-dimension/proveedores', label: 'Proveedores' },
    { path: '/analisis-dimension/inventario', label: 'Inventario' },
    { path: '/analisis-dimension/finanzas', label: 'Finanzas' }
  ]

  // Navegación secundaria para análisis cross (solo 3 opciones)
  const crossNavItems = [
    { path: '/analisis-cross/productos', label: 'Productos' },
    { path: '/analisis-cross/clientes', label: 'Clientes' },
    { path: '/analisis-cross/proveedores', label: 'Proveedores' }
  ]

  // Seleccionar los items según el tipo de análisis
  const secondaryNavItems = location.pathname.startsWith('/analisis-cross') 
    ? crossNavItems
    : dimensionNavItems

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1 py-3 overflow-x-auto">
          {secondaryNavItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors duration-200",
                location.pathname === item.path
                  ? "text-blue-600 bg-blue-100 border border-blue-200"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SecondaryNavigation 