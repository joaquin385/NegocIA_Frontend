import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { atom } from 'jotai'
import { Button } from './components/ui/button'

// Estado global con Jotai
const counterAtom = atom(0)

function Home() {
  const [count, setCount] = useAtom(counterAtom)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-900 mb-8 text-center">
          🚀 NegocIA - Prototipo Funcionando
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
            Estado Global con Jotai
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <Button 
              onClick={() => setCount(count - 1)}
              variant="outline"
              className="text-lg px-6 py-2"
            >
              -
            </Button>
            <span className="text-3xl font-bold text-primary-600 min-w-[60px] text-center">
              {count}
            </span>
            <Button 
              onClick={() => setCount(count + 1)}
              className="text-lg px-6 py-2"
            >
              +
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
            Componentes shadcn/ui
          </h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="default">Botón Principal</Button>
            <Button variant="secondary">Botón Secundario</Button>
            <Button variant="outline">Botón Outline</Button>
            <Button variant="ghost">Botón Ghost</Button>
            <Button variant="destructive">Botón Destructivo</Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
            Navegación con React Router
          </h2>
          <div className="flex gap-4">
            <Link to="/about">
              <Button variant="outline">Ir a About</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Ir a Contact</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary-900 mb-8 text-center">
          📖 Acerca de NegocIA
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-secondary-700 mb-4">
            Esta es una página de ejemplo que demuestra que React Router está funcionando correctamente.
          </p>
          <Link to="/">
            <Button>Volver al Inicio</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-900 mb-8 text-center">
          📞 Contacto
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-secondary-700 mb-4">
            Página de contacto de ejemplo. React Router está funcionando perfectamente.
          </p>
          <Link to="/">
            <Button>Volver al Inicio</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
