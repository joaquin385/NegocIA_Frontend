import { useAtom } from 'jotai'
import { useState } from 'react'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'
import MetricasGenerales from '@/components/MetricasGenerales'
import GraficoEvolucion from '@/components/charts/GraficoEvolucion'
import GraficoEvolucionPorTipo from '@/components/charts/GraficoEvolucionPorTipo'
import GraficoDistribucionMonto from '@/components/charts/GraficoDistribucionMonto'
import TablaCombinacionesProductos from '@/components/TablaCombinacionesProductos'
import FiltrosFecha from '@/components/FiltrosFecha'
// import GraficoDistribucionTiempo from '@/components/charts/GraficoDistribucionTiempo'

const Tickets = () => {
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)
  const [activeTab, setActiveTab] = useState('evolucion')
  const [metrica, setMetrica] = useState('cantidad')
  const [fechaInicio, setFechaInicio] = useState('2025-07-28')
  const [fechaFin, setFechaFin] = useState('2025-08-28')

  // Datos simulados para el gráfico de evolución
  const datosCantidadTickets = [
    { fecha: '19/7', cantidad: 25 },
    { fecha: '20/7', cantidad: 38 },
    { fecha: '21/7', cantidad: 22 },
    { fecha: '22/7', cantidad: 45 },
    { fecha: '23/7', cantidad: 32 },
    { fecha: '24/7', cantidad: 28 },
    { fecha: '25/7', cantidad: 35 },
    { fecha: '26/7', cantidad: 42 },
    { fecha: '27/7', cantidad: 29 },
    { fecha: '28/7', cantidad: 33 },
    { fecha: '29/7', cantidad: 37 },
    { fecha: '30/7', cantidad: 41 },
    { fecha: '31/7', cantidad: 26 },
    { fecha: '1/8', cantidad: 34 },
    { fecha: '2/8', cantidad: 39 },
    { fecha: '3/8', cantidad: 31 },
    { fecha: '4/8', cantidad: 27 },
    { fecha: '5/8', cantidad: 36 },
    { fecha: '6/8', cantidad: 43 },
    { fecha: '7/8', cantidad: 30 },
    { fecha: '8/8', cantidad: 35 },
    { fecha: '9/8', cantidad: 40 },
    { fecha: '10/8', cantidad: 24 },
    { fecha: '11/8', cantidad: 32 },
    { fecha: '12/8', cantidad: 38 },
    { fecha: '13/8', cantidad: 29 },
    { fecha: '14/8', cantidad: 33 },
    { fecha: '15/8', cantidad: 37 },
    { fecha: '16/8', cantidad: 42 },
    { fecha: '17/8', cantidad: 28 },
    { fecha: '18/8', cantidad: 34 },
    { fecha: '19/8', cantidad: 39 },
    { fecha: '20/8', cantidad: 31 },
    { fecha: '21/8', cantidad: 36 },
    { fecha: '22/8', cantidad: 41 },
    { fecha: '23/8', cantidad: 27 },
    { fecha: '24/8', cantidad: 33 },
    { fecha: '25/8', cantidad: 38 },
    { fecha: '26/8', cantidad: 30 },
    { fecha: '27/8', cantidad: 35 }
  ]

  const datosTicketPromedio = [
    { fecha: '19/7', ticketPromedio: 1250 },
    { fecha: '20/7', ticketPromedio: 1180 },
    { fecha: '21/7', ticketPromedio: 1320 },
    { fecha: '22/7', ticketPromedio: 1150 },
    { fecha: '23/7', ticketPromedio: 1280 },
    { fecha: '24/7', ticketPromedio: 1200 },
    { fecha: '25/7', ticketPromedio: 1350 },
    { fecha: '26/7', ticketPromedio: 1220 },
    { fecha: '27/7', ticketPromedio: 1300 },
    { fecha: '28/7', ticketPromedio: 1180 },
    { fecha: '29/7', ticketPromedio: 1250 },
    { fecha: '30/7', ticketPromedio: 1280 },
    { fecha: '31/7', ticketPromedio: 1200 },
    { fecha: '1/8', ticketPromedio: 1320 },
    { fecha: '2/8', ticketPromedio: 1250 },
    { fecha: '3/8', ticketPromedio: 1180 },
    { fecha: '4/8', ticketPromedio: 1300 },
    { fecha: '5/8', ticketPromedio: 1280 },
    { fecha: '6/8', ticketPromedio: 1220 },
    { fecha: '7/8', ticketPromedio: 1350 },
    { fecha: '8/8', ticketPromedio: 1200 },
    { fecha: '9/8', ticketPromedio: 1250 },
    { fecha: '10/8', ticketPromedio: 1280 },
    { fecha: '11/8', ticketPromedio: 1180 },
    { fecha: '12/8', ticketPromedio: 1320 },
    { fecha: '13/8', ticketPromedio: 1250 },
    { fecha: '14/8', ticketPromedio: 1200 },
    { fecha: '15/8', ticketPromedio: 1280 },
    { fecha: '16/8', ticketPromedio: 1300 },
    { fecha: '17/8', ticketPromedio: 1220 },
    { fecha: '18/8', ticketPromedio: 1250 },
    { fecha: '19/8', ticketPromedio: 1280 },
    { fecha: '20/8', ticketPromedio: 1180 },
    { fecha: '21/8', ticketPromedio: 1320 },
    { fecha: '22/8', ticketPromedio: 1250 },
    { fecha: '23/8', ticketPromedio: 1200 },
    { fecha: '24/8', ticketPromedio: 1280 },
    { fecha: '25/8', ticketPromedio: 1300 },
    { fecha: '26/8', ticketPromedio: 1220 },
    { fecha: '27/8', ticketPromedio: 1250 }
  ]

  // Configuración de métricas para el gráfico
  const opcionesMetricas = [
    { value: 'cantidad', label: 'Cantidad de tickets' },
    { value: 'ticket-promedio', label: 'Ticket promedio' }
  ]

  // Datos simulados para evolución por tipo de ticket
  const datosEvolucionPorTipo = [
    { fecha: '19/7', bajoValor: 60, medioValor: 35, altoValor: 5 },
    { fecha: '20/7', bajoValor: 45, medioValor: 40, altoValor: 15 },
    { fecha: '21/7', bajoValor: 70, medioValor: 25, altoValor: 5 },
    { fecha: '22/7', bajoValor: 50, medioValor: 35, altoValor: 15 },
    { fecha: '23/7', bajoValor: 55, medioValor: 30, altoValor: 15 },
    { fecha: '24/7', bajoValor: 65, medioValor: 30, altoValor: 5 },
    { fecha: '25/7', bajoValor: 40, medioValor: 45, altoValor: 15 },
    { fecha: '26/7', bajoValor: 50, medioValor: 35, altoValor: 15 },
    { fecha: '27/7', bajoValor: 60, medioValor: 30, altoValor: 10 },
    { fecha: '28/7', bajoValor: 45, medioValor: 40, altoValor: 15 },
    { fecha: '29/7', bajoValor: 55, medioValor: 35, altoValor: 10 },
    { fecha: '30/7', bajoValor: 50, medioValor: 35, altoValor: 15 },
    { fecha: '31/7', bajoValor: 65, medioValor: 25, altoValor: 10 },
    { fecha: '1/8', bajoValor: 45, medioValor: 40, altoValor: 15 },
    { fecha: '2/8', bajoValor: 50, medioValor: 35, altoValor: 15 },
    { fecha: '3/8', bajoValor: 60, medioValor: 30, altoValor: 10 },
    { fecha: '4/8', bajoValor: 55, medioValor: 35, altoValor: 10 },
    { fecha: '5/8', bajoValor: 45, medioValor: 40, altoValor: 15 },
    { fecha: '6/8', bajoValor: 50, medioValor: 35, altoValor: 15 },
    { fecha: '7/8', bajoValor: 60, medioValor: 30, altoValor: 10 },
    { fecha: '8/8', bajoValor: 40, medioValor: 45, altoValor: 15 },
    { fecha: '9/8', bajoValor: 55, medioValor: 35, altoValor: 10 },
    { fecha: '10/8', bajoValor: 65, medioValor: 25, altoValor: 10 },
    { fecha: '11/8', bajoValor: 50, medioValor: 35, altoValor: 15 },
    { fecha: '12/8', bajoValor: 45, medioValor: 40, altoValor: 15 },
    { fecha: '13/8', bajoValor: 60, medioValor: 30, altoValor: 10 },
    { fecha: '14/8', bajoValor: 55, medioValor: 35, altoValor: 10 },
    { fecha: '15/8', bajoValor: 50, medioValor: 35, altoValor: 15 },
    { fecha: '16/8', bajoValor: 45, medioValor: 40, altoValor: 15 },
    { fecha: '17/8', bajoValor: 60, medioValor: 30, altoValor: 10 },
    { fecha: '18/8', bajoValor: 55, medioValor: 35, altoValor: 10 },
    { fecha: '19/8', bajoValor: 50, medioValor: 35, altoValor: 15 },
    { fecha: '20/8', bajoValor: 45, medioValor: 40, altoValor: 15 },
    { fecha: '21/8', bajoValor: 60, medioValor: 30, altoValor: 10 },
    { fecha: '22/8', bajoValor: 55, medioValor: 35, altoValor: 10 },
    { fecha: '23/8', bajoValor: 50, medioValor: 35, altoValor: 15 },
    { fecha: '24/8', bajoValor: 45, medioValor: 40, altoValor: 15 },
    { fecha: '25/8', bajoValor: 60, medioValor: 30, altoValor: 10 },
    { fecha: '26/8', bajoValor: 55, medioValor: 35, altoValor: 10 },
    { fecha: '27/8', bajoValor: 50, medioValor: 35, altoValor: 15 }
  ]

  // Función para obtener datos según la métrica seleccionada
  const obtenerDatosPorMetrica = (metrica) => {
    switch (metrica) {
      case 'cantidad':
        return datosCantidadTickets;
      case 'ticket-promedio':
        return datosTicketPromedio;
      default:
        return datosCantidadTickets;
    }
  }

  // Estructura de datos para las métricas generales
  const metricasGenerales = {
    titulo: "Métricas Generales",
    subsecciones: [
      {
        titulo: "Ticket promedio",
        metricas: [
          { nombre: "Valor promedio ($)", valor: 1234, formato: "moneda" },
          { nombre: "Unidades promedio", valor: 4.2, formato: "numero" }
        ]
      },
      {
        titulo: "Distribución del ticket",
        metricas: [
          { nombre: "Ticket máximo", valor: 3500, formato: "moneda" },
          { nombre: "Ticket mínimo", valor: 200, formato: "moneda" }
        ]
      },
      {
        titulo: "Segmentación por valor",
        metricas: [
          { nombre: "% tickets bajo valor", valor: 45, formato: "porcentaje" },
          { nombre: "% tickets medio valor", valor: 35, formato: "porcentaje" },
          { nombre: "% tickets alto valor", valor: 20, formato: "porcentaje" }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <ExpandableSidebar 
        title="Ayuda educativa - Análisis de Tickets" 
        iconPosition="right"
      >
        <div>
          {/* Métricas de Tickets */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">🎯 Ticket promedio (en $ y unidades)</h3>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              <strong>¿Qué es?</strong>
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              Es el valor promedio que gasta un cliente en cada compra, ya sea en dinero ($) o en cantidad de productos comprados (unidades).
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              Se calcula como:
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              ▸ Total de ventas ÷ Cantidad de tickets (en dinero o unidades)
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              <strong>¿Para qué sirve?</strong>
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              🧠 Ayuda a entender el comportamiento promedio de compra.
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              🎯 Si el ticket promedio es muy bajo, se pueden aplicar acciones para incentivar compras más grandes (por ejemplo: combos, promociones, venta cruzada).
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words mb-2">
              Si es muy alto, se puede analizar si hay oportunidad de crear nuevas categorías de productos de menor precio para atraer más público.
            </p>
            <p className="text-blue-800 text-xs leading-relaxed break-words">
              También permite medir el impacto de promociones o cambios de precios a lo largo del tiempo.
            </p>
          </div>

          {/* Segmentación de Tickets */}
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-green-900 mb-2">% de tickets de bajo, medio y alto valor (segmentación)</h3>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              <strong>¿Qué es?</strong>
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              Es la proporción de tickets que caen en diferentes rangos de valor. Por ejemplo:
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              Bajo valor: menos de $2.000<br/>
              Medio valor: entre $2.000 y $6.000<br/>
              Alto valor: más de $6.000
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              (Los valores deben definirse en función del negocio.)
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              <strong>¿Para qué sirve?</strong>
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              🧠 Permite clasificar los tipos de compra que predominan.
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              🎯 Si la mayoría son de bajo valor, se puede pensar en estrategias para aumentar el monto promedio (venta cruzada, descuentos por volumen, upselling).
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              Si hay muchos de alto valor, quizás conviene crear programas de fidelización o beneficios especiales.
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words">
              También sirve para ajustar la comunicación comercial, los precios y hasta la disposición de productos en el local o en la web.
            </p>
          </div>

          {/* Gráficos */}
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-purple-900 mb-2">📈 Gráficos</h3>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-purple-800 mb-2">📈 Evolución del ticket promedio por hora, día y mes</h4>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                <strong>Qué muestra:</strong>
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                El valor promedio de los tickets (ventas) a lo largo del tiempo, segmentado por hora del día, día de la semana y mes.
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                <strong>Para qué sirve / Decisiones posibles:</strong>
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                • Identificar cuándo los clientes gastan más (por ejemplo, los sábados por la tarde o a fin de mes).
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                • Ajustar estrategias de precios o promociones según momentos de alta o baja compra.
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                • Decidir horarios de apertura o refuerzo de personal en los momentos donde el ticket promedio es alto.
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words">
                • Detectar caídas en el valor del ticket y actuar con estrategias correctivas (promociones cruzadas, combos, etc.).
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-purple-800 mb-2">📊 Evolución del % de tickets bajos, medios y altos por hora, día y mes</h4>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                <strong>Qué muestra:</strong>
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                La proporción de tickets de bajo, medio y alto valor según el momento del día, semana o mes.
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                <strong>Para qué sirve / Decisiones posibles:</strong>
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                • Detectar momentos en los que predominan tickets bajos para lanzar promociones que incentiven mayor gasto.
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                • Medir el impacto de campañas o cambios de precios sobre el comportamiento del cliente.
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                • Definir si ciertos horarios o días son más atractivos para clientes de alto valor, y enfocar recursos ahí (personal, atención, productos premium).
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words">
                • Segmentar acciones según tipo de cliente en función del patrón temporal (ej. ofrecer combos de mediodía para aumentar ticket en horarios bajos).
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-purple-800 mb-2">📉 Histograma del monto del ticket (distribución)</h4>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                <strong>Qué muestra:</strong>
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                La distribución de los tickets según su monto. Permite ver si hay muchos tickets pequeños, una mayoría media, o si hay casos extremos.
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                <strong>Para qué sirve / Decisiones posibles:</strong>
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                • Entender si el negocio tiene una distribución sana de ingresos, o si la mayoría de las ventas son de bajo valor.
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                • Detectar concentración en rangos específicos (ej. la mayoría compra entre $2000 y $3000).
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                • Analizar si hay tickets muy altos aislados que podrían indicar ventas atípicas o incluso errores de carga.
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words">
                • Tomar decisiones para elevar el ticket medio diseñando ofertas que empujen hacia el siguiente rango de valor.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-purple-800 mb-2">🧊 Boxplot del ticket promedio por hora del día / día de la semana</h4>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                <strong>Qué muestra:</strong>
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                Resumen estadístico de los tickets por hora o día, mostrando la mediana, rangos y valores atípicos.
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                <strong>Para qué sirve / Decisiones posibles:</strong>
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                • Comparar rápidamente variabilidad en el ticket según horarios o días.
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                • Identificar momentos con alta dispersión, donde algunos clientes gastan mucho y otros muy poco.
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words mb-2">
                • Ver momentos de ticket muy estable o predecible: ideal para pruebas A/B de promociones.
              </p>
              <p className="text-purple-700 text-xs leading-relaxed break-words">
                • Detectar outliers que pueden indicar errores, eventos especiales o clientes grandes (potenciales a fidelizar).
              </p>
            </div>
          </div>

          {/* Tabla de Combinaciones */}
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-indigo-900 mb-2">📋 Combinaciones de Productos más Frecuentes</h3>
            <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
              <strong>Qué muestra:</strong>
            </p>
            <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
              Las combinaciones de productos que más frecuentemente se compran juntas, con métricas de frecuencia, ticket promedio, máximo y mínimo.
            </p>
            <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
              <strong>Para qué sirve / Decisiones posibles:</strong>
            </p>
            <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Combinaciones con alta frecuencia y alto ticket</strong> → Promocionar como combos estrella.
            </p>
            <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Combinaciones con ticket bajo pero repetidas</strong> → Usar para generar volumen o atraer clientes nuevos.
            </p>
            <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
              • <strong>Combinaciones de valor medio</strong> → Oportunidades para agregar ítems que aumenten el valor del ticket (upselling).
            </p>
            <p className="text-indigo-800 text-xs leading-relaxed break-words">
              • <strong>Combinaciones de alto valor</strong> → Ideal para promociones exclusivas o clientes frecuentes.
            </p>
          </div>
        </div>
      </ExpandableSidebar>

      <div className={`
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'mr-[30%]' : 'mr-0'}
        py-4
      `}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-5">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 bg-clip-text text-transparent mb-2">
              Análisis de Tickets
            </h1>
            <p className="text-sm text-gray-600">Análisis completo de métricas y tendencias de tickets por dimensión</p>
          </div>

          {/* Filtros */}
          <FiltrosFecha 
            fechaInicio={fechaInicio}
            fechaFin={fechaFin}
            onFechaInicioChange={setFechaInicio}
            onFechaFinChange={setFechaFin}
          />

          {/* Layout principal */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            {/* Métricas Generales */}
            <div className="xl:col-span-1">
              <MetricasGenerales 
                {...metricasGenerales}
                colorTema="#3b82f6"
                columnas={1}
              />
            </div>

            {/* Gráficos */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 min-h-[550px]">
                {/* Pestañas */}
                <div className="flex space-x-1 border-b mb-4">
                  <button 
                    onClick={() => setActiveTab('evolucion')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'evolucion' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500'
                    }`}
                  >
                    Evolución
                  </button>
                  <button 
                    onClick={() => setActiveTab('evolucion-tipo')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'evolucion-tipo' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500'
                    }`}
                  >
                    Evolución por tipo
                  </button>
                  <button 
                    onClick={() => setActiveTab('distribucion-monto')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'distribucion-monto' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500'
                    }`}
                  >
                    Distribución de monto
                  </button>
                  <button 
                    onClick={() => setActiveTab('distribucion-tiempo')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'distribucion-tiempo' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500'
                    }`}
                  >
                    Distribución por tiempo
                  </button>


                </div>

                {/* Contenido de gráficos */}
                <div className="bg-gray-50 rounded-lg p-5" style={{ height: '500px' }}>
                  {activeTab === 'evolucion' && (
                    <div>
                      <GraficoEvolucion 
                        datos={obtenerDatosPorMetrica(metrica)}
                        titulo="Evolución de Tickets"
                        color="#3b82f6"
                        altura="400px"
                        opcionesMetricas={opcionesMetricas}
                        campoDatos={metrica === 'cantidad' ? 'cantidad' : 'ticketPromedio'}
                        formatearEjeY={(value) => {
                          if (metrica === 'cantidad') {
                            return `${value}`;
                          } else {
                            return `$${value.toLocaleString()}`;
                          }
                        }}
                        formatearTooltip={(value) => {
                          if (metrica === 'cantidad') {
                            return [`${value}`, 'Cantidad de tickets'];
                          } else {
                            return [`$${value.toLocaleString()}`, 'Ticket promedio'];
                          }
                        }}
                        onMetricaChange={setMetrica}
                      />
                    </div>
                  )}
                  
                  {activeTab === 'evolucion-tipo' && (
                    <div>
                      <GraficoEvolucionPorTipo 
                        datos={datosEvolucionPorTipo}
                        titulo="Evolución por Tipo de Ticket"
                        altura="400px"
                        formatearEjeY={(value) => `${value}%`}
                        formatearTooltip={(value, name) => [`${value}%`, name]}
                      />
                    </div>
                  )}
                  
                  {activeTab === 'distribucion-monto' && (
                    <div>
                      <GraficoDistribucionMonto 
                        titulo="Distribución de Montos de Tickets"
                        altura="400px"
                        formatearEjeY={(value) => `${value}`}
                        formatearTooltip={(value, name) => [`${value}`, name]}
                      />
                    </div>
                  )}
                  
                  {activeTab === 'distribucion-tiempo' && (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="text-6xl mb-4">📊</div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Gráfico de Distribución por Tiempo</h3>
                        <p className="text-sm text-gray-500">Placeholder - Box plot temporalmente deshabilitado</p>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'variacion' && (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="text-6xl mb-4">📊</div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Gráfico de Variación %</h3>
                        <p className="text-sm text-gray-500">Placeholder - Gráfico de variación porcentual</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tabla de Combinaciones de Productos */}
          <div className="mt-5">
            <TablaCombinacionesProductos />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tickets
