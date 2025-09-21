import React, { useState } from 'react'

const TablaAnalisisProveedores = () => {
  const [tabActiva, setTabActiva] = useState('proveedores')
  const [categoriaFiltro, setCategoriaFiltro] = useState('todas')
  const [rangoCostoFiltro, setRangoCostoFiltro] = useState('todos')
  const [paginaActual, setPaginaActual] = useState(1)
  const [proveedoresSeleccionados, setProveedoresSeleccionados] = useState(new Set())
  const [productosSeleccionados, setProductosSeleccionados] = useState(new Set())
  const proveedoresPorPagina = 10
  const productosPorPagina = 10

  // Datos simulados para análisis de proveedores
  const proveedores = [
    { 
      id: 1, 
      idProveedor: 'PV001', 
      nombre: 'Editorial Planeta', 
      totalComprado: 302871, 
      cantidadCompras: 45, 
      costoPromedio: 6730, 
      ultimaCompra: '25/07/2025', 
      diasUltimaCompra: 46, 
      categoriaABC: 'A',
      participacion: 5.2
    },
    { 
      id: 2, 
      idProveedor: 'PV002', 
      nombre: 'Librería Mayorista Central', 
      totalComprado: 252229, 
      cantidadCompras: 25, 
      costoPromedio: 10089, 
      ultimaCompra: '26/07/2025', 
      diasUltimaCompra: 45, 
      categoriaABC: 'B',
      participacion: 4.4
    },
    { 
      id: 3, 
      idProveedor: 'PV003', 
      nombre: 'Papelería Universitaria', 
      totalComprado: 142357, 
      cantidadCompras: 41, 
      costoPromedio: 3472, 
      ultimaCompra: '16/07/2025', 
      diasUltimaCompra: 55, 
      categoriaABC: 'C',
      participacion: 2.5
    },
    { 
      id: 4, 
      idProveedor: 'PV004', 
      nombre: 'Distribuidora de Arte', 
      totalComprado: 147796, 
      cantidadCompras: 32, 
      costoPromedio: 4618, 
      ultimaCompra: '05/09/2025', 
      diasUltimaCompra: 4, 
      categoriaABC: 'C',
      participacion: 2.6
    },
    { 
      id: 5, 
      idProveedor: 'PV005', 
      nombre: 'Oficina y Tecnología', 
      totalComprado: 73217, 
      cantidadCompras: 33, 
      costoPromedio: 2218, 
      ultimaCompra: '05/09/2025', 
      diasUltimaCompra: 4, 
      categoriaABC: 'C',
      participacion: 1.3
    },
    { 
      id: 6, 
      idProveedor: 'PV006', 
      nombre: 'Textos Académicos SA', 
      totalComprado: 436278, 
      cantidadCompras: 17, 
      costoPromedio: 25663, 
      ultimaCompra: '18/07/2025', 
      diasUltimaCompra: 53, 
      categoriaABC: 'B',
      participacion: 7.6
    },
    { 
      id: 7, 
      idProveedor: 'PV007', 
      nombre: 'Librería del Este', 
      totalComprado: 290490, 
      cantidadCompras: 48, 
      costoPromedio: 6051, 
      ultimaCompra: '10/08/2025', 
      diasUltimaCompra: 30, 
      categoriaABC: 'B',
      participacion: 5.0
    },
    { 
      id: 8, 
      idProveedor: 'PV008', 
      nombre: 'Editorial Nacional', 
      totalComprado: 259964, 
      cantidadCompras: 17, 
      costoPromedio: 15292, 
      ultimaCompra: '16/07/2025', 
      diasUltimaCompra: 55, 
      categoriaABC: 'B',
      participacion: 4.5
    },
    { 
      id: 9, 
      idProveedor: 'PV009', 
      nombre: 'Suministros Escolares', 
      totalComprado: 198432, 
      cantidadCompras: 28, 
      costoPromedio: 7087, 
      ultimaCompra: '22/08/2025', 
      diasUltimaCompra: 18, 
      categoriaABC: 'B',
      participacion: 3.5
    },
    { 
      id: 10, 
      idProveedor: 'PV010', 
      nombre: 'Materiales de Arte', 
      totalComprado: 167543, 
      cantidadCompras: 35, 
      costoPromedio: 4787, 
      ultimaCompra: '28/08/2025', 
      diasUltimaCompra: 12, 
      categoriaABC: 'C',
      participacion: 2.9
    },
    { 
      id: 11, 
      idProveedor: 'PV011', 
      nombre: 'Librería Mayorista Norte', 
      totalComprado: 234567, 
      cantidadCompras: 22, 
      costoPromedio: 10662, 
      ultimaCompra: '15/08/2025', 
      diasUltimaCompra: 25, 
      categoriaABC: 'A',
      participacion: 4.1
    },
    { 
      id: 12, 
      idProveedor: 'PV012', 
      nombre: 'Importadora de Libros', 
      totalComprado: 189234, 
      cantidadCompras: 31, 
      costoPromedio: 6104, 
      ultimaCompra: '03/09/2025', 
      diasUltimaCompra: 6, 
      categoriaABC: 'B',
      participacion: 3.3
    }
  ]

  // Datos simulados para análisis de productos
  const productos = [
    { 
      id: 1, 
      idProducto: 'PR001', 
      nombre: 'Novela "Cien Años de Soledad"', 
      categoria: 'Libros', 
      costoUnitario: 216, 
      proveedorPrincipal: 'Editorial Planeta', 
      comprasTotalesUnidades: 4425, 
      comprasTotalesDolares: 955800, 
      porcentajeGastoCategoria: 21.9,
      alertaMargen: 'negativo'
    },
    { 
      id: 2, 
      idProducto: 'PR002', 
      nombre: 'Libro de Matemáticas 5°', 
      categoria: 'Textos Académicos', 
      costoUnitario: 291, 
      proveedorPrincipal: 'Textos Académicos SA', 
      comprasTotalesUnidades: 1098, 
      comprasTotalesDolares: 319518, 
      porcentajeGastoCategoria: 15.7,
      alertaMargen: 'negativo'
    },
    { 
      id: 3, 
      idProducto: 'PR003', 
      nombre: 'Cuaderno Tapa Dura A4', 
      categoria: 'Papelería', 
      costoUnitario: 350, 
      proveedorPrincipal: 'Papelería Universitaria', 
      comprasTotalesUnidades: 3858, 
      comprasTotalesDolares: 1350300, 
      porcentajeGastoCategoria: 20.7,
      alertaMargen: 'disminuyendo'
    },
    { 
      id: 4, 
      idProducto: 'PR004', 
      nombre: 'Acuarelas Winsor & Newton', 
      categoria: 'Arte', 
      costoUnitario: 40, 
      proveedorPrincipal: 'Distribuidora de Arte', 
      comprasTotalesUnidades: 1174, 
      comprasTotalesDolares: 46960, 
      porcentajeGastoCategoria: 4.0,
      alertaMargen: 'disminuyendo'
    },
    { 
      id: 5, 
      idProducto: 'PR005', 
      nombre: 'Calculadora Científica Casio', 
      categoria: 'Electrónicos', 
      costoUnitario: 481, 
      proveedorPrincipal: 'Oficina y Tecnología', 
      comprasTotalesUnidades: 672, 
      comprasTotalesDolares: 323232, 
      porcentajeGastoCategoria: 4.9,
      alertaMargen: 'negativo'
    },
    { 
      id: 6, 
      idProducto: 'PR006', 
      nombre: 'Bolígrafo Pilot G2', 
      categoria: 'Papelería', 
      costoUnitario: 33, 
      proveedorPrincipal: 'Papelería Universitaria', 
      comprasTotalesUnidades: 106, 
      comprasTotalesDolares: 3498, 
      porcentajeGastoCategoria: 4.6,
      alertaMargen: 'negativo'
    },
    { 
      id: 7, 
      idProducto: 'PR007', 
      nombre: 'Libro de Historia Universal', 
      categoria: 'Textos Académicos', 
      costoUnitario: 126, 
      proveedorPrincipal: 'Editorial Nacional', 
      comprasTotalesUnidades: 3664, 
      comprasTotalesDolares: 461664, 
      porcentajeGastoCategoria: 10.0,
      alertaMargen: 'estable'
    },
    { 
      id: 8, 
      idProducto: 'PR008', 
      nombre: 'Pinceles de Acrílico Set', 
      categoria: 'Arte', 
      costoUnitario: 134, 
      proveedorPrincipal: 'Materiales de Arte', 
      comprasTotalesUnidades: 1014, 
      comprasTotalesDolares: 135876, 
      porcentajeGastoCategoria: 2.5,
      alertaMargen: 'estable'
    },
    { 
      id: 9, 
      idProducto: 'PR009', 
      nombre: 'Libro de Biología Molecular', 
      categoria: 'Textos Académicos', 
      costoUnitario: 89, 
      proveedorPrincipal: 'Textos Académicos SA', 
      comprasTotalesUnidades: 2156, 
      comprasTotalesDolares: 191884, 
      porcentajeGastoCategoria: 8.3,
      alertaMargen: 'estable'
    },
    { 
      id: 10, 
      idProducto: 'PR010', 
      nombre: 'Carpeta A4 con Ganchos', 
      categoria: 'Oficina', 
      costoUnitario: 156, 
      proveedorPrincipal: 'Suministros Escolares', 
      comprasTotalesUnidades: 2890, 
      comprasTotalesDolares: 450840, 
      porcentajeGastoCategoria: 12.1,
      alertaMargen: 'disminuyendo'
    }
  ]

  // Función para manejar selección de proveedores
  const toggleSeleccionProveedor = (proveedorId) => {
    const nuevaSeleccion = new Set(proveedoresSeleccionados)
    if (nuevaSeleccion.has(proveedorId)) {
      nuevaSeleccion.delete(proveedorId)
    } else {
      nuevaSeleccion.add(proveedorId)
    }
    setProveedoresSeleccionados(nuevaSeleccion)
  }

  // Función para manejar selección de productos
  const toggleSeleccionProducto = (productoId) => {
    const nuevaSeleccion = new Set(productosSeleccionados)
    if (nuevaSeleccion.has(productoId)) {
      nuevaSeleccion.delete(productoId)
    } else {
      nuevaSeleccion.add(productoId)
    }
    setProductosSeleccionados(nuevaSeleccion)
  }

  // Función para cambiar de pestaña y resetear paginación
  const cambiarTab = (nuevaTab) => {
    setTabActiva(nuevaTab)
    setPaginaActual(1)
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

  // Función para obtener color de categoría ABC
  const obtenerColorABC = (categoria) => {
    switch (categoria) {
      case 'A':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'B':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'C':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  // Función para obtener color y texto de alerta de margen
  const obtenerAlertaMargen = (tipo) => {
    switch (tipo) {
      case 'negativo':
        return {
          color: 'bg-red-100 text-red-800 border-red-200',
          texto: '▲ MARGEN NEGATIV',
          icono: '▲'
        }
      case 'disminuyendo':
        return {
          color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
          texto: '▲ MARGEN DISMINU',
          icono: '▲'
        }
      case 'estable':
        return {
          color: 'bg-green-100 text-green-800 border-green-200',
          texto: '✓ MARGEN ESTABLE',
          icono: '✓'
        }
      default:
        return {
          color: 'bg-gray-100 text-gray-800 border-gray-200',
          texto: 'Sin datos',
          icono: '?'
        }
    }
  }

  // Calcular datos paginados
  const indiceInicio = (paginaActual - 1) * (tabActiva === 'proveedores' ? proveedoresPorPagina : productosPorPagina)
  const indiceFin = indiceInicio + (tabActiva === 'proveedores' ? proveedoresPorPagina : productosPorPagina)
  const proveedoresPaginados = proveedores.slice(indiceInicio, indiceFin)
  const productosPaginados = productos.slice(indiceInicio, indiceFin)
  const totalPaginas = Math.ceil((tabActiva === 'proveedores' ? proveedores.length : productos.length) / (tabActiva === 'proveedores' ? proveedoresPorPagina : productosPorPagina))

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
      {/* Título y pestañas */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">Análisis de Datos</h3>
        
        {/* Pestañas */}
        <div className="flex space-x-1 mb-4">
          <button
            onClick={() => cambiarTab('proveedores')}
            className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
              tabActiva === 'proveedores' 
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Proveedores
          </button>
          <button
            onClick={() => cambiarTab('productos')}
            className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
              tabActiva === 'productos' 
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Productos
          </button>
        </div>

        {/* Filtros */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-gray-700">Filtros: Categoría:</label>
            <select 
              className="px-3 py-1 border border-gray-300 rounded text-xs"
              value={categoriaFiltro}
              onChange={(e) => setCategoriaFiltro(e.target.value)}
            >
              <option value="todas">Todas</option>
              <option value="A">Categoría A</option>
              <option value="B">Categoría B</option>
              <option value="C">Categoría C</option>
            </select>
          </div>
          {tabActiva === 'productos' && (
            <div className="flex items-center space-x-2">
              <label className="text-xs font-medium text-gray-700">Rango de costo:</label>
              <select 
                className="px-3 py-1 border border-gray-300 rounded text-xs"
                value={rangoCostoFiltro}
                onChange={(e) => setRangoCostoFiltro(e.target.value)}
              >
                <option value="todos">Todos</option>
                <option value="0-100">$0 - $100</option>
                <option value="100-300">$100 - $300</option>
                <option value="300-500">$300 - $500</option>
                <option value="500+">$500+</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Contenido de la tabla */}
      {tabActiva === 'proveedores' && (
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-2 font-semibold text-gray-700 w-20">
                  ID Proveedor
                </th>
                <th className="text-left py-2 px-2 font-semibold text-gray-700 w-32">
                  Nombre
                </th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700 w-24">
                  Total Comprado ($)
                </th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700 w-20">
                  Cantidad de Compras
                </th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700 w-20">
                  Costo Promedio ($)
                </th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700 w-20">
                  Última Compra
                </th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700 w-24">
                  Días desde Última Compra
                </th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700 w-20">
                  Categoría ABC
                </th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700 w-20">
                  % Participación
                </th>
              </tr>
            </thead>
            <tbody>
              {proveedoresPaginados.map((proveedor) => (
                <tr 
                  key={proveedor.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 ${
                    proveedoresSeleccionados.has(proveedor.id) ? 'bg-blue-50' : ''
                  }`}
                >
                  <td className="py-2 px-2 text-gray-900 font-medium">
                    {proveedor.idProveedor}
                  </td>
                  <td className="py-2 px-2 text-gray-900">
                    {proveedor.nombre}
                  </td>
                  <td className="py-2 px-2 text-right text-gray-900 font-medium">
                    {formatearMoneda(proveedor.totalComprado)}
                  </td>
                  <td className="py-2 px-2 text-right text-gray-900">
                    {proveedor.cantidadCompras}
                  </td>
                  <td className="py-2 px-2 text-right text-gray-900">
                    {formatearMoneda(proveedor.costoPromedio)}
                  </td>
                  <td className="py-2 px-2 text-center text-gray-900">
                    {proveedor.ultimaCompra}
                  </td>
                  <td className="py-2 px-2 text-right text-gray-900">
                    {proveedor.diasUltimaCompra} días
                  </td>
                  <td className="py-2 px-2 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${obtenerColorABC(proveedor.categoriaABC)}`}>
                      {proveedor.categoriaABC}
                    </span>
                  </td>
                  <td className="py-2 px-2 text-right text-gray-900 font-medium">
                    {proveedor.participacion}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tabActiva === 'productos' && (
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-2 font-semibold text-gray-700 w-20">
                  ID Producto
                </th>
                <th className="text-left py-2 px-2 font-semibold text-gray-700 w-32">
                  Nombre
                </th>
                <th className="text-left py-2 px-2 font-semibold text-gray-700 w-20">
                  Categoría
                </th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700 w-20">
                  Costo Unitario ($)
                </th>
                <th className="text-left py-2 px-2 font-semibold text-gray-700 w-32">
                  Proveedor Principal
                </th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700 w-24">
                  Compras Totales (Unidades)
                </th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700 w-24">
                  Compras Totales ($)
                </th>
                <th className="text-right py-2 px-2 font-semibold text-gray-700 w-20">
                  % Gasto Categoría
                </th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700 w-24">
                  Alerta Margen
                </th>
              </tr>
            </thead>
            <tbody>
              {productosPaginados.map((producto) => {
                const alerta = obtenerAlertaMargen(producto.alertaMargen)
                return (
                  <tr 
                    key={producto.id} 
                    className={`border-b border-gray-100 hover:bg-gray-50 ${
                      productosSeleccionados.has(producto.id) ? 'bg-blue-50' : ''
                    }`}
                  >
                    <td className="py-2 px-2 text-gray-900 font-medium">
                      {producto.idProducto}
                    </td>
                    <td className="py-2 px-2 text-gray-900">
                      {producto.nombre}
                    </td>
                    <td className="py-2 px-2 text-gray-900">
                      {producto.categoria}
                    </td>
                    <td className="py-2 px-2 text-right text-gray-900 font-medium">
                      ${producto.costoUnitario}
                    </td>
                    <td className="py-2 px-2 text-gray-900">
                      {producto.proveedorPrincipal}
                    </td>
                    <td className="py-2 px-2 text-right text-gray-900">
                      {producto.comprasTotalesUnidades.toLocaleString()}
                    </td>
                    <td className="py-2 px-2 text-right text-gray-900 font-medium">
                      ${producto.comprasTotalesDolares.toLocaleString()}
                    </td>
                    <td className="py-2 px-2 text-right text-gray-900">
                      {producto.porcentajeGastoCategoria}%
                    </td>
                    <td className="py-2 px-2 text-center">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${alerta.color}`}>
                        {alerta.texto}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Paginación */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-xs text-gray-500">
          Mostrando {indiceInicio + 1} a {Math.min(indiceFin, tabActiva === 'proveedores' ? proveedores.length : productos.length)} de {tabActiva === 'proveedores' ? proveedores.length : productos.length} {tabActiva === 'proveedores' ? 'proveedores' : 'productos'}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setPaginaActual(paginaActual - 1)}
            disabled={paginaActual === 1}
            className="px-3 py-1 text-xs border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Anterior
          </button>
          <span className="text-xs text-gray-500">
            Página {paginaActual} de {totalPaginas}
          </span>
          <button
            onClick={() => setPaginaActual(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
            className="px-3 py-1 text-xs border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}

export default TablaAnalisisProveedores
