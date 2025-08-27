# NegocIA - Guía Técnica del Prototipo

> **⚠️ IMPORTANTE: Este es un PROTOTIPO FRONTEND únicamente**
> - Solo se desarrollará la interfaz de usuario
> - Todos los datos mostrados serán simulados/mock
> - No hay backend ni base de datos real
> - Es solo para demostración y validación de diseño

## 🚀 Tecnologías Utilizadas

### Core
- **React 19** - Biblioteca de interfaz de usuario
- **Vite** - Build tool y dev server

### Routing
- **React Router v6** - Enrutamiento de páginas y navegación

### Gestión de Estado
- **Jotai** - Gestión de estado atómico y reactivo

### Estilos
- **Tailwind CSS** - Framework de CSS utility-first
- **Shadcn/ui** - Componentes de UI reutilizables
- **Radix UI** - Componentes primitivos accesibles

## 📦 Instalación de Dependencias

### 1. React Router
```bash
npm install react-router-dom
```

### 2. Jotai
```bash
npm install jotai
```

### 3. Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4. Shadcn/ui
```bash
npx shadcn@latest init
```

### 5. Radix UI (se instala automáticamente con shadcn/ui)
```bash
npm install @radix-ui/react-*
```

## 🗂️ Estructura de Carpetas Recomendada

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de Shadcn/ui
│   └── common/         # Componentes comunes
├── pages/              # Páginas de la aplicación
├── hooks/              # Custom hooks
├── stores/             # Estado global con Jotai
├── lib/                # Utilidades y configuraciones
├── styles/             # Estilos globales
└── types/              # Tipos TypeScript (si se usa)
```

## ⚙️ Configuración de Tailwind CSS

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados de la marca
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}
```

### src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🎯 Configuración de React Router

### src/App.jsx
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
```

## 🔄 Configuración de Jotai

### src/stores/index.js
```javascript
import { atom } from 'jotai';

// Estado global de la aplicación
export const userAtom = atom(null);
export const themeAtom = atom('light');
export const sidebarOpenAtom = atom(false);
```

### Uso en componentes
```jsx
import { useAtom } from 'jotai';
import { userAtom } from '../stores';

function UserProfile() {
  const [user, setUser] = useAtom(userAtom);
  
  return (
    <div>
      {user ? `Hola, ${user.name}` : 'No hay usuario'}
    </div>
  );
}
```

## 🎨 Configuración de Shadcn/ui

### components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## 📊 Datos Simulados (Mock Data)

> **💡 Estrategia para el Prototipo:**
> - Crear archivos `mockData.js` en cada carpeta relevante
> - Simular respuestas de API con datos realistas
> - Usar `setTimeout` para simular latencia de red
> - Implementar estados de carga, éxito y error

### Ejemplo de implementación:
```javascript
// src/lib/mockData.js
export const mockUsers = [
  { id: 1, name: 'Juan Pérez', email: 'juan@negocia.com', role: 'admin' },
  { id: 2, name: 'María García', email: 'maria@negocia.com', role: 'user' },
];

export const mockApiCall = (data, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
};
```

## 📱 Componentes Principales a Implementar

### Layout
- Header con navegación
- Sidebar responsive
- Footer

### Páginas
- Home/Dashboard
- Perfil de usuario
- Configuraciones
- Ayuda/Documentación

### Componentes UI
- Botones
- Formularios
- Tablas
- Modales
- Notificaciones

## 🚀 Scripts de Desarrollo

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0"
  }
}
```

## 📝 Próximos Pasos

1. ✅ Crear estructura base del proyecto
2. 🔄 Instalar dependencias
3. 🔄 Configurar Tailwind CSS
4. 🔄 Configurar React Router
5. 🔄 Configurar Jotai
6. 🔄 Configurar Shadcn/ui
7. 🔄 Crear componentes base
8. 🔄 Implementar páginas principales

## 🔗 Recursos Útiles

- [React Router Documentation](https://reactrouter.com/)
- [Jotai Documentation](https://jotai.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Documentation](https://www.radix-ui.com/) 