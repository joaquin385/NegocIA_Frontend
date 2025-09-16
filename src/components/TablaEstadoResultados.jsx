import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { agrupacionAtom } from '@/stores'

const TablaEstadoResultados = () => {
  const [agrupacion, setAgrupacion] = useAtom(agrupacionAtom)
  const [comparacion, setComparacion] = useState('vs-mes-anterior')
  const [seccionesExpandidas, setSeccionesExpandidas] = useState({
    ingresos: false,
    costos: false,
    resultado: false
  })

  const toggleSeccion = (seccion) => {
    setSeccionesExpandidas(prev => ({
      ...prev,
      [seccion]: !prev[seccion]
    }))
  }

  // Datos simulados para el estado de resultados
  const datosEstadoResultados = {
    'dia': [
      {
        fecha: '01/02',
        ventasNetas: 42000,
        otrosIngresos: 2500,
        costoVentas: 28000,
        gastosOperativos: 8500,
        gastosAdministrativos: 3200,
        gastosVentas: 1800,
        ingresosFinancieros: 450,
        gastosFinancieros: 320,
        otrosIngresosNoOperativos: 120,
        otrosGastos: 80,
        impuestos: 2800
      },
      {
        fecha: '02/02',
        ventasNetas: 43500,
        otrosIngresos: 2800,
        costoVentas: 29000,
        gastosOperativos: 8800,
        gastosAdministrativos: 3300,
        gastosVentas: 1900,
        ingresosFinancieros: 480,
        gastosFinancieros: 340,
        otrosIngresosNoOperativos: 130,
        otrosGastos: 90,
        impuestos: 2950
      }
    ],
    'mes': [
      {
        fecha: 'Feb',
        ventasNetas: 1280000,
        otrosIngresos: 75000,
        costoVentas: 850000,
        gastosOperativos: 250000,
        gastosAdministrativos: 95000,
        gastosVentas: 55000,
        ingresosFinancieros: 12000,
        gastosFinancieros: 8500,
        otrosIngresosNoOperativos: 3500,
        otrosGastos: 2200,
        impuestos: 85000
      },
      {
        fecha: 'Mar',
        ventasNetas: 1450000,
        otrosIngresos: 85000,
        costoVentas: 950000,
        gastosOperativos: 280000,
        gastosAdministrativos: 105000,
        gastosVentas: 62000,
        ingresosFinancieros: 15000,
        gastosFinancieros: 9500,
        otrosIngresosNoOperativos: 4200,
        otrosGastos: 2800,
        impuestos: 95000
      }
    ],
    'año': [
      {
        fecha: '2024',
        ventasNetas: 15200000,
        otrosIngresos: 950000,
        costoVentas: 10200000,
        gastosOperativos: 3200000,
        gastosAdministrativos: 1200000,
        gastosVentas: 680000,
        ingresosFinancieros: 180000,
        gastosFinancieros: 120000,
        otrosIngresosNoOperativos: 45000,
        otrosGastos: 28000,
        impuestos: 1100000
      },
      {
        fecha: '2025',
        ventasNetas: 16800000,
        otrosIngresos: 1100000,
        costoVentas: 11200000,
        gastosOperativos: 3500000,
        gastosAdministrativos: 1350000,
        gastosVentas: 750000,
        ingresosFinancieros: 220000,
        gastosFinancieros: 140000,
        otrosIngresosNoOperativos: 55000,
        otrosGastos: 35000,
        impuestos: 1250000
      }
    ]
  }

  // Función para obtener datos según la agrupación
  const obtenerDatos = () => {
    return datosEstadoResultados[agrupacion] || datosEstadoResultados['mes']
  }

  // Función para calcular métricas derivadas
  const calcularMetricas = (datos) => {
    return datos.map(item => ({
      ...item,
      totalIngresosOperativos: item.ventasNetas + item.otrosIngresos,
      totalCostosGastos: item.costoVentas + item.gastosOperativos + item.gastosAdministrativos + item.gastosVentas,
      utilidadOperativa: (item.ventasNetas + item.otrosIngresos) - (item.costoVentas + item.gastosOperativos + item.gastosAdministrativos + item.gastosVentas),
      resultadoNoOperativo: (item.ingresosFinancieros + item.otrosIngresosNoOperativos) - (item.gastosFinancieros + item.otrosGastos),
      utilidadAntesImpuestos: ((item.ventasNetas + item.otrosIngresos) - (item.costoVentas + item.gastosOperativos + item.gastosAdministrativos + item.gastosVentas)) + ((item.ingresosFinancieros + item.otrosIngresosNoOperativos) - (item.gastosFinancieros + item.otrosGastos)),
      utilidadNeta: ((item.ventasNetas + item.otrosIngresos) - (item.costoVentas + item.gastosOperativos + item.gastosAdministrativos + item.gastosVentas)) + ((item.ingresosFinancieros + item.otrosIngresosNoOperativos) - (item.gastosFinancieros + item.otrosGastos)) - item.impuestos,
      margenOperativo: (((item.ventasNetas + item.otrosIngresos) - (item.costoVentas + item.gastosOperativos + item.gastosAdministrativos + item.gastosVentas)) / (item.ventasNetas + item.otrosIngresos)) * 100,
      margenNeto: ((((item.ventasNetas + item.otrosIngresos) - (item.costoVentas + item.gastosOperativos + item.gastosAdministrativos + item.gastosVentas)) + ((item.ingresosFinancieros + item.otrosIngresosNoOperativos) - (item.gastosFinancieros + item.otrosGastos)) - item.impuestos) / (item.ventasNetas + item.otrosIngresos)) * 100
    }))
  }

  // Función para formatear moneda
  const formatearMoneda = (valor) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(valor)
  }

  // Función para formatear porcentaje
  const formatearPorcentaje = (valor) => {
    return `${valor.toFixed(1)}%`
  }

  const datos = calcularMetricas(obtenerDatos())
  const datosActuales = datos[datos.length - 1]
  const datosAnteriores = datos[datos.length - 2]

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Estado de Resultados
        </h3>
        
        {/* Controles */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-gray-700">Período:</label>
            <select 
              className="px-3 py-1 border border-gray-300 rounded text-xs"
              value={agrupacion}
              onChange={(e) => setAgrupacion(e.target.value)}
            >
              <option value="dia">Día</option>
              <option value="mes">Mes</option>
              <option value="año">Año</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabla simplificada */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Concepto</th>
              <th className="text-center py-2 px-3 text-xs font-semibold text-gray-700">Monto ($)</th>
              <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700">Observaciones</th>
            </tr>
          </thead>
          <tbody>
            {/* INGRESOS OPERATIVOS */}
            <tr>
              <td colSpan="3" className="py-2 px-3 text-xs font-bold text-gray-800 bg-gray-50">
                INGRESOS OPERATIVOS
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-1 px-3 text-xs text-gray-700">Ventas netas</td>
              <td className="py-1 px-3 text-center text-xs font-medium text-gray-900">{formatearMoneda(datosActuales.ventasNetas)}</td>
              <td className="py-1 px-3 text-xs text-gray-600">Ventas brutas menos devoluciones</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-1 px-3 text-xs text-gray-700">Otros ingresos operativos</td>
              <td className="py-1 px-3 text-center text-xs font-medium text-gray-900">{formatearMoneda(datosActuales.otrosIngresos)}</td>
              <td className="py-1 px-3 text-xs text-gray-600">Comisiones, servicios, etc.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="py-1 px-3 text-xs font-bold text-gray-800">Total Ingresos Operativos</td>
              <td className="py-1 px-3 text-center text-xs font-bold text-gray-900">{formatearMoneda(datosActuales.totalIngresosOperativos)}</td>
              <td className="py-1 px-3"></td>
            </tr>

            {/* COSTOS Y GASTOS */}
            <tr>
              <td colSpan="3" className="py-2 px-3 text-xs font-bold text-gray-800 bg-gray-50">
                COSTOS Y GASTOS
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-1 px-3 text-xs text-gray-700">Costo de mercadería vendida (CMV)</td>
              <td className="py-1 px-3 text-center text-xs font-medium text-gray-900">{formatearMoneda(datosActuales.costoVentas)}</td>
              <td className="py-1 px-3 text-xs text-gray-600">Costo directo de productos vendidos</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-1 px-3 text-xs text-gray-700">Gastos de personal</td>
              <td className="py-1 px-3 text-center text-xs font-medium text-gray-900">{formatearMoneda(datosActuales.gastosOperativos)}</td>
              <td className="py-1 px-3 text-xs text-gray-600">Sueldos, cargas sociales, beneficios</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-1 px-3 text-xs text-gray-700">Gastos de alquiler</td>
              <td className="py-1 px-3 text-center text-xs font-medium text-gray-900">{formatearMoneda(datosActuales.gastosAdministrativos)}</td>
              <td className="py-1 px-3 text-xs text-gray-600">Alquiler de local comercial</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-1 px-3 text-xs text-gray-700">Gastos de ventas</td>
              <td className="py-1 px-3 text-center text-xs font-medium text-gray-900">{formatearMoneda(datosActuales.gastosVentas)}</td>
              <td className="py-1 px-3 text-xs text-gray-600">Marketing, publicidad, comisiones</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="py-1 px-3 text-xs font-bold text-gray-800">Total Costos y Gastos</td>
              <td className="py-1 px-3 text-center text-xs font-bold text-gray-900">{formatearMoneda(datosActuales.totalCostosGastos)}</td>
              <td className="py-1 px-3"></td>
            </tr>

            {/* RESULTADO OPERATIVO */}
            <tr>
              <td colSpan="3" className="py-2 px-3 text-xs font-bold text-gray-800 bg-gray-50">
                RESULTADO OPERATIVO
              </td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="py-1 px-3 text-xs font-bold text-gray-800">Utilidad Operativa</td>
              <td className="py-1 px-3 text-center text-xs font-bold text-gray-900">{formatearMoneda(datosActuales.utilidadOperativa)}</td>
              <td className="py-1 px-3 text-xs text-gray-600">Margen: {formatearPorcentaje(datosActuales.margenOperativo)}</td>
            </tr>

            {/* Sección expandible para más detalles */}
            {seccionesExpandidas.resultado && (
              <>
                <tr>
                  <td colSpan="3" className="py-2 px-3 text-xs font-bold text-gray-800 bg-gray-50">
                    RESULTADO NO OPERATIVO
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-1 px-3 text-xs text-gray-700">Ingresos financieros</td>
                  <td className="py-1 px-3 text-center text-xs font-medium text-gray-900">{formatearMoneda(datosActuales.ingresosFinancieros)}</td>
                  <td className="py-1 px-3 text-xs text-gray-600">Intereses ganados</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-1 px-3 text-xs text-gray-700">Gastos financieros</td>
                  <td className="py-1 px-3 text-center text-xs font-medium text-gray-900">{formatearMoneda(datosActuales.gastosFinancieros)}</td>
                  <td className="py-1 px-3 text-xs text-gray-600">Intereses pagados</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-1 px-3 text-xs text-gray-700">Impuestos</td>
                  <td className="py-1 px-3 text-center text-xs font-medium text-gray-900">{formatearMoneda(datosActuales.impuestos)}</td>
                  <td className="py-1 px-3 text-xs text-gray-600">Impuesto a las ganancias</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-1 px-3 text-xs font-bold text-gray-800">Utilidad Neta</td>
                  <td className="py-1 px-3 text-center text-xs font-bold text-gray-900">{formatearMoneda(datosActuales.utilidadNeta)}</td>
                  <td className="py-1 px-3 text-xs text-gray-600">Margen neto: {formatearPorcentaje(datosActuales.margenNeto)}</td>
                </tr>
              </>
            )}

            {/* Botón para expandir/contraer */}
            <tr>
              <td colSpan="3" className="py-1 px-3 text-center">
                <button
                  onClick={() => toggleSeccion('resultado')}
                  className="text-blue-600 hover:text-blue-800 text-xs font-medium flex items-center justify-center mx-auto"
                >
                  {seccionesExpandidas.resultado ? (
                    <>
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      Ver menos
                    </>
                  ) : (
                    <>
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Ver más detalles
                    </>
                  )}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablaEstadoResultados
