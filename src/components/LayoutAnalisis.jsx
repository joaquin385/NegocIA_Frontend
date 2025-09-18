import MetricasWrapper from './MetricasWrapper';
import GraficosWrapper from './GraficosWrapper';

const LayoutAnalisis = ({ 
  metricasGenerales, 
  colorTema = "#10b981",
  children 
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Gráficos */}
      <GraficosWrapper>
        {children}
      </GraficosWrapper>

      {/* Métricas Generales */}
      <MetricasWrapper 
        metricasGenerales={metricasGenerales}
        colorTema={colorTema}
      />
    </div>
  );
};

export default LayoutAnalisis;
