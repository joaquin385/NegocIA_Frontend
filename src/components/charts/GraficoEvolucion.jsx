import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { agrupacionAtom, metricaAtom } from '@/stores'

const GraficoEvolucion = ({ 
  datos = [], 
  titulo = "Evolución", 
  color = "#10b981",
  altura = "450px",
  opcionesMetricas = [],
  campoDatos = "valor",
  formatearEjeY = (value) => value,
  formatearTooltip = (value) => [value, "Valor"],
  onMetricaChange
}) => {
  const [agrupacion, setAgrupacion] = useAtom(agrupacionAtom)
  const [metrica, setMetrica] = useAtom(metricaAtom)

  // Inicializar métrica cuando cambien las opciones
  useEffect(() => {
    if (opcionesMetricas.length > 0 && !opcionesMetricas.find(op => op.value === metrica)) {
      setMetrica(opcionesMetricas[0].value)
    }
  }, [opcionesMetricas, metrica, setMetrica])

  // Sincronizar cambios de métrica con el componente padre
  useEffect(() => {
    if (onMetricaChange) {
      onMetricaChange(metrica)
    }
  }, [metrica, onMetricaChange])

  // Función para calcular el dominio del eje Y con padding porcentual
  const calcularDominio = (datos) => {
    if (!datos || datos.length === 0) return ['auto', 'auto'];
    
    const valores = datos.map(item => item[campoDatos]).filter(val => !isNaN(val) && val !== undefined);
    
    if (valores.length === 0) return ['auto', 'auto'];
    
    const min = Math.min(...valores);
    const max = Math.max(...valores);
    const rango = max - min;
    const padding = rango * 0.15; // 15% de padding arriba y abajo
    
    console.log('Debug dominio:', { min, max, rango, padding, dominio: [min - padding, max + padding] });
    
    return [min - padding, max + padding];
  };

  // Función para procesar datos por agrupación
  const procesarDatosPorAgrupacion = (datos, agrupacion) => {
    if (agrupacion === 'dia') return datos;
    
    if (agrupacion === 'mes') {
      const datosPorMes = {};
      datos.forEach(item => {
        const fecha = new Date(`2025/${item.fecha.split('/')[1]}/${item.fecha.split('/')[0]}`);
        const mes = fecha.toLocaleDateString('es-ES', { month: 'short' });
        
        if (!datosPorMes[mes]) {
          datosPorMes[mes] = { valor: 0, count: 0 };
        }
        datosPorMes[mes].valor += item[campoDatos];
        datosPorMes[mes].count += 1;
      });
      
      return Object.entries(datosPorMes).map(([mes, data]) => ({
        fecha: mes,
        [campoDatos]: Math.round(data.valor / data.count) // Promedio del mes
      }));
    }
    
    if (agrupacion === 'año') {
      const datosPorAño = {};
      datos.forEach(item => {
        const fecha = new Date(`2025/${item.fecha.split('/')[1]}/${item.fecha.split('/')[0]}`);
        const año = fecha.getFullYear();
        
        if (!datosPorAño[año]) {
          datosPorAño[año] = { valor: 0, count: 0 };
        }
        datosPorAño[año].valor += item[campoDatos];
        datosPorAño[año].count += 1;
      });
      
      return Object.entries(datosPorAño).map(([año, data]) => ({
        fecha: año,
        [campoDatos]: Math.round(data.valor / data.count) // Promedio del año
      }));
    }
    
    return datos;
  };

  return (
    <div>
      <h4 className="text-base font-semibold mb-4">{titulo}</h4>
      
      {/* Controles del gráfico */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <label className="text-xs font-medium text-gray-700">Agrupación:</label>
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
        <div className="flex items-center space-x-2">
          <label className="text-xs font-medium text-gray-700">Métrica:</label>
          <select 
            className="px-3 py-1 border border-gray-300 rounded text-xs"
            value={metrica}
            onChange={(e) => setMetrica(e.target.value)}
          >
            <option value="ventas">Ventas totales ($)</option>
            <option value="unidades">Unidades</option>
            <option value="ticket-promedio">Ticket promedio</option>
          </select>
        </div>
      </div>
      
             {/* Gráfico */}
       <div style={{ height: altura }} className="bg-transparent rounded-xl shadow-sm border border-gray-100 p-6 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={procesarDatosPorAgrupacion(datos, agrupacion)}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#f8fafc" 
              opacity={0.8}
            />
            <XAxis 
              dataKey="fecha" 
              stroke="#94a3b8"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#64748b' }}
            />
            <YAxis 
              stroke="#94a3b8"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#64748b' }}
              tickFormatter={formatearEjeY}
              domain={calcularDominio(datos)}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                fontSize: '12px',
                padding: '12px 16px'
              }}
              formatter={formatearTooltip}
              labelFormatter={(label) => `Fecha: ${label}`}
              cursor={{ stroke: color, strokeWidth: 2, strokeDasharray: '5 5' }}
            />
            <Line 
              type="monotone" 
              dataKey={campoDatos} 
              stroke={`url(#${metrica}Gradient)`} 
              strokeWidth={3}
              dot={{ 
                fill: color, 
                strokeWidth: 2, 
                r: 4,
                stroke: 'white',
                filter: `drop-shadow(0 2px 4px ${color}40)`
              }}
              activeDot={{ 
                r: 6, 
                stroke: color, 
                strokeWidth: 3,
                fill: 'white',
                filter: `drop-shadow(0 4px 8px ${color}60)`
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id={`${metrica}Gradient`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={1} />
                <stop offset="100%" stopColor={color} stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GraficoEvolucion 