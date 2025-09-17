import { useAtom } from 'jotai';
import { metricaSeleccionadaAtom, panelExpandidoAtom } from '../stores/metricas';

const MetricaExpandible = ({ metrica, children }) => {
  const [metricaSeleccionada, setMetricaSeleccionada] = useAtom(metricaSeleccionadaAtom);
  const [, setPanelExpandido] = useAtom(panelExpandidoAtom);
  
  const isSelected = metricaSeleccionada?.nombre === metrica.nombre;
  
  const handleToggle = () => {
    if (isSelected) {
      setMetricaSeleccionada(null);
      setPanelExpandido(false);
    } else {
      setMetricaSeleccionada(metrica);
      setPanelExpandido(true);
    }
  };

  const getStatusColor = (status) => {
    if (status.includes('Bien')) {
      return 'bg-green-100 text-green-800';
    } else if (status.includes('Revisar')) {
      return 'bg-yellow-100 text-yellow-800';
    } else if (status.includes('Crítico')) {
      return 'bg-red-100 text-red-800';
    }
    return 'bg-gray-100 text-gray-800';
  };

  const getStatusDotColor = (status) => {
    if (status.includes('Bien')) {
      return 'bg-green-500';
    } else if (status.includes('Revisar')) {
      return 'bg-yellow-500';
    } else if (status.includes('Crítico')) {
      return 'bg-red-500';
    }
    return 'bg-gray-500';
  };

  return (
    <>
      <tr className={`hover:bg-gray-50 transition-colors ${isSelected ? 'bg-blue-50' : ''}`}>
        <td className="px-4 py-2 text-sm text-gray-900">{metrica.nombre}</td>
        <td className="px-4 py-2 text-sm font-semibold text-gray-900">{metrica.valor}</td>
        <td className="px-4 py-2 text-sm">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metrica.status)}`}>
            <div className={`w-2 h-2 ${getStatusDotColor(metrica.status)} rounded-full mr-1`}></div>
            {metrica.status}
          </span>
        </td>
        <td className="px-4 py-2 text-sm">
          <button
            onClick={handleToggle}
            className={`p-1 rounded transition-all duration-200 ${
              isSelected 
                ? 'bg-blue-500 text-white shadow-md' 
                : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'
            }`}
            title={isSelected ? 'Ocultar detalles' : 'Ver detalles'}
          >
            {isSelected ? '▼' : '▶'}
          </button>
        </td>
      </tr>
      {isSelected && children}
    </>
  );
};

export default MetricaExpandible;
