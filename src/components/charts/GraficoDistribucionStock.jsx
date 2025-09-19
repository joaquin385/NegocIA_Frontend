import { useAtom } from 'jotai'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { atom } from 'jotai'

// Atom para la métrica seleccionada
const metricaStockAtom = atom('valor-costo')

const GraficoDistribucionStock = ({ 
  datos = [], 
  titulo = "Distribución de Stock por Categoría", 
  altura = "350px",
  formatearTooltip = (value, name) => [`$${value.toLocaleString()}`, name]
}) => {
  const [metrica, setMetrica] = useAtom(metricaStockAtom)

  // Colores para las categorías
  const colores = [
    '#3b82f6', // Azul - Carnes
    '#10b981', // Verde - Lácteos
    '#ef4444', // Rojo - Granos
    '#4338ca', // Índigo - Verduras
    '#f59e0b', // Naranja - Frutas
    '#06b6d4', // Cian - Bebidas
    '#1e40af', // Azul oscuro - Snacks
    '#059669', // Verde oscuro - Limpieza
    '#dc2626'  // Rojo oscuro - Higiene
  ]

  // Función para generar datos simulados si no se proporcionan
  const generarDatosSimulados = () => {
    const categorias = [
      { nombre: 'Carnes', valorCosto: 728378, valorVenta: 1092567, unidades: 15420 },
      { nombre: 'Lácteos', valorCosto: 447927, valorVenta: 671891, unidades: 8920 },
      { nombre: 'Granos', valorCosto: 363688, valorVenta: 545532, unidades: 12340 },
      { nombre: 'Verduras', valorCosto: 113560, valorVenta: 170340, unidades: 4560 },
      { nombre: 'Frutas', valorCosto: 291930, valorVenta: 437895, unidades: 7830 },
      { nombre: 'Bebidas', valorCosto: 606603, valorVenta: 909905, unidades: 12980 },
      { nombre: 'Snacks', valorCosto: 655767, valorVenta: 983651, unidades: 18750 },
      { nombre: 'Limpieza', valorCosto: 702851, valorVenta: 1054277, unidades: 11200 },
      { nombre: 'Higiene', valorCosto: 128755, valorVenta: 193133, unidades: 3450 }
    ]

    return categorias.map((categoria, index) => ({
      nombre: categoria.nombre,
      valor: metrica === 'valor-costo' ? categoria.valorCosto : 
             metrica === 'valor-venta' ? categoria.valorVenta : 
             categoria.unidades,
      color: colores[index % colores.length]
    }))
  }

  // Datos a usar
  const datosProcesados = datos.length > 0 ? datos : generarDatosSimulados()

  // Función para formatear el tooltip según la métrica
  const formatearTooltipPersonalizado = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      let valorFormateado = ''
      
      switch (metrica) {
        case 'valor-costo':
          valorFormateado = `$${data.valor.toLocaleString()}`
          break
        case 'valor-venta':
          valorFormateado = `$${data.valor.toLocaleString()}`
          break
        case 'unidades':
          valorFormateado = `${data.valor.toLocaleString()} unidades`
          break
        default:
          valorFormateado = data.valor.toLocaleString()
      }

      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{data.nombre}</p>
          <p className="text-sm text-gray-600">{valorFormateado}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
      {/* Título */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{titulo}</h3>

      {/* Controles */}
      <div className="mb-4 flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <label className="text-xs font-medium text-gray-700">Métrica:</label>
          <select 
            className="px-3 py-1 border border-gray-300 rounded text-xs"
            value={metrica}
            onChange={(e) => setMetrica(e.target.value)}
          >
            <option value="valor-costo">Valor a Costo ($)</option>
            <option value="valor-venta">Valor a Precio de Venta ($)</option>
            <option value="unidades">Unidades</option>
          </select>
        </div>
      </div>
      
      {/* Gráfico */}
      <div style={{ height: altura }} className="bg-transparent rounded-xl shadow-sm border border-gray-100 p-6 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={datosProcesados}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ nombre, valor }) => {
                const total = datosProcesados.reduce((sum, item) => sum + item.valor, 0)
                const porcentaje = ((valor / total) * 100).toFixed(1)
                return `${nombre}: ${porcentaje}%`
              }}
              outerRadius={80}
              fill="#8884d8"
              dataKey="valor"
            >
              {datosProcesados.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                />
              ))}
            </Pie>
            <Tooltip content={formatearTooltipPersonalizado} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GraficoDistribucionStock
