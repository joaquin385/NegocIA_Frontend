import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const DetalleBeneficio = () => {
  const datosEvolucion = [
    { mes: 'Ene', beneficio: 13000, margen: 16.7, ingresos: 78000, gastos: 65000 },
    { mes: 'Feb', beneficio: 14000, margen: 17.1, ingresos: 82000, gastos: 68000 },
    { mes: 'Mar', beneficio: 13000, margen: 15.3, ingresos: 85000, gastos: 72000 },
    { mes: 'Abr', beneficio: 15450, margen: 18.1, ingresos: 85420, gastos: 69970 }
  ];

  const desgloseBeneficio = [
    { concepto: 'Ingresos Totales', monto: 85420, tipo: 'ingreso' },
    { concepto: 'Costos de Ventas', monto: 42000, tipo: 'gasto' },
    { concepto: 'Gastos Operativos', monto: 15450, tipo: 'gasto' },
    { concepto: 'Gastos Administrativos', monto: 8500, tipo: 'gasto' },
    { concepto: 'Gastos de Marketing', monto: 3970, tipo: 'gasto' },
    { concepto: 'Beneficio Bruto', monto: 43420, tipo: 'beneficio' },
    { concepto: 'Beneficio Operativo', monto: 15450, tipo: 'beneficio' },
    { concepto: 'Impuestos', monto: 2560, tipo: 'gasto' },
    { concepto: 'Beneficio Neto', monto: 12890, tipo: 'beneficio' }
  ];

  const ratiosRentabilidad = [
    { ratio: 'Margen Bruto', valor: 50.8, unidad: '%', objetivo: '>45%', status: 'excelente' },
    { ratio: 'Margen Operativo', valor: 18.1, unidad: '%', objetivo: '>15%', status: 'bueno' },
    { ratio: 'Margen Neto', valor: 15.1, unidad: '%', objetivo: '>12%', status: 'bueno' },
    { ratio: 'ROI', valor: 22.4, unidad: '%', objetivo: '>20%', status: 'bueno' },
    { ratio: 'ROE', valor: 18.7, unidad: '%', objetivo: '>15%', status: 'bueno' },
    { ratio: 'ROA', valor: 12.3, unidad: '%', objetivo: '>10%', status: 'bueno' }
  ];

  const proyecciones = [
    { mes: 'May', beneficio: 16800, margen: 19.2 },
    { mes: 'Jun', beneficio: 17200, margen: 19.5 },
    { mes: 'Jul', beneficio: 18500, margen: 20.1 },
    { mes: 'Ago', beneficio: 19200, margen: 20.8 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'excelente': return 'bg-green-100 text-green-800';
      case 'bueno': return 'bg-blue-100 text-blue-800';
      case 'regular': return 'bg-yellow-100 text-yellow-800';
      case 'malo': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Gráfico de Evolución del Beneficio */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
        <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          📈 Evolución del Beneficio y Margen
        </h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={datosEvolucion}>
              <defs>
                <linearGradient id="colorBeneficio" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
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
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                formatter={(value, name) => {
                  const labels = {
                    beneficio: 'Beneficio',
                    margen: 'Margen %'
                  };
                  if (name === 'beneficio') return [`$${value.toLocaleString()}`, labels[name]];
                  if (name === 'margen') return [`${value}%`, labels[name]];
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
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="beneficio" 
                stroke="#10b981" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorBeneficio)"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="margen" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Desglose del Beneficio */}
      <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-4 rounded-lg border border-blue-100">
        <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          🧮 Desglose del Beneficio
        </h4>
        <div className="space-y-2">
          {desgloseBeneficio.map((item, index) => (
            <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
              item.tipo === 'beneficio' ? 'bg-green-50 border border-green-200' : 
              item.tipo === 'gasto' ? 'bg-red-50 border border-red-200' : 
              'bg-blue-50 border border-blue-200'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  item.tipo === 'beneficio' ? 'bg-green-500' : 
                  item.tipo === 'gasto' ? 'bg-red-500' : 
                  'bg-blue-500'
                }`}></div>
                <span className="text-sm font-medium text-gray-700">{item.concepto}</span>
              </div>
              <span className={`text-sm font-semibold ${
                item.tipo === 'beneficio' ? 'text-green-800' : 
                item.tipo === 'gasto' ? 'text-red-800' : 
                'text-blue-800'
              }`}>
                ${item.monto.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Ratios de Rentabilidad */}
      <div className="bg-gradient-to-r from-slate-50 to-emerald-50 p-4 rounded-lg border border-slate-100">
        <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          📊 Ratios de Rentabilidad
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {ratiosRentabilidad.map((item, index) => (
            <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-600">{item.ratio}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                  {item.status === 'excelente' ? '★' : item.status === 'bueno' ? '✓' : '⚠'}
                </span>
              </div>
              <div className="text-lg font-bold text-gray-900">
                {item.valor}{item.unidad}
              </div>
              <div className="text-xs text-gray-500">
                Objetivo: {item.objetivo}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Proyecciones */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-100">
        <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
          🔮 Proyecciones de Beneficio
        </h4>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={[...datosEvolucion, ...proyecciones]}>
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
                formatter={(value) => [`$${value.toLocaleString()}`, 'Beneficio']}
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
                dataKey="beneficio" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
                strokeDasharray={datosEvolucion.length > 0 ? "0" : "5 5"}
              />
            </LineChart>
          </ResponsiveContainer>
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
            <span>Optimizar gastos operativos para mejorar margen operativo</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Mantener tendencia de crecimiento del beneficio (+12%)</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-green-600 font-bold">•</span>
            <span>Considerar inversión en marketing para acelerar crecimiento</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleBeneficio;
