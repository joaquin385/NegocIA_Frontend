import { useState } from 'react';

const FiltrosFecha = ({ 
  fechaInicio = "2025-07-28", 
  fechaFin = "2025-08-28",
  onFechaInicioChange,
  onFechaFinChange,
  standalone = true 
}) => {
  const [fechaInicioLocal, setFechaInicioLocal] = useState(fechaInicio);
  const [fechaFinLocal, setFechaFinLocal] = useState(fechaFin);

  const handleFechaInicioChange = (e) => {
    const newDate = e.target.value;
    setFechaInicioLocal(newDate);
    if (onFechaInicioChange) {
      onFechaInicioChange(newDate);
    }
  };

  const handleFechaFinChange = (e) => {
    const newDate = e.target.value;
    setFechaFinLocal(newDate);
    if (onFechaFinChange) {
      onFechaFinChange(newDate);
    }
  };

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const fechaInputs = (
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center space-x-2">
        <label className="text-xs font-medium text-gray-700">Fecha inicio:</label>
        <div className="relative">
          <input
            type="date"
            className="px-3 py-2 border border-gray-300 rounded-lg text-xs w-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={fechaInicioLocal}
            onChange={handleFechaInicioChange}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <label className="text-xs font-medium text-gray-700">Fecha fin:</label>
        <div className="relative">
          <input
            type="date"
            className="px-3 py-2 border border-gray-300 rounded-lg text-xs w-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={fechaFinLocal}
            onChange={handleFechaFinChange}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  if (standalone) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 mb-5">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">Filtros</h3>
        <div className="flex flex-wrap gap-6">
          {fechaInputs}
        </div>
      </div>
    );
  }

  return fechaInputs;
};

export default FiltrosFecha;
