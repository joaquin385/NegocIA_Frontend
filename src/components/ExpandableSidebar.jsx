import { useAtom } from 'jotai'
import { cn } from '@/lib/utils'
import { sidebarOpenAtom } from '@/stores'

const ExpandableSidebar = ({ children, title = "Ayuda educativa", iconPosition = "left" }) => {
  const [isExpanded, setIsExpanded] = useAtom(sidebarOpenAtom)

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      {/* Botón del icono de pregunta - posicionado en esquina inferior derecha */}
      <div className={cn(
        "fixed z-50 bottom-8 right-8 transition-all duration-300 ease-in-out",
        isExpanded && "right-[calc(30%-3rem)]"
      )}>
        <button
          onClick={toggleSidebar}
          className={cn(
            "w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:from-indigo-600 hover:to-blue-700 hover:scale-105 hover:shadow-2xl",
            isExpanded && "from-indigo-600 to-blue-700"
          )}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>

      {/* Sidebar desplegable */}
      <div
        className={cn(
          "fixed right-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out transform",
          isExpanded ? "translate-x-0" : "translate-x-full"
        )}
        style={{ width: '30%' }}
      >
        {/* Header del sidebar */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{title}</h2>
            <button
              onClick={toggleSidebar}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Contenido del sidebar */}
        <div className="p-6 overflow-y-auto overflow-x-hidden h-[calc(100%-6rem)] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="w-full max-w-full space-y-4">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default ExpandableSidebar 