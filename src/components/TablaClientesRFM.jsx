import React, { useState } from 'react'

const TablaClientesRFM = () => {
  const [paginaActual, setPaginaActual] = useState(1)
  const [clientesSeleccionados, setClientesSeleccionados] = useState(new Set())
  const clientesPorPagina = 10

  // Datos simulados para análisis de clientes con RFM
  const clientes = [
    { 
      id: 1, 
      idCliente: 'CL001', 
      nombre: 'María González', 
      totalFacturado: 29496, 
      cantidadCompras: 7, 
      ticketPromedio: 4213, 
      ultimaCompra: '14/06/2025', 
      diasUltimaCompra: 86, 
      categoriaRFM: 'Bajo' 
    },
    { 
      id: 2, 
      idCliente: 'CL002', 
      nombre: 'Juan Pérez', 
      totalFacturado: 17285, 
      cantidadCompras: 21, 
      ticketPromedio: 823, 
      ultimaCompra: '28/07/2025', 
      diasUltimaCompra: 42, 
      categoriaRFM: 'Medio' 
    },
    { 
      id: 3, 
      idCliente: 'CL003', 
      nombre: 'Ana Rodríguez', 
      totalFacturado: 37890, 
      cantidadCompras: 18, 
      ticketPromedio: 2105, 
      ultimaCompra: '28/07/2025', 
      diasUltimaCompra: 42, 
      categoriaRFM: 'Medio' 
    },
    { 
      id: 4, 
      idCliente: 'CL004', 
      nombre: 'Carlos López', 
      totalFacturado: 43317, 
      cantidadCompras: 15, 
      ticketPromedio: 2887, 
      ultimaCompra: '02/09/2025', 
      diasUltimaCompra: 6, 
      categoriaRFM: 'Premium' 
    },
    { 
      id: 5, 
      idCliente: 'CL005', 
      nombre: 'Laura Martínez', 
      totalFacturado: 10017, 
      cantidadCompras: 17, 
      ticketPromedio: 589, 
      ultimaCompra: '29/08/2025', 
      diasUltimaCompra: 10, 
      categoriaRFM: 'Medio' 
    },
    { 
      id: 6, 
      idCliente: 'CL006', 
      nombre: 'Roberto Silva', 
      totalFacturado: 6388, 
      cantidadCompras: 12, 
      ticketPromedio: 532, 
      ultimaCompra: '30/07/2025', 
      diasUltimaCompra: 40, 
      categoriaRFM: 'Bajo' 
    },
    { 
      id: 7, 
      idCliente: 'CL007', 
      nombre: 'Carmen Vega', 
      totalFacturado: 18661, 
      cantidadCompras: 12, 
      ticketPromedio: 1555, 
      ultimaCompra: '24/08/2025', 
      diasUltimaCompra: 15, 
      categoriaRFM: 'Medio' 
    },
    { 
      id: 8, 
      idCliente: 'CL008', 
      nombre: 'Diego Morales', 
      totalFacturado: 34096, 
      cantidadCompras: 14, 
      ticketPromedio: 2435, 
      ultimaCompra: '18/07/2025', 
      diasUltimaCompra: 52, 
      categoriaRFM: 'Medio' 
    },
    { 
      id: 9, 
      idCliente: 'CL009', 
      nombre: 'Patricia Ruiz', 
      totalFacturado: 52123, 
      cantidadCompras: 22, 
      ticketPromedio: 2369, 
      ultimaCompra: '01/09/2025', 
      diasUltimaCompra: 7, 
      categoriaRFM: 'Premium' 
    },
    { 
      id: 10, 
      idCliente: 'CL010', 
      nombre: 'Miguel Torres', 
      totalFacturado: 8945, 
      cantidadCompras: 8, 
      ticketPromedio: 1118, 
      ultimaCompra: '15/08/2025', 
      diasUltimaCompra: 24, 
      categoriaRFM: 'Bajo' 
    },
    { 
      id: 11, 
      idCliente: 'CL011', 
      nombre: 'Isabel Castro', 
      totalFacturado: 28734, 
      cantidadCompras: 16, 
      ticketPromedio: 1796, 
      ultimaCompra: '03/09/2025', 
      diasUltimaCompra: 5, 
      categoriaRFM: 'Medio' 
    },
    { 
      id: 12, 
      idCliente: 'CL012', 
      nombre: 'Fernando Herrera', 
      totalFacturado: 15678, 
      cantidadCompras: 9, 
      ticketPromedio: 1742, 
      ultimaCompra: '25/08/2025', 
      diasUltimaCompra: 14, 
      categoriaRFM: 'Bajo' 
    },
    { 
      id: 13, 
      idCliente: 'CL013', 
      nombre: 'Sofía Jiménez', 
      totalFacturado: 41256, 
      cantidadCompras: 19, 
      ticketPromedio: 2171, 
      ultimaCompra: '30/08/2025', 
      diasUltimaCompra: 9, 
      categoriaRFM: 'Premium' 
    },
    { 
      id: 14, 
      idCliente: 'CL014', 
      nombre: 'Andrés Vargas', 
      totalFacturado: 12345, 
      cantidadCompras: 11, 
      ticketPromedio: 1122, 
      ultimaCompra: '20/08/2025', 
      diasUltimaCompra: 19, 
      categoriaRFM: 'Medio' 
    },
    { 
      id: 15, 
      idCliente: 'CL015', 
      nombre: 'Valentina Rojas', 
      totalFacturado: 67890, 
      cantidadCompras: 25, 
      ticketPromedio: 2716, 
      ultimaCompra: '04/09/2025', 
      diasUltimaCompra: 4, 
      categoriaRFM: 'Premium' 
    }
  ]

  // Calcular paginación
  const totalPaginas = Math.ceil(clientes.length / clientesPorPagina)
  const inicio = (paginaActual - 1) * clientesPorPagina
  const fin = inicio + clientesPorPagina
  const clientesPagina = clientes.slice(inicio, fin)

  // Funciones de paginación
  const irPaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1)
    }
  }

  const irPaginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual(paginaActual + 1)
    }
  }

  // Función para seleccionar/deseleccionar cliente
  const toggleSeleccion = (clienteId) => {
    const nuevaSeleccion = new Set(clientesSeleccionados)
    if (nuevaSeleccion.has(clienteId)) {
      nuevaSeleccion.delete(clienteId)
    } else {
      nuevaSeleccion.add(clienteId)
    }
    setClientesSeleccionados(nuevaSeleccion)
  }

  // Función para formatear moneda
  const formatearMoneda = (valor) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(valor)
  }

  // Función para obtener color de categoría RFM
  const obtenerColorRFM = (categoria) => {
    switch (categoria) {
      case 'Premium':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'Medio':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Bajo':
        return 'bg-amber-100 text-amber-800 border-amber-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
      <h3 className="text-sm font-semibold text-gray-800 mb-4">
        Tabla de Clientes con Métricas y Categoría RFM
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-2 font-semibold text-gray-700 w-20">
                ID Cliente
              </th>
              <th className="text-left py-2 px-2 font-semibold text-gray-700 w-32">
                Nombre
              </th>
              <th className="text-right py-2 px-2 font-semibold text-gray-700 w-24">
                Total Facturado ($)
              </th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700 w-20">
                Cantidad de Compras
              </th>
              <th className="text-right py-2 px-2 font-semibold text-gray-700 w-24">
                Ticket Promedio ($)
              </th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700 w-20">
                Última Compra
              </th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700 w-24">
                Días desde Última Compra
              </th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700 w-20">
                Categoría RFM
              </th>
            </tr>
          </thead>
          <tbody>
            {clientesPagina.map((cliente) => (
              <tr 
                key={cliente.id} 
                className={`border-b border-gray-100 hover:bg-gray-50 ${
                  clientesSeleccionados.has(cliente.id) ? 'bg-blue-50' : ''
                }`}
              >
                <td className="py-2 px-2 text-gray-900 font-medium">
                  {cliente.idCliente}
                </td>
                <td className="py-2 px-2 text-gray-900">
                  {cliente.nombre}
                </td>
                <td className="py-2 px-2 text-right text-gray-900">
                  {formatearMoneda(cliente.totalFacturado)}
                </td>
                <td className="py-2 px-2 text-center text-gray-900">
                  {cliente.cantidadCompras}
                </td>
                <td className="py-2 px-2 text-right text-gray-900">
                  {formatearMoneda(cliente.ticketPromedio)}
                </td>
                <td className="py-2 px-2 text-center text-gray-900">
                  {cliente.ultimaCompra}
                </td>
                <td className="py-2 px-2 text-center text-gray-900">
                  {cliente.diasUltimaCompra} días
                </td>
                <td className="py-2 px-2 text-center">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${obtenerColorRFM(cliente.categoriaRFM)}`}>
                    {cliente.categoriaRFM}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-xs text-gray-500">
          Mostrando {inicio + 1} a {Math.min(fin, clientes.length)} de {clientes.length} clientes
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={irPaginaAnterior}
            disabled={paginaActual === 1}
            className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <span className="text-xs text-gray-700">
            Página {paginaActual} de {totalPaginas}
          </span>
          <button
            onClick={irPaginaSiguiente}
            disabled={paginaActual === totalPaginas}
            className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}

export default TablaClientesRFM
