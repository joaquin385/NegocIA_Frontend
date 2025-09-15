import React, { useState } from 'react'

const TablaInventarioProductos = () => {
  const [categoriaFiltro, setCategoriaFiltro] = useState('todas')
  const [nivelStockFiltro, setNivelStockFiltro] = useState('todos')
  const [paginaActual, setPaginaActual] = useState(1)
  const [productosSeleccionados, setProductosSeleccionados] = useState(new Set())
  const productosPorPagina = 10

  // Datos simulados para productos de inventario
  const productos = [
    { 
      id: 1, 
      codigo: 'PR010', 
      nombre: 'Naranjas Premium', 
      categoria: 'Carnes', 
      stockActual: 297, 
      stockMinimo: 79, 
      stockMaximo: 1616, 
      costoUnitario: 328, 
      valorInventario: 97416, 
      diasCobertura: 10.6, 
      rotacionInventario: 0.57, 
      stockProducto: 3.0, 
      productoCritico: false, 
      estado: 'NORMAL'
    },
    { 
      id: 2, 
      codigo: 'PR011', 
      nombre: 'Coco Fresco', 
      categoria: 'Lácteos', 
      stockActual: 142, 
      stockMinimo: 45, 
      stockMaximo: 180, 
      costoUnitario: 125, 
      valorInventario: 17750, 
      diasCobertura: 8.2, 
      rotacionInventario: 1.2, 
      stockProducto: 0.5, 
      productoCritico: false, 
      estado: 'NORMAL'
    },
    { 
      id: 3, 
      codigo: 'PR012', 
      nombre: 'Granos Integrales', 
      categoria: 'Granos', 
      stockActual: 89, 
      stockMinimo: 30, 
      stockMaximo: 120, 
      costoUnitario: 95, 
      valorInventario: 8455, 
      diasCobertura: 6.8, 
      rotacionInventario: 1.8, 
      stockProducto: 0.26, 
      productoCritico: true, 
      estado: 'NORMAL'
    },
    { 
      id: 4, 
      codigo: 'PR013', 
      nombre: 'Verduras Frescas', 
      categoria: 'Verduras', 
      stockActual: 156, 
      stockMinimo: 50, 
      stockMaximo: 200, 
      costoUnitario: 78, 
      valorInventario: 12168, 
      diasCobertura: 7.5, 
      rotacionInventario: 1.5, 
      stockProducto: 0.37, 
      productoCritico: false, 
      estado: 'NORMAL'
    },
    { 
      id: 5, 
      codigo: 'PR014', 
      nombre: 'Frutas Tropicales', 
      categoria: 'Frutas', 
      stockActual: 203, 
      stockMinimo: 60, 
      stockMaximo: 250, 
      costoUnitario: 145, 
      valorInventario: 29435, 
      diasCobertura: 9.2, 
      rotacionInventario: 1.1, 
      stockProducto: 0.91, 
      productoCritico: false, 
      estado: 'NORMAL'
    },
    { 
      id: 6, 
      codigo: 'PR015', 
      nombre: 'Bebidas Naturales', 
      categoria: 'Bebidas', 
      stockActual: 178, 
      stockMinimo: 40, 
      stockMaximo: 220, 
      costoUnitario: 89, 
      valorInventario: 15842, 
      diasCobertura: 8.8, 
      rotacionInventario: 1.3, 
      stockProducto: 0.49, 
      productoCritico: false, 
      estado: 'NORMAL'
    },
    { 
      id: 7, 
      codigo: 'PR016', 
      nombre: 'Jabón Antibacterial', 
      categoria: 'Snacks', 
      stockActual: 314, 
      stockMinimo: 37, 
      stockMaximo: 329, 
      costoUnitario: 49, 
      valorInventario: 15386, 
      diasCobertura: 11.6, 
      rotacionInventario: 5.52, 
      stockProducto: 0.47, 
      productoCritico: false, 
      estado: 'ALTO'
    },
    { 
      id: 8, 
      codigo: 'PR017', 
      nombre: 'Shampoo Premium', 
      categoria: 'Limpieza', 
      stockActual: 799, 
      stockMinimo: 71, 
      stockMaximo: 1192, 
      costoUnitario: 460, 
      valorInventario: 367540, 
      diasCobertura: 33.3, 
      rotacionInventario: 0.19, 
      stockProducto: 11.33, 
      productoCritico: true, 
      estado: 'NORMAL'
    },
    { 
      id: 9, 
      codigo: 'PR018', 
      nombre: 'Crema Hidratante', 
      categoria: 'Higiene', 
      stockActual: 234, 
      stockMinimo: 55, 
      stockMaximo: 300, 
      costoUnitario: 178, 
      valorInventario: 41652, 
      diasCobertura: 12.4, 
      rotacionInventario: 0.8, 
      stockProducto: 1.29, 
      productoCritico: false, 
      estado: 'NORMAL'
    },
    { 
      id: 10, 
      codigo: 'PR019', 
      nombre: 'Detergente Líquido', 
      categoria: 'Limpieza', 
      stockActual: 167, 
      stockMinimo: 45, 
      stockMaximo: 200, 
      costoUnitario: 125, 
      valorInventario: 20875, 
      diasCobertura: 9.8, 
      rotacionInventario: 1.2, 
      stockProducto: 0.64, 
      productoCritico: false, 
      estado: 'NORMAL'
    },
    { 
      id: 11, 
      codigo: 'PR020', 
      nombre: 'Papel Higiénico', 
      categoria: 'Higiene', 
      stockActual: 445, 
      stockMinimo: 80, 
      stockMaximo: 500, 
      costoUnitario: 89, 
      valorInventario: 39605, 
      diasCobertura: 15.2, 
      rotacionInventario: 0.7, 
      stockProducto: 1.22, 
      productoCritico: false, 
      estado: 'NORMAL'
    },
    { 
      id: 12, 
      codigo: 'PR021', 
      nombre: 'Pasta Dental', 
      categoria: 'Higiene', 
      stockActual: 198, 
      stockMinimo: 50, 
      stockMaximo: 250, 
      costoUnitario: 156, 
      valorInventario: 30888, 
      diasCobertura: 10.8, 
      rotacionInventario: 0.9, 
      stockProducto: 0.95, 
      productoCritico: false, 
      estado: 'NORMAL'
    },
    { 
      id: 13, 
      codigo: 'PR022', 
      nombre: 'Cereal Integral', 
      categoria: 'Granos', 
      stockActual: 267, 
      stockMinimo: 60, 
      stockMaximo: 320, 
      costoUnitario: 134, 
      valorInventario: 35778, 
      diasCobertura: 11.9, 
      rotacionInventario: 0.8, 
      stockProducto: 1.10, 
      productoCritico: false, 
      estado: 'NORMAL'
    },
    { 
      id: 14, 
      codigo: 'PR023', 
      nombre: 'Leche Deslactosada', 
      categoria: 'Lácteos', 
      stockActual: 189, 
      stockMinimo: 40, 
      stockMaximo: 240, 
      costoUnitario: 167, 
      valorInventario: 31563, 
      diasCobertura: 8.5, 
      rotacionInventario: 1.4, 
      stockProducto: 0.97, 
      productoCritico: false, 
      estado: 'NORMAL'
    },
    { 
      id: 15, 
      codigo: 'PR024', 
      nombre: 'Yogurt Natural', 
      categoria: 'Lácteos', 
      stockActual: 156, 
      stockMinimo: 35, 
      stockMaximo: 190, 
      costoUnitario: 145, 
      valorInventario: 22620, 
      diasCobertura: 7.2, 
      rotacionInventario: 1.6, 
      stockProducto: 0.70, 
      productoCritico: false, 
      estado: 'NORMAL'
    }
  ]

  // Filtrar productos según los filtros seleccionados
  const productosFiltrados = productos.filter(producto => {
    const cumpleCategoria = categoriaFiltro === 'todas' || producto.categoria === categoriaFiltro
    const cumpleNivelStock = nivelStockFiltro === 'todos' || 
      (nivelStockFiltro === 'bajo' && producto.stockActual < producto.stockMinimo) ||
      (nivelStockFiltro === 'normal' && producto.stockActual >= producto.stockMinimo && producto.stockActual <= producto.stockMaximo) ||
      (nivelStockFiltro === 'alto' && producto.stockActual > producto.stockMaximo)
    
    return cumpleCategoria && cumpleNivelStock
  })

  // Calcular paginación
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina)
  const inicio = (paginaActual - 1) * productosPorPagina
  const fin = inicio + productosPorPagina
  const productosPaginados = productosFiltrados.slice(inicio, fin)

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

  // Función para manejar selección de productos
  const toggleSeleccionProducto = (productoId) => {
    const nuevosSeleccionados = new Set(productosSeleccionados)
    if (nuevosSeleccionados.has(productoId)) {
      nuevosSeleccionados.delete(productoId)
    } else {
      nuevosSeleccionados.add(productoId)
    }
    setProductosSeleccionados(nuevosSeleccionados)
  }

  // Función para obtener color del estado
  const obtenerColorEstado = (estado) => {
    switch (estado) {
      case 'NORMAL':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'ALTO':
        return 'bg-green-100 text-green-800 border-green-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
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

  // Obtener categorías únicas para el filtro
  const categorias = ['todas', ...new Set(productos.map(p => p.categoria))]

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Productos de Inventario</h3>
        
        {/* Filtros */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-gray-700">Filtros: Categoría:</label>
            <select 
              className="px-3 py-1 border border-gray-300 rounded text-xs"
              value={categoriaFiltro}
              onChange={(e) => {
                setCategoriaFiltro(e.target.value)
                setPaginaActual(1) // Reset pagination when filter changes
              }}
            >
              {categorias.map(categoria => (
                <option key={categoria} value={categoria}>
                  {categoria === 'todas' ? 'Todas' : categoria}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-gray-700">Nivel de stock:</label>
            <select 
              className="px-3 py-1 border border-gray-300 rounded text-xs"
              value={nivelStockFiltro}
              onChange={(e) => {
                setNivelStockFiltro(e.target.value)
                setPaginaActual(1) // Reset pagination when filter changes
              }}
            >
              <option value="todos">Todos</option>
              <option value="bajo">Bajo</option>
              <option value="normal">Normal</option>
              <option value="alto">Alto</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-2 font-semibold text-gray-700 w-16">Product</th>
              <th className="text-left py-2 px-2 font-semibold text-gray-700 w-20">Nombre</th>
              <th className="text-left py-2 px-2 font-semibold text-gray-700 w-20">Categoría</th>
              <th className="text-right py-2 px-2 font-semibold text-gray-700 w-20">Stock Actual</th>
              <th className="text-right py-2 px-2 font-semibold text-gray-700 w-20">Stock Mínimo</th>
              <th className="text-right py-2 px-2 font-semibold text-gray-700 w-20">Stock Máximo</th>
              <th className="text-right py-2 px-2 font-semibold text-gray-700 w-24">Costo Unitario ($)</th>
              <th className="text-right py-2 px-2 font-semibold text-gray-700 w-24">Valor en Inventario</th>
              <th className="text-right py-2 px-2 font-semibold text-gray-700 w-20">Días Cobertura</th>
              <th className="text-right py-2 px-2 font-semibold text-gray-700 w-20">Rotación Inventario</th>
              <th className="text-right py-2 px-2 font-semibold text-gray-700 w-20">% Stock Producto</th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700 w-24">Productos Críticos</th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700 w-20">Estado</th>
            </tr>
          </thead>
          <tbody>
            {productosPaginados.map((producto) => (
              <tr 
                key={producto.id} 
                className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                  productosSeleccionados.has(producto.id) ? 'bg-blue-50' : ''
                }`}
                onClick={() => toggleSeleccionProducto(producto.id)}
              >
                <td className="py-2 px-2 text-gray-900 font-medium">{producto.codigo}</td>
                <td className="py-2 px-2 text-gray-900">{producto.nombre}</td>
                <td className="py-2 px-2 text-gray-900">{producto.categoria}</td>
                <td className="py-2 px-2 text-right text-gray-900">{producto.stockActual.toLocaleString()}</td>
                <td className="py-2 px-2 text-right text-gray-900">{producto.stockMinimo.toLocaleString()}</td>
                <td className="py-2 px-2 text-right text-gray-900">{producto.stockMaximo.toLocaleString()}</td>
                <td className="py-2 px-2 text-right text-gray-900 font-medium">{formatearMoneda(producto.costoUnitario)}</td>
                <td className="py-2 px-2 text-right text-gray-900 font-medium">{formatearMoneda(producto.valorInventario)}</td>
                <td className="py-2 px-2 text-right text-gray-900">{producto.diasCobertura.toFixed(1)} días</td>
                <td className="py-2 px-2 text-right text-gray-900">{producto.rotacionInventario.toFixed(2)} veces/año</td>
                <td className="py-2 px-2 text-right text-gray-900">{producto.stockProducto.toFixed(2)}%</td>
                <td className="py-2 px-2 text-center">
                  <div className="flex justify-center space-x-2">
                    <label className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
                      !producto.productoCritico ? 'bg-gray-100 text-gray-800 border-gray-200' : 'bg-transparent'
                    }`}>
                      <input
                        type="radio"
                        name={`critico-${producto.id}`}
                        checked={!producto.productoCritico}
                        readOnly
                        className="sr-only"
                      />
                      NO
                    </label>
                    <label className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
                      producto.productoCritico ? 'bg-red-100 text-red-800 border-red-200' : 'bg-transparent'
                    }`}>
                      <input
                        type="radio"
                        name={`critico-${producto.id}`}
                        checked={producto.productoCritico}
                        readOnly
                        className="sr-only"
                      />
                      SÍ
                    </label>
                  </div>
                </td>
                <td className="py-2 px-2 text-center">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${obtenerColorEstado(producto.estado)}`}>
                    {producto.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      {totalPaginas > 1 && (
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-600">
            Mostrando {inicio + 1} a {Math.min(fin, productosFiltrados.length)} de {productosFiltrados.length} productos
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={irPaginaAnterior}
              disabled={paginaActual === 1}
              className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>
            <span className="text-xs text-gray-600">
              Página {paginaActual} de {totalPaginas}
            </span>
            <button
              onClick={irPaginaSiguiente}
              disabled={paginaActual === totalPaginas}
              className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TablaInventarioProductos
