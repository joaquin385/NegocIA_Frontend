import React from 'react'

const TablaCombinacionesProductos = () => {
  // Datos simulados para las combinaciones de productos
  const combinaciones = [
    {
      id: 1,
      combinacion: "Novela + Cuaderno + Bolígrafo + Marcador",
      frecuencia: 89,
      ticketPromedio: 285,
      ticketMaximo: 450,
      ticketMinimo: 180,
      recomendaciones: "Promocionar como combo de lectura y estudio"
    },
    {
      id: 2,
      combinacion: "Libro de texto + Cuaderno + Lápices + Goma",
      frecuencia: 76,
      ticketPromedio: 320,
      ticketMaximo: 520,
      ticketMinimo: 220,
      recomendaciones: "Oportunidad para crear oferta especial de inicio de clases"
    },
    {
      id: 3,
      combinacion: "Revista + Lápiz + Sacapuntas + Regla",
      frecuencia: 65,
      ticketPromedio: 195,
      ticketMaximo: 280,
      ticketMinimo: 125,
      recomendaciones: "Usar para generar tráfico en horarios de menor demanda"
    },
    {
      id: 4,
      combinacion: "Libro técnico + Diccionario + Cuaderno + Resaltadores",
      frecuencia: 54,
      ticketPromedio: 485,
      ticketMaximo: 680,
      ticketMinimo: 320,
      recomendaciones: "Promocionar como combo profesional para estudiantes"
    },
    {
      id: 5,
      combinacion: "Cómic + Pegamento + Tijeras + Cartulina",
      frecuencia: 43,
      ticketPromedio: 235,
      ticketMaximo: 380,
      ticketMinimo: 155,
      recomendaciones: "Usar para generar ventas en horarios de tarde"
    },
    {
      id: 6,
      combinacion: "Libro de cocina + Cuaderno de recetas + Lápices + Goma",
      frecuencia: 38,
      ticketPromedio: 275,
      ticketMaximo: 420,
      ticketMinimo: 185,
      recomendaciones: "Promocionar como opción para aficionados a la cocina"
    },
    {
      id: 7,
      combinacion: "Cuento infantil + Crayones + Cuaderno + Pegamento",
      frecuencia: 32,
      ticketPromedio: 245,
      ticketMaximo: 350,
      ticketMinimo: 165,
      recomendaciones: "Combo ideal para regalos y actividades infantiles"
    },
    {
      id: 8,
      combinacion: "Libro de arte + Pinceles + Acuarelas + Cuaderno de bocetos",
      frecuencia: 28,
      ticketPromedio: 425,
      ticketMaximo: 580,
      ticketMinimo: 285,
      recomendaciones: "Promocionar como opción para artistas y creativos"
    }
  ]

  const formatearMoneda = (valor) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(valor)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
      <h3 className="text-sm font-semibold text-gray-800 mb-4">
        Combinaciones de Productos más Frecuentes
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 font-semibold text-gray-700 w-1/3">
                Combinación de Producto
              </th>
              <th className="text-center py-3 px-2 font-semibold text-gray-700">
                Frecuencia (tickets)
              </th>
              <th className="text-center py-3 px-2 font-semibold text-gray-700">
                Ticket Promedio ($)
              </th>
              <th className="text-center py-3 px-2 font-semibold text-gray-700">
                Ticket Máximo ($)
              </th>
              <th className="text-center py-3 px-2 font-semibold text-gray-700">
                Ticket Mínimo ($)
              </th>
              <th className="text-left py-3 px-2 font-semibold text-gray-700 w-1/3">
                Recomendaciones
              </th>
            </tr>
          </thead>
          <tbody>
            {combinaciones.map((combo) => (
              <tr key={combo.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2 text-gray-800">
                  <div className="truncate max-w-xs" title={combo.combinacion}>
                    {combo.combinacion}
                  </div>
                </td>
                <td className="py-3 px-2 text-center text-gray-700 font-medium">
                  {combo.frecuencia}
                </td>
                <td className="py-3 px-2 text-center text-gray-700 font-medium">
                  {formatearMoneda(combo.ticketPromedio)}
                </td>
                <td className="py-3 px-2 text-center text-gray-700">
                  {formatearMoneda(combo.ticketMaximo)}
                </td>
                <td className="py-3 px-2 text-center text-gray-700">
                  {formatearMoneda(combo.ticketMinimo)}
                </td>
                <td className="py-3 px-2 text-gray-600">
                  <div className="truncate max-w-xs" title={combo.recomendaciones}>
                    {combo.recomendaciones}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablaCombinacionesProductos
