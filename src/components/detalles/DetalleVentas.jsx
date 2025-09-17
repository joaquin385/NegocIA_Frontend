import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const DetalleVentas = () => {
  const datosEvolucion = [
    { mes: 'Ene', ventas: 78000, tickets: 156, ticketPromedio: 500 },
    { mes: 'Feb', ventas: 82000, tickets: 164, ticketPromedio: 500 },
    { mes: 'Mar', ventas: 85000, tickets: 170, ticketPromedio: 500 },
    { mes: 'Abr', ventas: 85420, tickets: 171, ticketPromedio: 499.5 }
  ];

  const productosTopVentas = [
    { producto: 'Producto A', ventas: 12500, unidades: 25, categoria: 'Electrónicos', crecimiento: '+18%' },
    { producto: 'Producto B', ventas: 9800, unidades: 49, categoria: 'Ropa', crecimiento: '+12%' },
    { producto: 'Producto C', ventas: 8700, unidades: 87, categoria: 'Hogar', crecimiento: '+8%' },
    { producto: 'Producto D', ventas: 7200, unidades: 36, categoria: 'Deportes', crecimiento: '+15%' },
    { producto: 'Producto E', ventas: 6500, unidades: 130, categoria: 'Libros', crecimiento: '+5%' }
  ];

  const ventasPorCategoria = [
    { categoria: 'Electrónicos', ventas: 25000, porcentaje: 29.3, color: '#3b82f6' },
    { categoria: 'Ropa', ventas: 18000, porcentaje: 21.1, color: '#8b5cf6' },
    { categoria: 'Hogar', ventas: 15000, porcentaje: 17.6, color: '#06b6d4' },
    { categoria: 'Deportes', ventas: 12000, porcentaje: 14.0, color: '#10b981' },
    { categoria: 'Libros', ventas: 8500, porcentaje: 9.9, color: '#f59e0b' },
    { categoria: 'Otros', ventas: 6920, porcentaje: 8.1, color: '#6b7280' }
  ];

  const canalesVenta = [
    { canal: 'Tienda Física', ventas: 51280, porcentaje: 60.0, crecimiento: '+6%' },
    { canal: 'E-commerce', ventas: 25620, porcentaje: 30.0, crecimiento: '+15%' },
    { canal: 'WhatsApp', ventas: 8520, porcentaje: 10.0, crecimiento: '+25%' }
  ];

  return (
    <div className="space-y-6">
      {/* Gráfico de Evolución de Ventas */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
        <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          📈 Evolución de Ventas y Tickets
        </h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={datosEvolucion}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="mes" 
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis 
                yAxisId="left"
                stroke="#6b7280"
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                stroke="#6b7280"
                fontSize={12}
              />
              <Tooltip 
                formatter={(value, name) => {
                  const labels = {
                    ventas: 'Ventas',
                    tickets: 'Tickets',
                    ticketPromedio: 'Ticket Promedio'
                  };
                  if (name === 'ventas') return [`$${value.toLocaleString()}`, labels[name]];
                  if (name === 'tickets') return [value, labels[name]];
                  if (name === 'ticketPromedio') return [`$${value}`, labels[name]];
                  return [value, name];
                }}
                labelStyle={{ color: '#374151' }}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="ventas" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="tickets" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Productos */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
        <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          🏆 Top Productos por Ventas
        </h4>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-green-100">
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Producto</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Categoría</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Ventas</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Unidades</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Crecimiento</th>
              </tr>
            </thead>
            <tbody>
              {productosTopVentas.map((item, index) => (
                <tr key={index} className="border-b border-green-200 hover:bg-green-50 transition-colors">
                  <td className="px-3 py-2 text-sm font-medium text-gray-900">{item.producto}</td>
                  <td className="px-3 py-2 text-sm text-gray-600">{item.categoria}</td>
                  <td className="px-3 py-2 text-sm font-semibold text-gray-900">${item.ventas.toLocaleString()}</td>
                  <td className="px-3 py-2 text-sm text-gray-600">{item.unidades}</td>
                  <td className="px-3 py-2 text-sm">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {item.crecimiento}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ventas por Categoría */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-100">
        <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          📊 Ventas por Categoría
        </h4>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ventasPorCategoria}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="categoria" 
                stroke="#6b7280"
                fontSize={11}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value) => [`$${value.toLocaleString()}`, 'Ventas']}
                labelStyle={{ color: '#374151' }}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar 
                dataKey="ventas" 
                fill="#8b5cf6"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Canales de Venta */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border border-orange-100">
        <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          📱 Canales de Venta
        </h4>
        <div className="space-y-3">
          {canalesVenta.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">{item.canal}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">{item.porcentaje}%</span>
                <span className="text-sm font-semibold text-gray-900">${item.ventas.toLocaleString()}</span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  {item.crecimiento}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recomendaciones */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
        <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          💡 Recomendaciones
        </h4>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-start space-x-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>Impulsar ventas de Electrónicos (mayor categoría) con promociones</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>Expandir canal WhatsApp (crecimiento +25%) con más productos</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>Optimizar inventario de Producto A (mayor crecimiento +18%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleVentas;
