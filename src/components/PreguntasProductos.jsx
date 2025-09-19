import React, { useState } from 'react'

const PreguntasProductos = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('fundacionales')
  const [modalAbierto, setModalAbierto] = useState(false)
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null)

  // Datos de las categorías y preguntas
  const categoriasPreguntas = {
    fundacionales: {
      titulo: "Preguntas fundacionales",
      preguntas: [
        {
          id: 1,
          pregunta: "¿Cuáles son mis productos más vendidos?",
          respuesta: {
            titulo: "Saber esto te ayuda a:",
            subtitulo: "¿Qué decisiones se pueden tomar con esta información?",
            beneficios: [
              "Asegurar stock suficiente para no perder ventas.",
              "Analizar su rentabilidad real: ¿son los más vendidos también los que dejan más margen?",
              "Usarlos como ancla o gancho en promociones.",
              "Detectar patrones estacionales: ¿venden siempre igual o en ciertos momentos?"
            ],
            decisiones: [
              "Reforzar el abastecimiento y control de inventario.",
              "Destacarlos más en promociones o en la exhibición.",
              "Revisar si el margen acompaña el volumen de ventas.",
              "Replicar su estrategia con productos similares."
            ],
            tabla: [
              { producto: "Galletitas ChocoMax", unidades: 120 },
              { producto: "Leche Entera 1L", unidades: 110 },
              { producto: "Pan Lactal", unidades: 105 },
              { producto: "Queso Cremoso", unidades: 98 },
              { producto: "Yogur Bebible", unidades: 90 },
              { producto: "Aceite de Girasol", unidades: 85 },
              { producto: "Arroz Largo Fino", unidades: 80 },
              { producto: "Gaseosa Cola 2L", unidades: 78 },
              { producto: "Fideos Spaghetti", unidades: 75 },
              { producto: "Pollo Fresco", unidades: 70 }
            ]
          }
        },
        {
          id: 2,
          pregunta: "¿Cuáles son los que más facturan?",
          respuesta: {
            titulo: "Saber esto te ayuda a:",
            subtitulo: "¿Qué decisiones se pueden tomar con esta información?",
            beneficios: [
              "Identificar los productos de mayor valor económico.",
              "Entender qué productos generan más ingresos totales.",
              "Planificar estrategias de precios y promociones.",
              "Evaluar el impacto en el flujo de caja."
            ],
            decisiones: [
              "Priorizar el stock de productos de alto valor.",
              "Desarrollar estrategias de upselling.",
              "Revisar la estructura de precios.",
              "Focalizar esfuerzos comerciales en estos productos."
            ],
            tabla: [
              { producto: "Producto Premium A", unidades: 45, ventas: 22500 },
              { producto: "Producto Premium B", unidades: 38, ventas: 19000 },
              { producto: "Producto Estrella", unidades: 52, ventas: 15600 },
              { producto: "Producto Clave", unidades: 41, ventas: 12300 },
              { producto: "Producto Base", unidades: 67, ventas: 10050 },
              { producto: "Producto Estándar", unidades: 29, ventas: 8700 },
              { producto: "Producto Regular", unidades: 33, ventas: 6600 },
              { producto: "Producto Básico", unidades: 25, ventas: 5000 },
              { producto: "Producto Económico", unidades: 18, ventas: 3600 },
              { producto: "Producto Accesible", unidades: 15, ventas: 3000 }
            ]
          }
        },
        {
          id: 3,
          pregunta: "¿Qué productos me dejan más ganancia total?",
          respuesta: {
            titulo: "Saber esto te ayuda a:",
            subtitulo: "¿Qué decisiones se pueden tomar con esta información?",
            beneficios: [
              "Identificar los productos más rentables del negocio.",
              "Entender qué productos generan mayor margen total.",
              "Optimizar la mezcla de productos.",
              "Tomar decisiones de inversión en inventario."
            ],
            decisiones: [
              "Aumentar el stock de productos de alta rentabilidad.",
              "Desarrollar productos similares a los más rentables.",
              "Revisar precios de productos de baja rentabilidad.",
              "Focalizar promociones en productos rentables."
            ],
            tabla: [
              { producto: "Producto Rentable A", unidades: 40, margen: 12000 },
              { producto: "Producto Rentable B", unidades: 35, margen: 10500 },
              { producto: "Producto Estrella", unidades: 30, margen: 9000 },
              { producto: "Producto Clave", unidades: 25, margen: 7500 },
              { producto: "Producto Base", unidades: 20, margen: 6000 },
              { producto: "Producto Estándar", unidades: 18, margen: 5400 },
              { producto: "Producto Regular", unidades: 15, margen: 4500 },
              { producto: "Producto Básico", unidades: 12, margen: 3600 },
              { producto: "Producto Económico", unidades: 10, margen: 3000 },
              { producto: "Producto Accesible", unidades: 8, margen: 2400 }
            ]
          }
        },
        {
          id: 4,
          pregunta: "¿Qué productos tienen margen bajo o negativo?",
          respuesta: {
            titulo: "Saber esto te ayuda a:",
            subtitulo: "¿Qué decisiones se pueden tomar con esta información?",
            beneficios: [
              "Identificar productos problemáticos en rentabilidad.",
              "Entender qué productos requieren atención inmediata.",
              "Optimizar la estructura de costos.",
              "Tomar decisiones de discontinuación o mejora."
            ],
            decisiones: [
              "Revisar y ajustar precios de venta.",
              "Negociar mejores condiciones con proveedores.",
              "Evaluar la discontinuación del producto.",
              "Implementar estrategias de mejora de eficiencia."
            ],
            tabla: [
              { producto: "Producto Problemático A", unidades: 20, margen: -500 },
              { producto: "Producto Problemático B", unidades: 15, margen: -300 },
              { producto: "Producto Bajo Margen", unidades: 25, margen: 100 },
              { producto: "Producto Crítico", unidades: 18, margen: 50 },
              { producto: "Producto Ajuste", unidades: 22, margen: 200 },
              { producto: "Producto Revisión", unidades: 16, margen: 150 },
              { producto: "Producto Optimización", unidades: 19, margen: 300 },
              { producto: "Producto Mejora", unidades: 21, margen: 400 },
              { producto: "Producto Estable", unidades: 17, margen: 500 },
              { producto: "Producto Recuperación", unidades: 14, margen: 600 }
            ]
          }
        }
      ]
    },
    tacticas: {
      titulo: "Preguntas tácticas",
      preguntas: [
        {
          id: 5,
          pregunta: "¿Qué productos tienen mayor rotación?",
          respuesta: {
            titulo: "Saber esto te ayuda a:",
            subtitulo: "¿Qué decisiones se pueden tomar con esta información?",
            beneficios: [
              "Optimizar el espacio de exhibición.",
              "Planificar reposiciones más frecuentes.",
              "Identificar productos de alta demanda.",
              "Mejorar la gestión de inventario."
            ],
            decisiones: [
              "Asignar más espacio de exhibición.",
              "Ajustar frecuencias de reposición.",
              "Desarrollar estrategias de cross-selling.",
              "Monitorear niveles de stock más de cerca."
            ],
            tabla: [
              { producto: "Producto Rotación A", unidades: 150, rotacion: 12.5 },
              { producto: "Producto Rotación B", unidades: 140, rotacion: 11.7 },
              { producto: "Producto Estrella", unidades: 130, rotacion: 10.8 },
              { producto: "Producto Clave", unidades: 120, rotacion: 10.0 },
              { producto: "Producto Base", unidades: 110, rotacion: 9.2 },
              { producto: "Producto Estándar", unidades: 100, rotacion: 8.3 },
              { producto: "Producto Regular", unidades: 90, rotacion: 7.5 },
              { producto: "Producto Básico", unidades: 80, rotacion: 6.7 },
              { producto: "Producto Económico", unidades: 70, rotacion: 5.8 },
              { producto: "Producto Accesible", unidades: 60, rotacion: 5.0 }
            ]
          }
        },
        {
          id: 6,
          pregunta: "¿Cuáles son los productos estacionales?",
          respuesta: {
            titulo: "Saber esto te ayuda a:",
            subtitulo: "¿Qué decisiones se pueden tomar con esta información?",
            beneficios: [
              "Planificar compras estacionales.",
              "Optimizar el espacio de almacén.",
              "Desarrollar estrategias promocionales.",
              "Gestionar el flujo de caja estacional."
            ],
            decisiones: [
              "Ajustar compras según la estacionalidad.",
              "Desarrollar promociones estacionales.",
              "Optimizar el espacio de almacén.",
              "Planificar el flujo de caja."
            ],
            tabla: [
              { producto: "Producto Verano", unidades: 200, estacion: "Verano" },
              { producto: "Producto Invierno", unidades: 180, estacion: "Invierno" },
              { producto: "Producto Navidad", unidades: 160, estacion: "Navidad" },
              { producto: "Producto Back to School", unidades: 140, estacion: "Marzo" },
              { producto: "Producto Día del Padre", unidades: 120, estacion: "Junio" },
              { producto: "Producto Día de la Madre", unidades: 100, estacion: "Octubre" },
              { producto: "Producto Halloween", unidades: 80, estacion: "Octubre" },
              { producto: "Producto San Valentín", unidades: 60, estacion: "Febrero" },
              { producto: "Producto Día del Niño", unidades: 40, estacion: "Agosto" },
              { producto: "Producto Año Nuevo", unidades: 20, estacion: "Diciembre" }
            ]
          }
        },
        {
          id: 7,
          pregunta: "¿Qué productos tienen mayor descuento?",
          respuesta: {
            titulo: "Saber esto te ayuda a:",
            subtitulo: "¿Qué decisiones se pueden tomar con esta información?",
            beneficios: [
              "Entender la elasticidad de precios.",
              "Optimizar estrategias promocionales.",
              "Identificar productos de alta sensibilidad al precio.",
              "Mejorar la rentabilidad promocional."
            ],
            decisiones: [
              "Ajustar estrategias de precios.",
              "Optimizar el mix promocional.",
              "Desarrollar productos de mayor margen.",
              "Revisar la estructura de costos."
            ],
            tabla: [
              { producto: "Producto Descuento A", unidades: 100, descuento: 30 },
              { producto: "Producto Descuento B", unidades: 90, descuento: 25 },
              { producto: "Producto Promoción", unidades: 80, descuento: 20 },
              { producto: "Producto Oferta", unidades: 70, descuento: 15 },
              { producto: "Producto Rebaja", unidades: 60, descuento: 10 },
              { producto: "Producto Estándar", unidades: 50, descuento: 5 },
              { producto: "Producto Regular", unidades: 40, descuento: 0 },
              { producto: "Producto Premium", unidades: 30, descuento: 0 },
              { producto: "Producto Exclusivo", unidades: 20, descuento: 0 },
              { producto: "Producto Limitado", unidades: 10, descuento: 0 }
            ]
          }
        },
        {
          id: 8,
          pregunta: "¿Cuáles son los productos con mayor devolución?",
          respuesta: {
            titulo: "Saber esto te ayuda a:",
            subtitulo: "¿Qué decisiones se pueden tomar con esta información?",
            beneficios: [
              "Identificar problemas de calidad.",
              "Mejorar la satisfacción del cliente.",
              "Optimizar la gestión de devoluciones.",
              "Reducir costos operativos."
            ],
            decisiones: [
              "Revisar la calidad del producto.",
              "Mejorar el proceso de selección.",
              "Implementar controles de calidad.",
              "Desarrollar estrategias de retención."
            ],
            tabla: [
              { producto: "Producto Devolución A", unidades: 50, devoluciones: 15 },
              { producto: "Producto Devolución B", unidades: 45, devoluciones: 12 },
              { producto: "Producto Problemático", unidades: 40, devoluciones: 10 },
              { producto: "Producto Crítico", unidades: 35, devoluciones: 8 },
              { producto: "Producto Ajuste", unidades: 30, devoluciones: 6 },
              { producto: "Producto Revisión", unidades: 25, devoluciones: 4 },
              { producto: "Producto Estable", unidades: 20, devoluciones: 2 },
              { producto: "Producto Confiable", unidades: 15, devoluciones: 1 },
              { producto: "Producto Premium", unidades: 10, devoluciones: 0 },
              { producto: "Producto Exclusivo", unidades: 5, devoluciones: 0 }
            ]
          }
        }
      ]
    },
    estrategicas: {
      titulo: "Preguntas estratégicas",
      preguntas: [
        {
          id: 9,
          pregunta: "¿Cuáles son los productos estrella?",
          respuesta: {
            titulo: "Saber esto te ayuda a:",
            subtitulo: "¿Qué decisiones se pueden tomar con esta información?",
            beneficios: [
              "Identificar los productos más valiosos del negocio.",
              "Desarrollar estrategias de crecimiento.",
              "Optimizar la inversión en marketing.",
              "Crear ventajas competitivas."
            ],
            decisiones: [
              "Invertir más en marketing de productos estrella.",
              "Desarrollar productos similares.",
              "Crear estrategias de expansión.",
              "Establecer alianzas estratégicas."
            ],
            tabla: [
              { producto: "Producto Estrella A", unidades: 200, valor: 50000 },
              { producto: "Producto Estrella B", unidades: 180, valor: 45000 },
              { producto: "Producto Líder", unidades: 160, valor: 40000 },
              { producto: "Producto Clave", unidades: 140, valor: 35000 },
              { producto: "Producto Base", unidades: 120, valor: 30000 },
              { producto: "Producto Estándar", unidades: 100, valor: 25000 },
              { producto: "Producto Regular", unidades: 80, valor: 20000 },
              { producto: "Producto Básico", unidades: 60, valor: 15000 },
              { producto: "Producto Económico", unidades: 40, valor: 10000 },
              { producto: "Producto Accesible", unidades: 20, valor: 5000 }
            ]
          }
        },
        {
          id: 10,
          pregunta: "¿Qué productos tienen mayor potencial de crecimiento?",
          respuesta: {
            titulo: "Saber esto te ayuda a:",
            subtitulo: "¿Qué decisiones se pueden tomar con esta información?",
            beneficios: [
              "Identificar oportunidades de crecimiento.",
              "Planificar inversiones estratégicas.",
              "Desarrollar nuevos mercados.",
              "Crear ventajas competitivas."
            ],
            decisiones: [
              "Invertir en marketing de productos con potencial.",
              "Desarrollar estrategias de expansión.",
              "Crear alianzas estratégicas.",
              "Implementar programas de desarrollo."
            ],
            tabla: [
              { producto: "Producto Potencial A", unidades: 100, crecimiento: 150 },
              { producto: "Producto Potencial B", unidades: 90, crecimiento: 140 },
              { producto: "Producto Emergente", unidades: 80, crecimiento: 130 },
              { producto: "Producto Oportunidad", unidades: 70, crecimiento: 120 },
              { producto: "Producto Desarrollo", unidades: 60, crecimiento: 110 },
              { producto: "Producto Expansión", unidades: 50, crecimiento: 100 },
              { producto: "Producto Estable", unidades: 40, crecimiento: 90 },
              { producto: "Producto Maduro", unidades: 30, crecimiento: 80 },
              { producto: "Producto Declive", unidades: 20, crecimiento: 70 },
              { producto: "Producto Obsoleto", unidades: 10, crecimiento: 60 }
            ]
          }
        },
        {
          id: 11,
          pregunta: "¿Cuáles son los productos de mayor riesgo?",
          respuesta: {
            titulo: "Saber esto te ayuda a:",
            subtitulo: "¿Qué decisiones se pueden tomar con esta información?",
            beneficios: [
              "Identificar productos problemáticos.",
              "Desarrollar estrategias de mitigación.",
              "Optimizar la gestión de riesgos.",
              "Mejorar la estabilidad del negocio."
            ],
            decisiones: [
              "Implementar controles de riesgo.",
              "Desarrollar planes de contingencia.",
              "Diversificar el portafolio de productos.",
              "Establecer límites de exposición."
            ],
            tabla: [
              { producto: "Producto Riesgo A", unidades: 50, riesgo: "Alto" },
              { producto: "Producto Riesgo B", unidades: 45, riesgo: "Alto" },
              { producto: "Producto Problemático", unidades: 40, riesgo: "Medio" },
              { producto: "Producto Crítico", unidades: 35, riesgo: "Medio" },
              { producto: "Producto Ajuste", unidades: 30, riesgo: "Bajo" },
              { producto: "Producto Estable", unidades: 25, riesgo: "Bajo" },
              { producto: "Producto Confiable", unidades: 20, riesgo: "Muy Bajo" },
              { producto: "Producto Seguro", unidades: 15, riesgo: "Muy Bajo" },
              { producto: "Producto Premium", unidades: 10, riesgo: "Muy Bajo" },
              { producto: "Producto Exclusivo", unidades: 5, riesgo: "Muy Bajo" }
            ]
          }
        },
        {
          id: 12,
          pregunta: "¿Qué productos requieren mayor inversión?",
          respuesta: {
            titulo: "Saber esto te ayuda a:",
            subtitulo: "¿Qué decisiones se pueden tomar con esta información?",
            beneficios: [
              "Planificar inversiones estratégicas.",
              "Optimizar la asignación de recursos.",
              "Desarrollar estrategias de financiamiento.",
              "Mejorar la rentabilidad de las inversiones."
            ],
            decisiones: [
              "Priorizar inversiones en productos clave.",
              "Desarrollar estrategias de financiamiento.",
              "Optimizar la asignación de recursos.",
              "Implementar controles de inversión."
            ],
            tabla: [
              { producto: "Producto Inversión A", unidades: 100, inversion: 100000 },
              { producto: "Producto Inversión B", unidades: 90, inversion: 90000 },
              { producto: "Producto Capital", unidades: 80, inversion: 80000 },
              { producto: "Producto Recursos", unidades: 70, inversion: 70000 },
              { producto: "Producto Desarrollo", unidades: 60, inversion: 60000 },
              { producto: "Producto Expansión", unidades: 50, inversion: 50000 },
              { producto: "Producto Estándar", unidades: 40, inversion: 40000 },
              { producto: "Producto Regular", unidades: 30, inversion: 30000 },
              { producto: "Producto Básico", unidades: 20, inversion: 20000 },
              { producto: "Producto Económico", unidades: 10, inversion: 10000 }
            ]
          }
        }
      ]
    }
  }

  // Función para abrir el modal
  const abrirModal = (pregunta) => {
    setPreguntaSeleccionada(pregunta)
    setModalAbierto(true)
  }

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalAbierto(false)
    setPreguntaSeleccionada(null)
  }

  // Función para formatear moneda
  const formatearMoneda = (valor) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(valor)
  }

  const preguntasActuales = categoriasPreguntas[categoriaActiva].preguntas

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <h3 className="text-sm font-semibold text-gray-800 mb-6">
        Preguntas de Análisis
      </h3>
      
      <div className="flex gap-6">
        {/* Sidebar de categorías */}
        <div className="w-64 flex-shrink-0">
          <div className="space-y-2">
            {Object.entries(categoriasPreguntas).map(([key, categoria]) => (
              <button
                key={key}
                onClick={() => setCategoriaActiva(key)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  categoriaActiva === key
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {categoria.titulo}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de preguntas */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            {preguntasActuales.map((pregunta) => (
              <div
                key={pregunta.id}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h4 className="text-sm font-medium text-gray-800 mb-3">
                  {pregunta.pregunta}
                </h4>
                <button
                  onClick={() => abrirModal(pregunta)}
                  className="w-full px-4 py-2 text-xs font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
                >
                  Ver detalle
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalAbierto && preguntaSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header del modal */}
            <div className="bg-gradient-to-r from-blue-600 to-slate-600 text-white p-6 rounded-t-xl">
              <h2 className="text-lg font-semibold mb-2">
                {preguntaSeleccionada.respuesta.titulo}
              </h2>
              <h3 className="text-sm font-medium opacity-90">
                {preguntaSeleccionada.respuesta.subtitulo}
              </h3>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Columna izquierda - Beneficios */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">
                    {preguntaSeleccionada.respuesta.titulo}
                  </h4>
                  <ul className="space-y-2">
                    {preguntaSeleccionada.respuesta.beneficios.map((beneficio, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-sm text-gray-700">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Columna derecha - Decisiones */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">
                    {preguntaSeleccionada.respuesta.subtitulo}
                  </h4>
                  <ul className="space-y-2">
                    {preguntaSeleccionada.respuesta.decisiones.map((decision, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="text-sm text-gray-700">{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tabla de datos */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-3">
                  Top 10 Productos
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-2 font-semibold text-gray-700">
                          Producto
                        </th>
                        <th className="text-center py-2 px-2 font-semibold text-gray-700">
                          Unidades vendidas
                        </th>
                        {preguntaSeleccionada.respuesta.tabla[0].ventas && (
                          <th className="text-center py-2 px-2 font-semibold text-gray-700">
                            Ventas totales
                          </th>
                        )}
                        {preguntaSeleccionada.respuesta.tabla[0].margen && (
                          <th className="text-center py-2 px-2 font-semibold text-gray-700">
                            Margen total
                          </th>
                        )}
                        {preguntaSeleccionada.respuesta.tabla[0].rotacion && (
                          <th className="text-center py-2 px-2 font-semibold text-gray-700">
                            Rotación
                          </th>
                        )}
                        {preguntaSeleccionada.respuesta.tabla[0].estacion && (
                          <th className="text-center py-2 px-2 font-semibold text-gray-700">
                            Estación
                          </th>
                        )}
                        {preguntaSeleccionada.respuesta.tabla[0].descuento && (
                          <th className="text-center py-2 px-2 font-semibold text-gray-700">
                            Descuento %
                          </th>
                        )}
                        {preguntaSeleccionada.respuesta.tabla[0].devoluciones && (
                          <th className="text-center py-2 px-2 font-semibold text-gray-700">
                            Devoluciones
                          </th>
                        )}
                        {preguntaSeleccionada.respuesta.tabla[0].valor && (
                          <th className="text-center py-2 px-2 font-semibold text-gray-700">
                            Valor
                          </th>
                        )}
                        {preguntaSeleccionada.respuesta.tabla[0].crecimiento && (
                          <th className="text-center py-2 px-2 font-semibold text-gray-700">
                            Crecimiento %
                          </th>
                        )}
                        {preguntaSeleccionada.respuesta.tabla[0].riesgo && (
                          <th className="text-center py-2 px-2 font-semibold text-gray-700">
                            Riesgo
                          </th>
                        )}
                        {preguntaSeleccionada.respuesta.tabla[0].inversion && (
                          <th className="text-center py-2 px-2 font-semibold text-gray-700">
                            Inversión
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {preguntaSeleccionada.respuesta.tabla.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-2 px-2 text-gray-800 font-medium">
                            {item.producto}
                          </td>
                          <td className="py-2 px-2 text-center text-gray-700">
                            {item.unidades}
                          </td>
                          {item.ventas && (
                            <td className="py-2 px-2 text-center text-gray-700">
                              {formatearMoneda(item.ventas)}
                            </td>
                          )}
                          {item.margen && (
                            <td className="py-2 px-2 text-center text-gray-700">
                              {formatearMoneda(item.margen)}
                            </td>
                          )}
                          {item.rotacion && (
                            <td className="py-2 px-2 text-center text-gray-700">
                              {item.rotacion}
                            </td>
                          )}
                          {item.estacion && (
                            <td className="py-2 px-2 text-center text-gray-700">
                              {item.estacion}
                            </td>
                          )}
                          {item.descuento && (
                            <td className="py-2 px-2 text-center text-gray-700">
                              {item.descuento}%
                            </td>
                          )}
                          {item.devoluciones && (
                            <td className="py-2 px-2 text-center text-gray-700">
                              {item.devoluciones}
                            </td>
                          )}
                          {item.valor && (
                            <td className="py-2 px-2 text-center text-gray-700">
                              {formatearMoneda(item.valor)}
                            </td>
                          )}
                          {item.crecimiento && (
                            <td className="py-2 px-2 text-center text-gray-700">
                              {item.crecimiento}%
                            </td>
                          )}
                          {item.riesgo && (
                            <td className="py-2 px-2 text-center text-gray-700">
                              <span className={`px-2 py-1 rounded text-xs ${
                                item.riesgo === 'Alto' ? 'bg-red-100 text-red-800' :
                                item.riesgo === 'Medio' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {item.riesgo}
                              </span>
                            </td>
                          )}
                          {item.inversion && (
                            <td className="py-2 px-2 text-center text-gray-700">
                              {formatearMoneda(item.inversion)}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer del modal */}
            <div className="bg-gray-50 px-6 py-4 rounded-b-xl flex justify-end">
              <button
                onClick={cerrarModal}
                className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PreguntasProductos
