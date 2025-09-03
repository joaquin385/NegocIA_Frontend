import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { agrupacionAtom } from '@/stores'

const GraficoEvolucionPorTipo = ({ 
  datos = [], 
  titulo = "Evolución por Tipo de Ticket", 
  altura = "400px",
  formatearEjeY = (value) => `${value}%`,
  formatearTooltip = (value, name) => [`${value}%`, name]
}) => {
  const [agrupacion, setAgrupacion] = useAtom(agrupacionAtom)

  // Función para calcular el dominio del eje Y con padding porcentual
  const calcularDominio = (datos) => {
    if (!datos || datos.length === 0) return ['auto', 'auto'];
    
    const valores = [
      ...datos.map(item => item.bajoValor).filter(val => !isNaN(val) && val !== undefined),
      ...datos.map(item => item.medioValor).filter(val => !isNaN(val) && val !== undefined),
      ...datos.map(item => item.altoValor).filter(val => !isNaN(val) && val !== undefined)
    ];
    
    if (valores.length === 0) return ['auto', 'auto'];
    
    const min = Math.min(...valores);
    const max = Math.max(...valores);
    const rango = max - min;
    const padding = rango * 0.15; // 15% de padding arriba y abajo
    
    return [Math.max(0, min - padding), Math.min(100, max + padding)];
  };

  // Función para procesar datos según la agrupación
  const procesarDatosPorAgrupacion = (datos, agrupacion) => {
    if (!datos || datos.length === 0) return [];
    
    if (agrupacion === 'dia') {
      return datos;
    }
    
    // Agrupar por mes o año
    const grupos = {};
    
    datos.forEach(item => {
      const fecha = new Date(item.fecha.split('/').reverse().join('-'));
      let clave;
      
      if (agrupacion === 'mes') {
        clave = `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, '0')}`;
      } else if (agrupacion === 'año') {
        clave = fecha.getFullYear().toString();
      }
      
      if (!grupos[clave]) {
        grupos[clave] = {
          fecha: agrupacion === 'mes' ? 
            `${String(fecha.getMonth() + 1).padStart(2, '0')}/${fecha.getFullYear()}` :
            fecha.getFullYear().toString(),
          bajoValor: 0,
          medioValor: 0,
          altoValor: 0,
          count: 0
        };
      }
      
      grupos[clave].bajoValor += item.bajoValor;
      grupos[clave].medioValor += item.medioValor;
      grupos[clave].altoValor += item.altoValor;
      grupos[clave].count += 1;
    });
    
    // Calcular promedios
    return Object.values(grupos).map(grupo => ({
      ...grupo,
      bajoValor: Math.round(grupo.bajoValor / grupo.count),
      medioValor: Math.round(grupo.medioValor / grupo.count),
      altoValor: Math.round(grupo.altoValor / grupo.count)
    })).sort((a, b) => {
      const fechaA = new Date(a.fecha.split('/').reverse().join('-'));
      const fechaB = new Date(b.fecha.split('/').reverse().join('-'));
      return fechaA - fechaB;
    });
  };

  const datosProcesados = procesarDatosPorAgrupacion(datos, agrupacion);
  const dominio = calcularDominio(datosProcesados);

  return (
    <div className="space-y-4">
      {/* Controles */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">{titulo}</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-gray-700">Agrupación temporal:</label>
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
      
      {/* Gráfico */}
      <div style={{ height: altura }} className="bg-transparent rounded-xl shadow-sm border border-gray-100 p-6 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={datosProcesados} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="fecha" 
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={dominio}
              tickFormatter={formatearEjeY}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: '12px'
              }}
              formatter={formatearTooltip}
              labelStyle={{ color: '#374151', fontWeight: 'bold' }}
            />
            <Legend 
              verticalAlign="top" 
              height={36}
              iconType="rect"
              wrapperStyle={{ fontSize: '12px', paddingBottom: '10px' }}
            />
                         <Line 
               type="monotone" 
               dataKey="bajoValor" 
               stroke="#ef4444" 
               strokeWidth={3}
               dot={{ fill: '#ef4444', strokeWidth: 0, r: 0 }}
               activeDot={{ r: 8, stroke: '#ef4444', strokeWidth: 3, fill: 'white' }}
               name="Bajo valor"
               strokeDasharray="0"
             />
             <Line 
               type="monotone" 
               dataKey="medioValor" 
               stroke="#3b82f6" 
               strokeWidth={3}
               dot={{ fill: '#3b82f6', strokeWidth: 0, r: 0 }}
               activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 3, fill: 'white' }}
               name="Medio valor"
               strokeDasharray="0"
             />
             <Line 
               type="monotone" 
               dataKey="altoValor" 
               stroke="#10b981" 
               strokeWidth={3}
               dot={{ fill: '#10b981', strokeWidth: 0, r: 0 }}
               activeDot={{ r: 8, stroke: '#10b981', strokeWidth: 3, fill: 'white' }}
               name="Alto valor"
               strokeDasharray="0"
             />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GraficoEvolucionPorTipo
