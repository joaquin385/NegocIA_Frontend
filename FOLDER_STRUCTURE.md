# Estructura de Carpetas Recomendada - NegocIA

> **⚠️ IMPORTANTE: Este es un PROTOTIPO FRONTEND únicamente**
> - Solo se desarrollará la interfaz de usuario
> - Todos los datos mostrados serán simulados/mock
> - No hay backend ni base de datos real
> - Es solo para demostración y validación de diseño

## 📁 Estructura Principal

```
Negocia-frontend/
├── public/                 # Archivos estáticos
├── src/                    # Código fuente
│   ├── components/         # Componentes reutilizables
│   ├── pages/             # Páginas de la aplicación
│   ├── hooks/             # Custom hooks
│   ├── stores/            # Estado global con Jotai
│   ├── lib/               # Utilidades y configuraciones
│   ├── styles/            # Estilos globales
│   ├── types/             # Tipos TypeScript (opcional)
│   ├── assets/            # Imágenes, iconos, etc.
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   ├── App.css            # Estilos del componente App
│   └── index.css          # Estilos globales
├── .gitignore             # Archivos a ignorar por Git
├── package.json           # Dependencias y scripts
├── vite.config.js         # Configuración de Vite
├── tailwind.config.js     # Configuración de Tailwind (futuro)
├── components.json        # Configuración de Shadcn/ui (futuro)
├── TECHNICAL_GUIDE.md     # Guía técnica del proyecto
└── FOLDER_STRUCTURE.md    # Este archivo
```

## 🧩 Detalle de Carpetas

### `/src/components/`
```
components/
├── ui/                    # Componentes de Shadcn/ui
│   ├── button.jsx
│   ├── input.jsx
│   ├── modal.jsx
│   └── ...
├── common/                # Componentes comunes reutilizables
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── Footer.jsx
│   └── ...
└── layout/                # Componentes de layout
    ├── MainLayout.jsx
    ├── AuthLayout.jsx
    └── ...
```

### `/src/pages/`
```
pages/
├── HomePage.jsx           # Página principal
├── DashboardPage.jsx      # Dashboard
├── ProfilePage.jsx        # Perfil de usuario
├── SettingsPage.jsx       # Configuraciones
├── HelpPage.jsx           # Ayuda
└── ...
```

### `/src/hooks/`
```
hooks/
├── useAuth.js             # Hook para autenticación
├── useTheme.js            # Hook para tema
├── useLocalStorage.js     # Hook para localStorage
└── ...
```

### `/src/stores/`
```
stores/
├── index.js               # Exportaciones principales
├── authStore.js           # Estado de autenticación
├── uiStore.js             # Estado de la interfaz
└── ...
```

### `/src/lib/`
```
lib/
├── utils.js               # Funciones utilitarias
├── constants.js           # Constantes de la aplicación
├── mockData.js            # Datos simulados para el prototipo
└── ...
```

### `/src/styles/`
```
styles/
├── globals.css            # Estilos globales
├── components.css         # Estilos de componentes
└── ...
```

## 🚀 Comandos para Crear la Estructura

```bash
# Crear directorios principales
mkdir -p src/components/ui
mkdir -p src/components/common
mkdir -p src/components/layout
mkdir -p src/pages
mkdir -p src/hooks
mkdir -p src/stores
mkdir -p src/lib
mkdir -p src/styles
mkdir -p src/types

# Crear archivos base (cuando estés listo)
touch src/components/ui/.gitkeep
touch src/components/common/.gitkeep
touch src/components/layout/.gitkeep
touch src/pages/.gitkeep
touch src/hooks/.gitkeep
touch src/stores/.gitkeep
touch src/lib/.gitkeep
touch src/styles/.gitkeep
touch src/types/.gitkeep
```

## 📝 Notas Importantes

- **`.gitkeep`**: Archivos vacíos que mantienen las carpetas en Git
- **Componentes UI**: Se generarán automáticamente con Shadcn/ui
- **Páginas**: Cada página debe ser un componente independiente
- **Hooks**: Reutilizables y con lógica de negocio separada
- **Stores**: Estado global organizado por funcionalidad
- **Lib**: Utilidades y configuraciones compartidas
- **Datos Simulados**: Usar `mockData.js` para simular respuestas de API
- **Sin Backend**: Este prototipo no requiere servidor ni base de datos

## 🔄 Orden de Implementación

1. Crear estructura de carpetas
2. Instalar dependencias
3. Configurar Tailwind CSS
4. Configurar React Router
5. Crear componentes base
6. Implementar páginas principales
7. Agregar estado global con Jotai
8. Implementar componentes de Shadcn/ui 