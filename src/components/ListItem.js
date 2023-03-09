import React from 'react'

function ListItem({value}) {

  const copyTextHandler = (emoji) => {
    navigator.clipboard.writeText(emoji);
  }

  return (
    <div className="bg-orange-100 p-4 rounded m-2 ">
      <div className="flex flex-row justify-between items-center">
        <div className="text-3xl">
          {value.symbol}
        </div>
        <div>
          <h3>
            {value.title}
          </h3>
        </div>
        <button onClick={() => copyTextHandler(value.symbol)} className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-violet-500 active:from-fuchsia-700  active:to-fuchsia-700 transition-all duration-300 ease-in-out active:bg-violet-700 text-white p-2 rounded">Click to copy emoji</button>
      </div>
    </div>
  )
}

export default ListItem