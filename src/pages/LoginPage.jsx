import React from 'react'
import { Form, useActionData } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='login-form container row h-100'>
      <div className='d-flex justify-content-center align-self-center'>
        <Form action="/login" method='POST'>
          <p className='signin-text'>Sign in</p>
          <input name="email" type="email" className='email-input' placeholder='Email address' />
          <input name="password" type="password" className='password-input' placeholder='Password'/>
          <button className='signin-btn'>Sign</button>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage