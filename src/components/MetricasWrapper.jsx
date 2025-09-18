import MetricasGenerales from './MetricasGenerales';

const MetricasWrapper = ({ 
  metricasGenerales, 
  colorTema = "#10b981" 
}) => {
  return (
    <div className="lg:col-span-1">
      <MetricasGenerales 
        titulo={metricasGenerales.titulo}
        subsecciones={metricasGenerales.subsecciones}
        columnas={1}
        colorTema={colorTema}
        className="h-full" // Asegura que ocupe toda la altura disponible
      />
    </div>
  );
};

export default MetricasWrapper;
