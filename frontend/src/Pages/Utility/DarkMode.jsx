import React from 'react'

const DarkMode = () => {
  return (
    <div className='fixed bottom-1 right-1'>
      <button
              onClick={toggleTheme}
              className="absolute top-4 right-4 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
    </div>
  )
}

export default DarkMode
