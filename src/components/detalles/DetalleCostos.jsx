import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DetalleCostos = () => {
  const datosEvolucion = [
    { mes: 'Ene', costo: 65000, ventas: 78000, beneficio: 13000 },
    { mes: 'Feb', costo: 68000, ventas: 82000, beneficio: 14000 },
    { mes: 'Mar', costo: 72000, ventas: 85000, beneficio: 13000 },
    { mes: 'Abr', costo: 69970, ventas: 85420, beneficio: 15450 }
  ];

  const productosMasCostosos = [
    { producto: 'Producto A', incremento: '+15%', costoAnterior: 5000, costoActual: 5750, categoria: 'Electrónicos' },
    { producto: 'Producto B', incremento: '+12%', costoAnterior: 3000, costoActual: 3360, categoria: 'Ropa' },
    { producto: 'Producto C', incremento: '+8%', costoAnterior: 2000, costoActual: 2160, categoria: 'Hogar' },
    { producto: 'Producto D', incremento: '+6%', costoAnterior: 4500, costoActual: 4770, categoria: 'Deportes' },
    { producto: 'Producto E', incremento: '+4%', costoAnterior: 1800, costoActual: 1872, categoria: 'Libros' }
  ];

  const categoriasCostos = [
    { categoria: 'Inventario', monto: 45000, porcentaje: 64.3, color: '#ef4444' },
    { categoria: 'Personal', monto: 15000, porcentaje: 21.4, color: '#f97316' },
    { categoria: 'Operaciones', monto: 6997, porcentaje: 10.0, color: '#eab308' },
    { categoria: 'Otros', monto: 2973, porcentaje: 4.3, color: '#6b7280' }
  ];

  return (
    <div className="space-y-6">
      {/* Gráfico de Evolución */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border border-red-100">
        <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          📈 Evolución de Costos vs Beneficios
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
                stroke="#6b7280"
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value, name) => {
                  const labels = {
                    costo: 'Costos',
                    ventas: 'Ventas',
                    beneficio: 'Beneficio'
                  };
                  return [`$${value.toLocaleString()}`, labels[name] || name];
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
                type="monotone" 
                dataKey="costo" 
                stroke="#ef4444" 
                strokeWidth={3}
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#ef4444', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="beneficio" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabla de Productos con Mayor Incremento */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-100">
        <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          ⚠️ Productos con Mayor Incremento de Costo
        </h4>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-yellow-100">
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Producto</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Categoría</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Incremento</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Costo Anterior</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Costo Actual</th>
              </tr>
            </thead>
            <tbody>
              {productosMasCostosos.map((item, index) => (
                <tr key={index} className="border-b border-yellow-200 hover:bg-yellow-50 transition-colors">
                  <td className="px-3 py-2 text-sm font-medium text-gray-900">{item.producto}</td>
                  <td className="px-3 py-2 text-sm text-gray-600">{item.categoria}</td>
                  <td className="px-3 py-2 text-sm">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {item.incremento}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-600">${item.costoAnterior.toLocaleString()}</td>
                  <td className="px-3 py-2 text-sm font-semibold text-gray-900">${item.costoActual.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Distribución de Costos por Categoría */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
        <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          📊 Distribución de Costos por Categoría
        </h4>
        <div className="space-y-3">
          {categoriasCostos.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm font-medium text-gray-700">{item.categoria}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">{item.porcentaje}%</span>
                <span className="text-sm font-semibold text-gray-900">${item.monto.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recomendaciones */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
        <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          💡 Recomendaciones
        </h4>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-start space-x-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Revisar contratos con proveedores de Producto A y B (mayor incremento)</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Evaluar alternativas de proveedores para categoría Electrónicos</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Optimizar costos de inventario que representan el 64.3% del total</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleCostos;
