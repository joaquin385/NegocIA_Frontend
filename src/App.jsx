import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import SecondaryNavigation from './components/SecondaryNavigation'
import PanelGeneral from './pages/PanelGeneral'
import AnalisisDimension from './pages/AnalisisDimension'
import AnalisisCross from './pages/AnalisisCross'
import CargaDatos from './pages/CargaDatos'

function App() {
  return (
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
            
            {/* Rutas de análisis cross */}
            <Route path="/analisis-cross" element={<Navigate to="/analisis-cross/productos" replace />} />
            <Route path="/analisis-cross/:dimension" element={<AnalisisCross />} />
            
            {/* Ruta de carga de datos */}
            <Route path="/carga-datos" element={<CargaDatos />} />
            
            {/* Ruta por defecto para cualquier otra ruta */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
