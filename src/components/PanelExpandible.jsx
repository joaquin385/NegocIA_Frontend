import { useAtom } from 'jotai';
import { metricaSeleccionadaAtom, panelExpandidoAtom } from '../stores/metricas';
import DetalleCostos from './detalles/DetalleCostos';
import DetalleVentas from './detalles/DetalleVentas';
import DetalleBeneficio from './detalles/DetalleBeneficio';

// Componentes de detalle pendientes (placeholders)
const DetalleComercial = () => <div>Detalle Comercial - En desarrollo</div>;
const DetalleOperativo = () => <div>Detalle Operativo - En desarrollo</div>;
const DetalleProveedores = () => <div>Detalle Proveedores - En desarrollo</div>;
const DetalleClientes = () => <div>Detalle Clientes - En desarrollo</div>;

const PanelExpandible = () => {
  const [metricaSeleccionada] = useAtom(metricaSeleccionadaAtom);
  const [panelExpandido] = useAtom(panelExpandidoAtom);

  if (!panelExpandido || !metricaSeleccionada) {
    return (
      <div className="w-3/5 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">📊</div>
          <p className="text-sm">Selecciona una métrica para ver el análisis detallado</p>
        </div>
      </div>
    );
  }

  const renderDetalle = () => {
    switch (metricaSeleccionada.nombre) {
      case 'Costos':
        return <DetalleCostos />;
      case 'Ventas':
        return <DetalleVentas />;
      case 'Beneficio Neto':
        return <DetalleBeneficio />;
      case 'Margen de Beneficio':
        return <DetalleBeneficio />;
      case 'Utilidad Neta':
        return <DetalleBeneficio />;
      case 'Ticket Promedio':
        return <DetalleComercial />;
      case 'Nuevos Clientes':
        return <DetalleComercial />;
      case 'Retención':
        return <DetalleComercial />;
      case 'Eficiencia Operativa':
        return <DetalleOperativo />;
      case 'Tiempo Promedio':
        return <DetalleOperativo />;
      case 'Satisfacción':
        return <DetalleOperativo />;
      case 'Proveedores Activos':
        return <DetalleProveedores />;
      case 'Costo Promedio':
        return <DetalleProveedores />;
      case 'Clientes Activos':
        return <DetalleClientes />;
      case 'Valor Cliente':
        return <DetalleClientes />;
      default:
        return (
          <div className="text-center text-gray-500 py-8">
            <div className="text-2xl mb-2">🔍</div>
            <p>Análisis detallado no disponible para esta métrica</p>
          </div>
        );
    }
  };

  return (
    <div className="w-3/5 bg-white rounded-lg border border-gray-200 shadow-lg">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Análisis Detallado
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {metricaSeleccionada.nombre} • {metricaSeleccionada.categoria}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">
              {metricaSeleccionada.valor}
            </div>
            <div className="text-sm text-gray-600">
              {metricaSeleccionada.status}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          {renderDetalle()}
        </div>
      </div>
    </div>
  );
};

export default PanelExpandible;
