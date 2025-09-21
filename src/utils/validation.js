/**
 * Utilidades de validación y sanitización para seguridad
 * Previene ataques XSS y validación de entrada
 */

/**
 * Valida que una fecha esté en un rango razonable
 * @param {string} dateString - Fecha en formato ISO
 * @returns {boolean} - True si la fecha es válida
 */
export const validateDate = (dateString) => {
  if (!dateString || typeof dateString !== 'string') return false
  
  const date = new Date(dateString)
  const now = new Date()
  const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
  const oneYearFromNow = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())
  
  return date >= oneYearAgo && date <= oneYearFromNow && !isNaN(date.getTime())
}

/**
 * Sanitiza texto para prevenir XSS
 * @param {string} text - Texto a sanitizar
 * @param {number} maxLength - Longitud máxima permitida
 * @returns {string} - Texto sanitizado
 */
export const sanitizeText = (text, maxLength = 100) => {
  if (typeof text !== 'string') return ''
  
  return text
    .trim()
    .replace(/[<>\"'&]/g, (match) => {
      const escapeMap = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      }
      return escapeMap[match]
    })
    .substring(0, maxLength)
}

/**
 * Valida que una categoría esté en la lista de categorías válidas
 * @param {string} category - Categoría a validar
 * @param {string[]} validCategories - Lista de categorías válidas
 * @returns {string} - Categoría válida o la primera de la lista
 */
export const validateCategory = (category, validCategories) => {
  if (!category || !Array.isArray(validCategories) || validCategories.length === 0) {
    return validCategories[0] || ''
  }
  
  return validCategories.includes(category) ? category : validCategories[0]
}

/**
 * Valida parámetros de URL contra una lista blanca
 * @param {string} param - Parámetro a validar
 * @param {string[]} allowedValues - Valores permitidos
 * @param {string} defaultValue - Valor por defecto si no es válido
 * @returns {string} - Parámetro validado
 */
export const validateUrlParam = (param, allowedValues, defaultValue = '') => {
  if (!param || typeof param !== 'string') return defaultValue
  
  const sanitizedParam = sanitizeText(param, 50)
  return allowedValues.includes(sanitizedParam) ? sanitizedParam : defaultValue
}

/**
 * Valida formato de email básico
 * @param {string} email - Email a validar
 * @returns {boolean} - True si el formato es válido
 */
export const validateEmail = (email) => {
  if (!email || typeof email !== 'string') return false
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim())
}

/**
 * Valida que un número esté en un rango específico
 * @param {number} value - Valor a validar
 * @param {number} min - Valor mínimo
 * @param {number} max - Valor máximo
 * @returns {boolean} - True si está en el rango
 */
export const validateNumberRange = (value, min, max) => {
  const num = Number(value)
  return !isNaN(num) && num >= min && num <= max
}

/**
 * Sanitiza HTML escapando caracteres especiales
 * @param {string} html - HTML a sanitizar
 * @returns {string} - HTML sanitizado
 */
export const sanitizeHTML = (html) => {
  if (!html || typeof html !== 'string') return ''
  
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Valida que una URL sea segura (solo HTTP/HTTPS)
 * @param {string} url - URL a validar
 * @returns {boolean} - True si la URL es segura
 */
export const validateSecureUrl = (url) => {
  if (!url || typeof url !== 'string') return false
  
  try {
    const parsedUrl = new URL(url)
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:'
  } catch {
    return false
  }
}

/**
 * Lista de dimensiones válidas para validación de rutas
 */
export const VALID_DIMENSIONS = [
  'ventas',
  'tickets', 
  'clientes',
  'productos',
  'proveedores',
  'inventario',
  'finanzas'
]

/**
 * Lista de categorías válidas para productos
 */
export const VALID_PRODUCT_CATEGORIES = [
  'Libros',
  'Textos Académicos',
  'Papelería',
  'Arte',
  'Oficina',
  'Electrónicos',
  'Referencias',
  'Literatura',
  'Revistas'
]
