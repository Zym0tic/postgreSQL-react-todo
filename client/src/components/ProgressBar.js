import React from 'react'

function ProgressBar({ progress }) {
  return (
    <div className='outer-bar'>
      <div 
      className='inner-bar'
      style={{ width: `${progress}%`}}
      ></div>
    </div>
  )
}

export default ProgressBar