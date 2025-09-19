import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { agrupacionAtom } from '@/stores'

const GraficoEvolucionCategorias = ({ 
  datos = [], 
  titulo = "Evolución por Categorías", 
  altura = "400px",
  categorias = [],
  formatearEjeY = (value) => `$${value.toLocaleString()}`,
  formatearTooltip = (value, name) => [`$${value.toLocaleString()}`, name]
}) => {
  const [agrupacion, setAgrupacion] = useAtom(agrupacionAtom)

  // Colores para las líneas
  const colores = [
    '#3b82f6', // Azul
    '#10b981', // Verde
    '#ef4444', // Rojo
    '#4338ca', // Índigo
    '#f59e0b', // Amarillo/Naranja
    '#06b6d4', // Cian
    '#84cc16', // Lima
    '#f97316', // Naranja
    '#ec4899', // Rosa
    '#6b7280'  // Gris
  ]

  // Función para calcular el dominio del eje Y con padding
  const calcularDominio = (datos) => {
    if (!datos || datos.length === 0) return ['auto', 'auto'];
    
    const valores = [];
    categorias.forEach(categoria => {
      valores.push(...datos.map(item => item[categoria.key]).filter(val => !isNaN(val) && val !== undefined));
    });
    
    if (valores.length === 0) return ['auto', 'auto'];
    
    const min = Math.min(...valores);
    const max = Math.max(...valores);
    const rango = max - min;
    const padding = rango * 0.15; // 15% de padding arriba y abajo
    
    return [Math.max(0, min - padding), max + padding];
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
          count: 0
        };
        
        // Inicializar todas las categorías
        categorias.forEach(categoria => {
          grupos[clave][categoria.key] = 0;
        });
      }
      
      // Sumar valores de cada categoría
      categorias.forEach(categoria => {
        grupos[clave][categoria.key] += item[categoria.key] || 0;
      });
      
      grupos[clave].count += 1;
    });
    
    // Calcular promedios
    return Object.values(grupos).map(grupo => {
      const resultado = { ...grupo };
      categorias.forEach(categoria => {
        resultado[categoria.key] = Math.round(grupo[categoria.key] / grupo.count);
      });
      delete resultado.count;
      return resultado;
    }).sort((a, b) => {
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
            {categorias.map((categoria, index) => (
              <Line 
                key={categoria.key}
                type="monotone" 
                dataKey={categoria.key} 
                stroke={colores[index % colores.length]} 
                strokeWidth={3}
                dot={{ fill: colores[index % colores.length], strokeWidth: 0, r: 0 }}
                activeDot={{ r: 8, stroke: colores[index % colores.length], strokeWidth: 3, fill: 'white' }}
                name={categoria.label}
                strokeDasharray="0"
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GraficoEvolucionCategorias
