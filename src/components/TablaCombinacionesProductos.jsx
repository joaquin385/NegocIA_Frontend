import React from 'react'

const TablaCombinacionesProductos = () => {
  // Datos simulados para las combinaciones de productos
  const combinaciones = [
    {
      id: 1,
      combinacion: "Carne vacuna + Leche + Pan + Queso",
      frecuencia: 156,
      ticketPromedio: 1250,
      ticketMaximo: 2100,
      ticketMinimo: 800,
      recomendaciones: "Promocionar como combo premium para aumentar frecuencia"
    },
    {
      id: 2,
      combinacion: "Pollo + Queso + Verduras + Arroz",
      frecuencia: 142,
      ticketPromedio: 980,
      ticketMaximo: 1650,
      ticketMinimo: 650,
      recomendaciones: "Oportunidad para crear oferta especial de fin de semana"
    },
    {
      id: 3,
      combinacion: "Leche + Pan + Galletitas + Yogur",
      frecuencia: 128,
      ticketPromedio: 750,
      ticketMaximo: 1200,
      ticketMinimo: 450,
      recomendaciones: "Usar para generar tráfico en horarios de menor demanda"
    },
    {
      id: 4,
      combinacion: "Carne vacuna + Pollo + Verduras + Pasta",
      frecuencia: 115,
      ticketPromedio: 1850,
      ticketMaximo: 2800,
      ticketMinimo: 1200,
      recomendaciones: "Promocionar como combo familiar para eventos especiales"
    },
    {
      id: 5,
      combinacion: "Queso + Galletitas + Frutas + Jugos",
      frecuencia: 98,
      ticketPromedio: 680,
      ticketMaximo: 1100,
      ticketMinimo: 420,
      recomendaciones: "Usar para generar ventas en horarios de merienda"
    },
    {
      id: 6,
      combinacion: "Pescado + Limón + Arroz + Verduras",
      frecuencia: 87,
      ticketPromedio: 920,
      ticketMaximo: 1450,
      ticketMinimo: 580,
      recomendaciones: "Promocionar como opción saludable los viernes"
    },
    {
      id: 7,
      combinacion: "Huevos + Leche + Pan + Mantequilla",
      frecuencia: 76,
      ticketPromedio: 650,
      ticketMaximo: 980,
      ticketMinimo: 380,
      recomendaciones: "Combo ideal para desayunos y brunch"
    },
    {
      id: 8,
      combinacion: "Carne de cerdo + Papas + Cebolla + Especias",
      frecuencia: 65,
      ticketPromedio: 1100,
      ticketMaximo: 1750,
      ticketMinimo: 720,
      recomendaciones: "Promocionar como opción para asados familiares"
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
