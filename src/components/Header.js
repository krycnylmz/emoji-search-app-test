import React from 'react'

function Header() {
  return (
    <div className="flex flex-row p-4  text-white justify-center bg-gradient-to-r from-rose-800 via-violet-900 to-pink-500">
      <img
        src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
        width="32"
        height="32"
        alt="emoji cat smiling"
      />
      <h1 className="text-3xl mx-4">Emoji Search</h1>
      <img
        src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
        width="32"
        height="32"
        alt="emoji cat cute"
      />
    </div>
  )
}

export default Header