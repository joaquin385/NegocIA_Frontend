import { useAtom } from 'jotai'
import { atom } from 'jotai'

// Atoms para el estado de los filtros
const periodoAtom = atom('dias')
const criterioAtom = atom('fecha-a-fecha')

const TablaComparacionVentas = () => {
  const [periodo, setPeriodo] = useAtom(periodoAtom)
  const [criterio, setCriterio] = useAtom(criterioAtom)

  // Datos simulados para diferentes períodos
  const datosPorDia = [
    { 
      periodo: '02/08', 
      salesAY: 109133, 
      salesPY: 92022, 
      salesPrevMonth: 102158 
    },
    { 
      periodo: '03/08', 
      salesAY: 109433, 
      salesPY: 111839, 
      salesPrevMonth: 116678 
    },
    { 
      periodo: '04/08', 
      salesAY: 91911, 
      salesPY: 76821, 
      salesPrevMonth: 82216 
    },
    { 
      periodo: '05/08', 
      salesAY: 112564, 
      salesPY: 111232, 
      salesPrevMonth: 113787 
    },
    { 
      periodo: '06/08', 
      salesAY: 89522, 
      salesPY: 92857, 
      salesPrevMonth: 88795 
    },
    { 
      periodo: '07/08', 
      salesAY: 105430, 
      salesPY: 98500, 
      salesPrevMonth: 101200 
    },
    { 
      periodo: '08/08', 
      salesAY: 118750, 
      salesPY: 108900, 
      salesPrevMonth: 112300 
    },
    { 
      periodo: '09/08', 
      salesAY: 98750, 
      salesPY: 102400, 
      salesPrevMonth: 95600 
    },
    { 
      periodo: '10/08', 
      salesAY: 112300, 
      salesPY: 105600, 
      salesPrevMonth: 108900 
    },
    { 
      periodo: '11/08', 
      salesAY: 95600, 
      salesPY: 98700, 
      salesPrevMonth: 92300 
    }
  ]

  const datosPorSemana = [
    { 
      periodo: 'Sem 1', 
      salesAY: 750000, 
      salesPY: 680000, 
      salesPrevMonth: 720000 
    },
    { 
      periodo: 'Sem 2', 
      salesAY: 820000, 
      salesPY: 750000, 
      salesPrevMonth: 780000 
    },
    { 
      periodo: 'Sem 3', 
      salesAY: 780000, 
      salesPY: 720000, 
      salesPrevMonth: 760000 
    },
    { 
      periodo: 'Sem 4', 
      salesAY: 850000, 
      salesPY: 780000, 
      salesPrevMonth: 820000 
    },
    { 
      periodo: 'Sem 5', 
      salesAY: 920000, 
      salesPY: 850000, 
      salesPrevMonth: 880000 
    }
  ]

  const datosPorMes = [
    { 
      periodo: 'Enero', 
      salesAY: 3200000, 
      salesPY: 2900000, 
      salesPrevMonth: 3100000 
    },
    { 
      periodo: 'Febrero', 
      salesAY: 2800000, 
      salesPY: 3200000, 
      salesPrevMonth: 3000000 
    },
    { 
      periodo: 'Marzo', 
      salesAY: 3500000, 
      salesPY: 3100000, 
      salesPrevMonth: 3300000 
    },
    { 
      periodo: 'Abril', 
      salesAY: 3300000, 
      salesPY: 3000000, 
      salesPrevMonth: 3200000 
    },
    { 
      periodo: 'Mayo', 
      salesAY: 3800000, 
      salesPY: 3400000, 
      salesPrevMonth: 3600000 
    },
    { 
      periodo: 'Junio', 
      salesAY: 3600000, 
      salesPY: 3300000, 
      salesPrevMonth: 3500000 
    },
    { 
      periodo: 'Julio', 
      salesAY: 3400000, 
      salesPY: 3100000, 
      salesPrevMonth: 3300000 
    },
    { 
      periodo: 'Agosto', 
      salesAY: 3700000, 
      salesPY: 3400000, 
      salesPrevMonth: 3600000 
    }
  ]

  // Función para obtener los datos según el período seleccionado
  const obtenerDatosSegunPeriodo = () => {
    switch (periodo) {
      case 'dias':
        return datosPorDia
      case 'semanas':
        return datosPorSemana
      case 'meses':
        return datosPorMes
      default:
        return datosPorDia
    }
  }

  const datosComparacion = obtenerDatosSegunPeriodo()

  // Función para calcular variación porcentual
  const calcularVariacion = (actual, anterior) => {
    if (anterior === 0) return 0
    return ((actual - anterior) / anterior) * 100
  }

  // Función para formatear números como moneda
  const formatearMoneda = (valor) => {
    return `$${valor.toLocaleString()}`
  }

  // Función para formatear porcentaje
  const formatearPorcentaje = (valor) => {
    const signo = valor >= 0 ? '+' : ''
    return `${signo}${valor.toFixed(1)}%`
  }

  // Función para obtener el color del porcentaje
  const obtenerColorPorcentaje = (valor) => {
    if (valor > 0) return 'text-green-600'
    if (valor < 0) return 'text-red-600'
    return 'text-gray-600'
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5">
      {/* Header con título y filtros */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-800">Comparación de Ventas</h3>
        
                 <div className="flex items-center space-x-4">
           <div className="flex items-center space-x-2">
             <label className="text-sm font-medium text-gray-700">Período:</label>
             <select 
               className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
               value={periodo}
               onChange={(e) => setPeriodo(e.target.value)}
             >
               <option value="dias">Días</option>
               <option value="semanas">Semanas</option>
               <option value="meses">Meses</option>
             </select>
           </div>
           
           {periodo === 'dias' && (
             <div className="flex items-center space-x-2">
               <label className="text-sm font-medium text-gray-700">Criterio:</label>
               <select 
                 className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                 value={criterio}
                 onChange={(e) => setCriterio(e.target.value)}
               >
                 <option value="fecha-a-fecha">Fecha a fecha</option>
                 <option value="dia-a-dia">Día a día</option>
               </select>
             </div>
           )}
         </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Período</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">Sales AY ($)</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">Sales PY ($)</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">% Var vs PY</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">Sales Prev Month ($)</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">% Var vs Prev Month</th>
            </tr>
          </thead>
          <tbody>
            {datosComparacion.map((fila, index) => {
              const varVsPY = calcularVariacion(fila.salesAY, fila.salesPY)
              const varVsPrevMonth = calcularVariacion(fila.salesAY, fila.salesPrevMonth)
              
              return (
                <tr 
                  key={index} 
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-25'
                  }`}
                >
                  <td className="py-3 px-4 font-medium text-gray-800">{fila.periodo}</td>
                  <td className="py-3 px-4 text-right font-medium text-gray-800">
                    {formatearMoneda(fila.salesAY)}
                  </td>
                  <td className="py-3 px-4 text-right text-gray-600">
                    {formatearMoneda(fila.salesPY)}
                  </td>
                  <td className={`py-3 px-4 text-right font-medium ${obtenerColorPorcentaje(varVsPY)}`}>
                    {formatearPorcentaje(varVsPY)}
                  </td>
                  <td className="py-3 px-4 text-right text-gray-600">
                    {formatearMoneda(fila.salesPrevMonth)}
                  </td>
                  <td className={`py-3 px-4 text-right font-medium ${obtenerColorPorcentaje(varVsPrevMonth)}`}>
                    {formatearPorcentaje(varVsPrevMonth)}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablaComparacionVentas
