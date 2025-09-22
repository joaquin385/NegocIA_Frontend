import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'jotai'
import Navigation from './components/Navigation'
import SecondaryNavigation from './components/SecondaryNavigation'
import PanelGeneral from './pages/PanelGeneral'
import AnalisisDimension from './pages/AnalisisDimension'
import CargaDatos from './pages/CargaDatos'
import Configuracion from './pages/Configuracion'
import BotonFeedback from './components/BotonFeedback'

function App() {
  return (
    <Provider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <SecondaryNavigation />
          <main>
            <Routes>
              {/* Ruta por defecto - Panel General */}
              <Route path="/" element={<PanelGeneral />} />
              
              {/* Rutas de análisis por dimensión */}
              <Route path="/analisis-dimension" element={<Navigate to="/analisis-dimension/ventas" replace />} />
              <Route path="/analisis-dimension/:dimension" element={<AnalisisDimension />} />
              
              {/* Ruta de carga de datos */}
              <Route path="/carga-datos" element={<CargaDatos />} />
              
              {/* Ruta de configuración */}
              <Route path="/configuracion" element={<Configuracion />} />
              
              {/* Ruta por defecto para cualquier otra ruta */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          
          {/* Botón de feedback flotante */}
          <BotonFeedback />
        </div>
      </Router>
    </Provider>
  )
}

export default App
