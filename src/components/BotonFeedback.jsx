import React from 'react'

const BotonFeedback = () => {
  const handleOpenSurvey = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScbVXIHZ4oQgg1nTOw_t8LqDnCI4WZqO8VvaZHfyJXg5mLpXg/viewform', '_blank')
  }

  return (
    <>
      {/* Botón flotante de feedback */}
      <button
        onClick={handleOpenSurvey}
        className="fixed top-4 right-4 z-40 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2 font-medium text-sm"
        title="Dar feedback sobre la aplicación"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
          />
        </svg>
        <span>Dar Feedback</span>
      </button>
    </>
  )
}

export default BotonFeedback
