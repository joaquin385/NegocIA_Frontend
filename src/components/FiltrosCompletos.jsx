import { useState, useEffect, useRef } from 'react';

const FiltrosCompletos = ({ 
  fechaInicio = "2025-07-28", 
  fechaFin = "2025-08-28",
  onFechaInicioChange,
  onFechaFinChange,
  // Props para filtro de categoría/producto (opcional)
  mostrarFiltroCategoria = false,
  categoriaSeleccionada = "Carnes",
  onCategoriaChange,
  opcionesCategoria = []
}) => {
  const [fechaInicioLocal, setFechaInicioLocal] = useState(fechaInicio);
  const [fechaFinLocal, setFechaFinLocal] = useState(fechaFin);
  const [dropdownAbierto, setDropdownAbierto] = useState(false);
  const dropdownRef = useRef(null);

  // Efecto para cerrar el dropdown cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownAbierto(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  const handleCategoriaChange = (categoria) => {
    if (onCategoriaChange) {
      onCategoriaChange(categoria);
    }
    setDropdownAbierto(false);
  };

  // Datos de ejemplo para categorías si no se proporcionan
  const categoriasDefault = [
    { nombre: 'Carnes', productos: ['Pollo', 'Carne de Res', 'Cerdo'] },
    { nombre: 'Verduras', productos: ['Tomate', 'Lechuga', 'Zanahoria'] },
    { nombre: 'Frutas', productos: ['Manzana', 'Banana', 'Naranja'] },
    { nombre: 'Lácteos', productos: ['Leche', 'Queso', 'Yogurt'] },
    { nombre: 'Panadería', productos: ['Pan', 'Facturas', 'Tortas'] }
  ];

  const categorias = opcionesCategoria.length > 0 ? opcionesCategoria : categoriasDefault;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 mb-5">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">Filtros</h3>
      <div className="flex flex-wrap gap-6">
        {/* Filtros de Fecha */}
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

        {/* Filtro de Categorías/Productos (opcional) */}
        {mostrarFiltroCategoria && (
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-gray-700">Categoría / Producto:</label>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownAbierto(!dropdownAbierto)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-xs bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center space-x-2 min-w-[120px] justify-between"
              >
                <span>{categoriaSeleccionada}</span>
                <svg 
                  className={`w-4 h-4 text-gray-400 transition-transform ${dropdownAbierto ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownAbierto && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                  {categorias.map((categoria, index) => (
                    <div key={index} className="p-2">
                      <div 
                        className="px-3 py-2 text-xs font-medium text-gray-700 cursor-pointer hover:bg-gray-100 rounded"
                        onClick={() => handleCategoriaChange(categoria.nombre)}
                      >
                        {categoria.nombre}
                      </div>
                      {categoria.productos && categoria.productos.map((producto, pIndex) => (
                        <div 
                          key={pIndex}
                          className="px-6 py-1 text-xs text-gray-600 cursor-pointer hover:bg-gray-100 rounded ml-2"
                          onClick={() => handleCategoriaChange(producto)}
                        >
                          {producto}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FiltrosCompletos;
