import React from 'react'

function Auth() {
  const isLogin = false
  return (
    <div className='auth-container'>
      <div className='auth-container-box'>
      <form>
        <h2>{isLogin ? 'Please log in' : 'Please sign up'}</h2>
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        {isLogin && <input type="password" placeholder='confirm password'/>}
        <input type="submit" className='create'/>
      </form>
      </div>
    </div>
  )
}

export default Auth