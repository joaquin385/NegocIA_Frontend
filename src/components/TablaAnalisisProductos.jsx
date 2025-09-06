import React, { useState } from 'react'

const TablaAnalisisProductos = () => {
  const [paginaActual, setPaginaActual] = useState(1)
  const [productosSeleccionados, setProductosSeleccionados] = useState(new Set())
  const productosPorPagina = 10

  // Datos simulados para análisis de productos
  const productos = [
    { id: 1, nombre: 'Producto 1', unidadesVendidas: 45, ventasTotales: 4500, margenTotal: 1800, margenPorcentaje: 40, participacionUnidades: 2.1, participacionVentas: 2.3, stock: 15, diasUltimaVenta: 3 },
    { id: 2, nombre: 'Producto 2', unidadesVendidas: 38, ventasTotales: 3800, margenTotal: 1520, margenPorcentaje: 40, participacionUnidades: 1.8, participacionVentas: 1.9, stock: 22, diasUltimaVenta: 1 },
    { id: 3, nombre: 'Producto 3', unidadesVendidas: 95, ventasTotales: 9500, margenTotal: 3800, margenPorcentaje: 40, participacionUnidades: 4.4, participacionVentas: 4.8, stock: 8, diasUltimaVenta: 0 },
    { id: 4, nombre: 'Producto 4', unidadesVendidas: 67, ventasTotales: 6700, margenTotal: 2680, margenPorcentaje: 40, participacionUnidades: 3.1, participacionVentas: 3.4, stock: 12, diasUltimaVenta: 2 },
    { id: 5, nombre: 'Producto 5', unidadesVendidas: 52, ventasTotales: 5200, margenTotal: 2080, margenPorcentaje: 40, participacionUnidades: 2.4, participacionVentas: 2.6, stock: 18, diasUltimaVenta: 4 },
    { id: 6, nombre: 'Producto 6', unidadesVendidas: 73, ventasTotales: 7300, margenTotal: 2920, margenPorcentaje: 40, participacionUnidades: 3.4, participacionVentas: 3.7, stock: 6, diasUltimaVenta: 1 },
    { id: 7, nombre: 'Producto 7', unidadesVendidas: 29, ventasTotales: 2900, margenTotal: 1160, margenPorcentaje: 40, participacionUnidades: 1.3, participacionVentas: 1.5, stock: 25, diasUltimaVenta: 7 },
    { id: 8, nombre: 'Producto 8', unidadesVendidas: 84, ventasTotales: 8400, margenTotal: 3360, margenPorcentaje: 40, participacionUnidades: 3.9, participacionVentas: 4.2, stock: 9, diasUltimaVenta: 0 },
    { id: 9, nombre: 'Producto 9', unidadesVendidas: 41, ventasTotales: 4100, margenTotal: 1640, margenPorcentaje: 40, participacionUnidades: 1.9, participacionVentas: 2.1, stock: 20, diasUltimaVenta: 5 },
    { id: 10, nombre: 'Producto 10', unidadesVendidas: 56, ventasTotales: 5600, margenTotal: 2240, margenPorcentaje: 40, participacionUnidades: 2.6, participacionVentas: 2.8, stock: 14, diasUltimaVenta: 2 },
    { id: 11, nombre: 'Producto 11', unidadesVendidas: 78, ventasTotales: 7800, margenTotal: 3120, margenPorcentaje: 40, participacionUnidades: 3.6, participacionVentas: 3.9, stock: 7, diasUltimaVenta: 1 },
    { id: 12, nombre: 'Producto 12', unidadesVendidas: 33, ventasTotales: 3300, margenTotal: 1320, margenPorcentaje: 40, participacionUnidades: 1.5, participacionVentas: 1.7, stock: 23, diasUltimaVenta: 6 },
    { id: 13, nombre: 'Producto 13', unidadesVendidas: 89, ventasTotales: 8900, margenTotal: 3560, margenPorcentaje: 40, participacionUnidades: 4.1, participacionVentas: 4.5, stock: 5, diasUltimaVenta: 0 },
    { id: 14, nombre: 'Producto 14', unidadesVendidas: 47, ventasTotales: 4700, margenTotal: 1880, margenPorcentaje: 40, participacionUnidades: 2.2, participacionVentas: 2.4, stock: 16, diasUltimaVenta: 3 },
    { id: 15, nombre: 'Producto 15', unidadesVendidas: 61, ventasTotales: 6100, margenTotal: 2440, margenPorcentaje: 40, participacionUnidades: 2.8, participacionVentas: 3.1, stock: 11, diasUltimaVenta: 1 },
    { id: 16, nombre: 'Producto 16', unidadesVendidas: 74, ventasTotales: 7400, margenTotal: 2960, margenPorcentaje: 40, participacionUnidades: 3.4, participacionVentas: 3.7, stock: 8, diasUltimaVenta: 0 },
    { id: 17, nombre: 'Producto 17', unidadesVendidas: 72, ventasTotales: 7200, margenTotal: 2880, margenPorcentaje: 40, participacionUnidades: 3.3, participacionVentas: 3.6, stock: 9, diasUltimaVenta: 0 },
    { id: 18, nombre: 'Producto 18', unidadesVendidas: 35, ventasTotales: 3500, margenTotal: 1400, margenPorcentaje: 40, participacionUnidades: 1.6, participacionVentas: 1.8, stock: 21, diasUltimaVenta: 4 },
    { id: 19, nombre: 'Producto 19', unidadesVendidas: 82, ventasTotales: 8200, margenTotal: 3280, margenPorcentaje: 40, participacionUnidades: 3.8, participacionVentas: 4.1, stock: 6, diasUltimaVenta: 1 },
    { id: 20, nombre: 'Producto 20', unidadesVendidas: 48, ventasTotales: 4800, margenTotal: 1920, margenPorcentaje: 40, participacionUnidades: 2.2, participacionVentas: 2.4, stock: 17, diasUltimaVenta: 2 },
    { id: 21, nombre: 'Producto 21', unidadesVendidas: 66, ventasTotales: 6600, margenTotal: 2640, margenPorcentaje: 40, participacionUnidades: 3.0, participacionVentas: 3.3, stock: 13, diasUltimaVenta: 1 },
    { id: 22, nombre: 'Producto 22', unidadesVendidas: 39, ventasTotales: 3900, margenTotal: 1560, margenPorcentaje: 40, participacionUnidades: 1.8, participacionVentas: 2.0, stock: 19, diasUltimaVenta: 5 },
    { id: 23, nombre: 'Producto 23', unidadesVendidas: 91, ventasTotales: 9100, margenTotal: 3640, margenPorcentaje: 40, participacionUnidades: 4.2, participacionVentas: 4.6, stock: 4, diasUltimaVenta: 0 },
    { id: 24, nombre: 'Producto 24', unidadesVendidas: 54, ventasTotales: 5400, margenTotal: 2160, margenPorcentaje: 40, participacionUnidades: 2.5, participacionVentas: 2.7, stock: 15, diasUltimaVenta: 2 },
    { id: 25, nombre: 'Producto 25', unidadesVendidas: 77, ventasTotales: 7700, margenTotal: 3080, margenPorcentaje: 40, participacionUnidades: 3.6, participacionVentas: 3.9, stock: 7, diasUltimaVenta: 1 },
    { id: 26, nombre: 'Producto 26', unidadesVendidas: 43, ventasTotales: 4300, margenTotal: 1720, margenPorcentaje: 40, participacionUnidades: 2.0, participacionVentas: 2.2, stock: 18, diasUltimaVenta: 3 },
    { id: 27, nombre: 'Producto 27', unidadesVendidas: 96, ventasTotales: 9600, margenTotal: 3840, margenPorcentaje: 40, participacionUnidades: 4.4, participacionVentas: 4.8, stock: 3, diasUltimaVenta: 0 },
    { id: 28, nombre: 'Producto 28', unidadesVendidas: 31, ventasTotales: 3100, margenTotal: 1240, margenPorcentaje: 40, participacionUnidades: 1.4, participacionVentas: 1.6, stock: 24, diasUltimaVenta: 8 },
    { id: 29, nombre: 'Producto 29', unidadesVendidas: 68, ventasTotales: 6800, margenTotal: 2720, margenPorcentaje: 40, participacionUnidades: 3.1, participacionVentas: 3.4, stock: 12, diasUltimaVenta: 1 },
    { id: 30, nombre: 'Producto 30', unidadesVendidas: 50, ventasTotales: 5000, margenTotal: 2000, margenPorcentaje: 40, participacionUnidades: 2.3, participacionVentas: 2.5, stock: 16, diasUltimaVenta: 2 }
  ]

  // Calcular paginación
  const totalPaginas = Math.ceil(productos.length / productosPorPagina)
  const inicio = (paginaActual - 1) * productosPorPagina
  const fin = inicio + productosPorPagina
  const productosPagina = productos.slice(inicio, fin)

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

  // Función para seleccionar/deseleccionar producto
  const toggleSeleccion = (productoId) => {
    const nuevaSeleccion = new Set(productosSeleccionados)
    if (nuevaSeleccion.has(productoId)) {
      nuevaSeleccion.delete(productoId)
    } else {
      nuevaSeleccion.add(productoId)
    }
    setProductosSeleccionados(nuevaSeleccion)
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

  // Función para formatear porcentaje
  const formatearPorcentaje = (valor) => {
    return `${valor}%`
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
      <h3 className="text-sm font-semibold text-gray-800 mb-4">
        Análisis de Productos
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-2 font-semibold text-gray-700 w-32">
                  Producto
                </th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700">
                  Unidades vendidas
                </th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700">
                  Ventas totales
                </th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700">
                  Margen total
                </th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700">
                  Margen %
                </th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700">
                  % part. unidades
                </th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700">
                  % part. ventas
                </th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700">
                  Stock
                </th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700">
                  Días desde última venta
                </th>
              </tr>
          </thead>
          <tbody>
            {productosPagina.map((producto) => (
              <tr 
                key={producto.id} 
                className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                  productosSeleccionados.has(producto.id) ? 'bg-blue-50' : ''
                }`}
                onClick={() => toggleSeleccion(producto.id)}
              >
                <td className="py-2 px-2 text-gray-800 font-medium">
                  {producto.nombre}
                </td>
                <td className="py-2 px-2 text-center text-gray-700 font-medium">
                  {producto.unidadesVendidas}
                </td>
                <td className="py-2 px-2 text-center text-gray-700 font-medium">
                  {formatearMoneda(producto.ventasTotales)}
                </td>
                <td className="py-2 px-2 text-center text-gray-700 font-medium">
                  {formatearMoneda(producto.margenTotal)}
                </td>
                <td className="py-2 px-2 text-center text-gray-700">
                  {formatearPorcentaje(producto.margenPorcentaje)}
                </td>
                <td className="py-2 px-2 text-center text-gray-700">
                  {formatearPorcentaje(producto.participacionUnidades)}
                </td>
                <td className="py-2 px-2 text-center text-gray-700">
                  {formatearPorcentaje(producto.participacionVentas)}
                </td>
                <td className="py-2 px-2 text-center text-gray-700">
                  {producto.stock}
                </td>
                <td className="py-2 px-2 text-center text-gray-700">
                  {producto.diasUltimaVenta}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
        <button
          onClick={irPaginaAnterior}
          disabled={paginaActual === 1}
          className={`px-3 py-1 text-xs font-medium rounded ${
            paginaActual === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Anterior
        </button>
        
        <span className="text-xs text-gray-600">
          Página {paginaActual} de {totalPaginas}
        </span>
        
        <button
          onClick={irPaginaSiguiente}
          disabled={paginaActual === totalPaginas}
          className={`px-3 py-1 text-xs font-medium rounded ${
            paginaActual === totalPaginas
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default TablaAnalisisProductos
