import React, { useState } from 'react'

function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState(null)

  const viewLogin = (status) => {
    setError(null)
    setIsLogin(true)
  }


  return (
    <div className='auth-container'>
      <div className='auth-container-box'>
      <form>
        <h2>{isLogin ? 'Please log in' : 'Please sign up'}</h2>
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        {isLogin && <input type="password" placeholder='confirm password'/>}
        <input type="submit" className='create'/>
        {error && <p>{error}</p>}
      </form>
      <div className='auth-options'>
        <button onClick={() => viewLogin(false)}>Sign Up</button>
        <button onClick={() => viewLogin(true)}>Log In</button>
      </div>
      </div>
    </div>
  )
}

export default Auth