# 🚀 Instrucciones de Instalación - NegocIA Prototipo

## 📦 Instalación de Dependencias

### 1. Instalar todas las dependencias
```bash
npm install
```

### 2. Verificar que Tailwind CSS esté funcionando
```bash
npm run dev
```

## ✅ Archivos de Configuración Creados

- **`tailwind.config.js`** - Configuración de Tailwind CSS
- **`postcss.config.js`** - Configuración de PostCSS
- **`components.json`** - Configuración de Shadcn/ui
- **`src/lib/utils.js`** - Utilidades para Shadcn/ui
- **`package.json`** - Actualizado con dependencias necesarias

## 🎨 Próximos Pasos

### 1. Instalar React Router
```bash
npm install react-router-dom
```

### 2. Instalar Jotai
```bash
npm install jotai
```

### 3. Inicializar Shadcn/ui
```bash
npx shadcn@latest init
```

## 🔍 Verificación

Para verificar que Tailwind CSS esté funcionando:

1. Abre la aplicación en el navegador
2. Inspecciona el elemento del título
3. Deberías ver clases de Tailwind aplicadas

## 🚨 Solución de Problemas

Si hay algún error:
1. Eliminar `node_modules` y `package-lock.json`
2. Ejecutar `npm install` nuevamente
3. Verificar que todos los archivos de configuración estén presentes

## 📝 Notas

- Los archivos de configuración ya están creados manualmente
- No es necesario ejecutar `npx tailwindcss init`
- Tailwind CSS está configurado con colores personalizados para NegocIA 