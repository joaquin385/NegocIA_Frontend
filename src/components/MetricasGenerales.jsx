import { useAtom } from 'jotai'
import { atom } from 'jotai'

// Atom local para el tema de colores (puede ser reemplazado por uno global si es necesario)
const colorTemaAtom = atom('#10b981')

const MetricasGenerales = ({ 
  titulo = "Métricas Generales",
  subsecciones = [],
  columnas = 2,
  colorTema = "#10b981",
  className = ""
}) => {
  const [colorTemaLocal] = useAtom(colorTemaAtom)

  // Función para formatear valores según el tipo
  const formatearValor = (valor, formato = 'numero') => {
    if (valor === null || valor === undefined) return '-'
    
    switch (formato) {
      case 'moneda':
        return new Intl.NumberFormat('es-AR', {
          style: 'currency',
          currency: 'ARS',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(valor)
      
      case 'porcentaje':
        return `${valor}%`
      
      case 'numero':
        return new Intl.NumberFormat('es-AR').format(valor)
      
      case 'decimal':
        return new Intl.NumberFormat('es-AR', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 2
        }).format(valor)
      
      default:
        return valor.toString()
    }
  }

  // Calcular el ancho de las columnas dinámicamente
  const getColSpan = () => {
    if (columnas === 1) return 'col-span-1'
    if (columnas === 2) return 'col-span-1'
    if (columnas === 3) return 'col-span-1'
    if (columnas === 4) return 'col-span-1'
    return 'col-span-1'
  }

  // Calcular el grid columns dinámicamente
  const getGridCols = () => {
    if (columnas === 1) return 'grid-cols-1'
    if (columnas === 2) return 'grid-cols-1 md:grid-cols-2'
    if (columnas === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    if (columnas === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    return 'grid-cols-1 md:grid-cols-2'
  }

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 ${className}`}>
      {/* Título principal */}
      <h3 className="text-lg font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
        {titulo}
      </h3>

      {/* Grid de subsecciones */}
      <div className={`grid ${getGridCols()} gap-6`}>
        {subsecciones.map((subseccion, index) => (
          <div key={index} className={`${getColSpan()}`}>
            {/* Título de la subsección */}
            <h4 className="text-base font-medium text-gray-700 mb-4 px-1">
              {subseccion.titulo}
            </h4>

            {/* Métricas de la subsección */}
            <div className="space-y-3">
              {subseccion.metricas.map((metrica, metricaIndex) => (
                <div 
                  key={metricaIndex} 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  {/* Nombre de la métrica */}
                  <span className="text-sm text-gray-600 font-medium">
                    {metrica.nombre}
                  </span>
                  
                  {/* Valor de la métrica */}
                  <span 
                    className="text-sm  font-bold"
                    style={{ color: metrica.color || colorTema || colorTemaLocal }}
                  >
                    {formatearValor(metrica.valor, metrica.formato)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mensaje si no hay subsecciones */}
      {subsecciones.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p className="text-sm">No hay métricas disponibles</p>
        </div>
      )}
    </div>
  )
}

export default MetricasGenerales 