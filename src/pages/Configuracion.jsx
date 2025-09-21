import { useState } from 'react'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'
import { useAtom } from 'jotai'

const Configuracion = () => {
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)
  
  // Estados para las configuraciones
  const [configuraciones, setConfiguraciones] = useState({
    // Configuración General
    nombreEmpresa: 'Librería Central',
    moneda: 'USD',
    zonaHoraria: 'America/Mexico_City',
    idioma: 'es',
    tema: 'claro',
    
    // Configuración de Datos
    frecuenciaActualizacion: 'diaria',
    retencionDatos: '2',
    backupAutomatico: true,
    compresionDatos: true,
    
    // Configuración de Alertas
    alertasEmail: true,
    alertasSMS: false,
    umbralVentas: '80',
    umbralStock: '10',
    notificacionesPush: true,
    
    // Configuración de Reportes
    formatoReporte: 'PDF',
    envioAutomatico: false,
    horarioReporte: '09:00',
    diasReporte: ['lunes', 'viernes'],
    
    // Configuración de Integraciones
    apiActiva: true,
    webhookUrl: 'https://api.libreria-central.com/webhook',
    integracionCRM: true,
    sincronizacionTiempoReal: false
  })

  const [configuracionActiva, setConfiguracionActiva] = useState('general')

  const handleInputChange = (categoria, campo, valor) => {
    setConfiguraciones(prev => ({
      ...prev,
      [campo]: valor
    }))
  }

  const guardarConfiguracion = () => {
    // Simular guardado
    alert('Configuración guardada exitosamente')
  }

  const resetearConfiguracion = () => {
    if (confirm('¿Estás seguro de que quieres resetear todas las configuraciones?')) {
      // Resetear a valores por defecto
      setConfiguraciones({
        nombreEmpresa: 'Librería Central',
        moneda: 'USD',
        zonaHoraria: 'America/Mexico_City',
        idioma: 'es',
        tema: 'claro',
        frecuenciaActualizacion: 'diaria',
        retencionDatos: '2',
        backupAutomatico: true,
        compresionDatos: true,
        alertasEmail: true,
        alertasSMS: false,
        umbralVentas: '80',
        umbralStock: '10',
        notificacionesPush: true,
        formatoReporte: 'PDF',
        envioAutomatico: false,
        horarioReporte: '09:00',
        diasReporte: ['lunes', 'viernes'],
        apiActiva: true,
        webhookUrl: 'https://api.libreria-central.com/webhook',
        integracionCRM: true,
        sincronizacionTiempoReal: false
      })
    }
  }

  const configuracionesMenu = [
    { id: 'general', label: 'General', icon: '⚙️' },
    { id: 'datos', label: 'Datos', icon: '📊' },
    { id: 'alertas', label: 'Alertas', icon: '🔔' },
    { id: 'reportes', label: 'Reportes', icon: '📋' },
    { id: 'integraciones', label: 'Integraciones', icon: '🔗' }
  ]

  const renderConfiguracionGeneral = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre de la Empresa
          </label>
          <input
            type="text"
            value={configuraciones.nombreEmpresa}
            onChange={(e) => handleInputChange('general', 'nombreEmpresa', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Moneda Principal
          </label>
          <select
            value={configuraciones.moneda}
            onChange={(e) => handleInputChange('general', 'moneda', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="USD">USD - Dólar Americano</option>
            <option value="MXN">MXN - Peso Mexicano</option>
            <option value="EUR">EUR - Euro</option>
            <option value="CAD">CAD - Dólar Canadiense</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zona Horaria
          </label>
          <select
            value={configuraciones.zonaHoraria}
            onChange={(e) => handleInputChange('general', 'zonaHoraria', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="America/Mexico_City">México (GMT-6)</option>
            <option value="America/New_York">Nueva York (GMT-5)</option>
            <option value="Europe/Madrid">Madrid (GMT+1)</option>
            <option value="America/Los_Angeles">Los Ángeles (GMT-8)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Idioma de la Interfaz
          </label>
          <select
            value={configuraciones.idioma}
            onChange={(e) => handleInputChange('general', 'idioma', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="pt">Português</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tema de la Interfaz
          </label>
          <select
            value={configuraciones.tema}
            onChange={(e) => handleInputChange('general', 'tema', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="claro">Claro</option>
            <option value="oscuro">Oscuro</option>
            <option value="auto">Automático</option>
          </select>
        </div>
      </div>
    </div>
  )

  const renderConfiguracionDatos = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Frecuencia de Actualización
          </label>
          <select
            value={configuraciones.frecuenciaActualizacion}
            onChange={(e) => handleInputChange('datos', 'frecuenciaActualizacion', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="tiempo-real">Tiempo Real</option>
            <option value="cada-15min">Cada 15 minutos</option>
            <option value="cada-hora">Cada hora</option>
            <option value="diaria">Diaria</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Retención de Datos (años)
          </label>
          <select
            value={configuraciones.retencionDatos}
            onChange={(e) => handleInputChange('datos', 'retencionDatos', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="1">1 año</option>
            <option value="2">2 años</option>
            <option value="5">5 años</option>
            <option value="10">10 años</option>
            <option value="indefinida">Indefinida</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-900">Opciones de Respaldo</h4>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={configuraciones.backupAutomatico}
              onChange={(e) => handleInputChange('datos', 'backupAutomatico', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              Respaldo Automático Diario
            </span>
          </label>
          
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={configuraciones.compresionDatos}
              onChange={(e) => handleInputChange('datos', 'compresionDatos', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              Compresión de Datos para Optimizar Almacenamiento
            </span>
          </label>
        </div>
      </div>
    </div>
  )

  const renderConfiguracionAlertas = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-900">Canales de Notificación</h4>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={configuraciones.alertasEmail}
              onChange={(e) => handleInputChange('alertas', 'alertasEmail', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              Alertas por Email
            </span>
          </label>
          
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={configuraciones.alertasSMS}
              onChange={(e) => handleInputChange('alertas', 'alertasSMS', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              Alertas por SMS
            </span>
          </label>
          
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={configuraciones.notificacionesPush}
              onChange={(e) => handleInputChange('alertas', 'notificacionesPush', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              Notificaciones Push
            </span>
          </label>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Umbral de Ventas (% del objetivo)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={configuraciones.umbralVentas}
            onChange={(e) => handleInputChange('alertas', 'umbralVentas', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Umbral de Stock Crítico (%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={configuraciones.umbralStock}
            onChange={(e) => handleInputChange('alertas', 'umbralStock', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  )

  const renderConfiguracionReportes = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Formato de Reporte
          </label>
          <select
            value={configuraciones.formatoReporte}
            onChange={(e) => handleInputChange('reportes', 'formatoReporte', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="PDF">PDF</option>
            <option value="Excel">Excel</option>
            <option value="CSV">CSV</option>
            <option value="JSON">JSON</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Horario de Generación
          </label>
          <input
            type="time"
            value={configuraciones.horarioReporte}
            onChange={(e) => handleInputChange('reportes', 'horarioReporte', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={configuraciones.envioAutomatico}
            onChange={(e) => handleInputChange('reportes', 'envioAutomatico', e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-3 text-sm font-medium text-gray-700">
            Envío Automático de Reportes
          </span>
        </label>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Días de Generación
          </label>
          <div className="flex flex-wrap gap-2">
            {['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'].map(dia => (
              <label key={dia} className="flex items-center">
                <input
                  type="checkbox"
                  checked={configuraciones.diasReporte.includes(dia)}
                  onChange={(e) => {
                    const dias = e.target.checked 
                      ? [...configuraciones.diasReporte, dia]
                      : configuraciones.diasReporte.filter(d => d !== dia)
                    handleInputChange('reportes', 'diasReporte', dias)
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700 capitalize">{dia}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderConfiguracionIntegraciones = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-900">Estado de Integraciones</h4>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={configuraciones.apiActiva}
              onChange={(e) => handleInputChange('integraciones', 'apiActiva', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              API REST Activa
            </span>
          </label>
          
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={configuraciones.integracionCRM}
              onChange={(e) => handleInputChange('integraciones', 'integracionCRM', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              Integración con CRM
            </span>
          </label>
          
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={configuraciones.sincronizacionTiempoReal}
              onChange={(e) => handleInputChange('integraciones', 'sincronizacionTiempoReal', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              Sincronización en Tiempo Real
            </span>
          </label>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          URL del Webhook
        </label>
        <input
          type="url"
          value={configuraciones.webhookUrl}
          onChange={(e) => handleInputChange('integraciones', 'webhookUrl', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="https://api.ejemplo.com/webhook"
        />
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h5 className="text-sm font-medium text-blue-900 mb-2">Información de la API</h5>
        <div className="text-sm text-blue-800 space-y-1">
          <p><strong>Endpoint Base:</strong> https://api.libreria-central.com/v1</p>
          <p><strong>Versión:</strong> 1.2.3</p>
          <p><strong>Documentación:</strong> https://docs.libreria-central.com</p>
        </div>
      </div>
    </div>
  )

  const renderConfiguracionActiva = () => {
    switch (configuracionActiva) {
      case 'general':
        return renderConfiguracionGeneral()
      case 'datos':
        return renderConfiguracionDatos()
      case 'alertas':
        return renderConfiguracionAlertas()
      case 'reportes':
        return renderConfiguracionReportes()
      case 'integraciones':
        return renderConfiguracionIntegraciones()
      default:
        return renderConfiguracionGeneral()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Sidebar de ayuda */}
      <ExpandableSidebar 
        title="Ayuda educativa - Configuración" 
        iconPosition="left"
      >
        <div className="space-y-5">
          <div className="bg-slate-50 rounded-lg p-4">
            <h3 className="text-base font-semibold text-slate-900 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Configuración del Sistema
            </h3>
            <p className="text-blue-800 text-xs">
              Personaliza todos los aspectos de tu sistema de análisis empresarial.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Secciones Disponibles</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Configuración General</li>
              <li>• Gestión de Datos</li>
              <li>• Sistema de Alertas</li>
              <li>• Generación de Reportes</li>
              <li>• Integraciones API</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Consejos</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Guarda los cambios antes de salir</li>
              <li>• Configura alertas según tus necesidades</li>
              <li>• Revisa las integraciones regularmente</li>
            </ul>
          </div>
        </div>
      </ExpandableSidebar>

      {/* Contenido principal */}
      <div className={`
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'mr-[30%]' : 'mr-1'}
        p-6
      `}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                    Configuración del Sistema
                  </h1>
                  <p className="text-gray-500 text-sm">Personaliza todos los aspectos de tu plataforma de análisis</p>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={resetearConfiguracion}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                >
                  Resetear
                </button>
                <button
                  onClick={guardarConfiguracion}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                >
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>

          {/* Menú de configuraciones */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 mb-8">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              {configuracionesMenu.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setConfiguracionActiva(item.id)}
                  className={`flex-1 flex items-center justify-center px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    configuracionActiva === item.id
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contenido de configuración activa */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {configuracionesMenu.find(item => item.id === configuracionActiva)?.icon} {' '}
                {configuracionesMenu.find(item => item.id === configuracionActiva)?.label}
              </h2>
              <p className="text-gray-600 text-sm">
                {configuracionActiva === 'general' && 'Configura los aspectos generales del sistema y la interfaz de usuario.'}
                {configuracionActiva === 'datos' && 'Gestiona la actualización, retención y respaldo de datos.'}
                {configuracionActiva === 'alertas' && 'Configura las notificaciones y umbrales de alerta.'}
                {configuracionActiva === 'reportes' && 'Personaliza la generación y envío de reportes automáticos.'}
                {configuracionActiva === 'integraciones' && 'Administra las integraciones con sistemas externos y APIs.'}
              </p>
            </div>
            
            {renderConfiguracionActiva()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Configuracion
