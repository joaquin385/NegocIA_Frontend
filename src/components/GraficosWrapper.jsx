const GraficosWrapper = ({ children }) => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 min-h-[550px]">
        <h3 className="text-lg font-bold mb-5">Visualizaciones</h3>
        {children}
      </div>
    </div>
  );
};

export default GraficosWrapper;
