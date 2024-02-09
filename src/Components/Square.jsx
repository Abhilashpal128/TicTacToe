import React from 'react'

function Square(props) {
  return (
    <div>
      <div className='w-28 h-28 border-4 border-[#007bff] grid place-items-center' onClick={props.onClick}>
        <h1>{props.value}</h1>
      </div>
    </div>
  )
}

export default Square
