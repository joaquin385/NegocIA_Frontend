import { useAtom } from 'jotai'
import { atom } from 'jotai'

// Atoms para el estado del gráfico
const agrupacionTiempoAtom = atom('hora')

const GraficoDistribucionTiempo = ({ 
  datos = [], 
  titulo = "Distribución de Tickets por Tiempo", 
  altura = "400px"
}) => {
  const [agrupacion, setAgrupacion] = useAtom(agrupacionTiempoAtom)

  // Función para generar datos de box plot por tiempo
  const generarDatosBoxPlot = (tipoAgrupacion) => {
    if (tipoAgrupacion === 'hora') {
      // Datos por hora del día (0-23) - más simple
      const horas = []
      const valores = []
      
      for (let i = 0; i < 24; i++) {
        const hora = i
        let valorBase
        
        if (hora >= 6 && hora <= 9) {
          valorBase = 800 // Mañana
        } else if (hora >= 12 && hora <= 14) {
          valorBase = 1200 // Almuerzo
        } else if (hora >= 18 && hora <= 21) {
          valorBase = 1000 // Noche
        } else if (hora >= 22 || hora <= 5) {
          valorBase = 400 // Madrugada/noche
        } else {
          valorBase = 600 // Resto del día
        }
        
        // Generar menos valores para evitar problemas
        for (let j = 0; j < 15; j++) {
          const variacion = (Math.random() - 0.5) * valorBase * 0.6
          const valor = Math.max(0, valorBase + variacion)
          
          horas.push(`${hora.toString().padStart(2, '0')}:00`)
          valores.push(valor)
        }
      }
      
      return { horas, valores }
    } else {
      // Datos por día de la semana - más simple
      const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
      const diasArray = []
      const valores = []
      
      dias.forEach((dia, index) => {
        let valorBase
        if (index >= 5) { // Sábado y Domingo
          valorBase = 900
        } else { // Días de semana
          valorBase = 1100
        }
        
        // Generar menos valores para evitar problemas
        for (let j = 0; j < 15; j++) {
          const variacion = (Math.random() - 0.5) * valorBase * 0.6
          const valor = Math.max(0, valorBase + variacion)
          
          diasArray.push(dia)
          valores.push(valor)
        }
      })
      
      return { horas: diasArray, valores }
    }
  }

  const { horas, valores } = generarDatosBoxPlot(agrupacion)

  return (
    <div className="space-y-4">
      {/* Controles */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">{titulo}</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-gray-700">Agrupación:</label>
            <select 
              className="px-3 py-1 border border-gray-300 rounded text-xs"
              value={agrupacion}
              onChange={(e) => setAgrupacion(e.target.value)}
            >
              <option value="hora">Hora del día</option>
              <option value="dia">Día de la semana</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Gráfico */}
      <div style={{ height: altura }} className="bg-transparent rounded-xl shadow-sm border border-gray-100 p-6 relative z-10">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{titulo}</h3>
            <p className="text-sm text-gray-500">Box plot - Placeholder</p>
            <p className="text-xs text-gray-400 mt-2">
              Agrupación: {agrupacion === 'hora' ? 'Hora del día' : 'Día de la semana'}
            </p>
            <p className="text-xs text-gray-400">
              Datos: {horas.length} puntos generados
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraficoDistribucionTiempo
