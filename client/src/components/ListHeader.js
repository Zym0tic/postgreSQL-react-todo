import React from 'react'
import Modal from './Modal'

function ListHeader({ listName }) {

const signOut = () => {
  console.log('sign out')
}

  return (
    <div className='list-header'>
      <h1>{listName}</h1>
      <div className='button-container'>
        <button className='create'>Add New</button>
        <button className='signout' onClick={signOut}>Sign Out</button>
      </div>
      <Modal />
      </div>
  )
}

export default ListHeader