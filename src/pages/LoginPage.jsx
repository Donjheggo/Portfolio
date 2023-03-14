import React from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../api/firebase'

export const loginAction = async ({request}) => {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")

  try{
    const userData = await ({email, password})
    console.log(userData) 
  }catch(err){
    return {
      error: err.message
    }
  }
}

const LoginPage = () => {
  return (
    <div className='login-form container row h-100'>
      <div className='d-flex justify-content-center align-self-center'>
        <Form action="/login" method='POST'>
          <h3 className='signin-text pb-4'>Sign in</h3>
          <input name="email" type="email" className='email-input' placeholder='Email address' />
          <input name="password" type="password" className='password-input' placeholder='Password'/>
          <button className='signin-btn'>Sign in</button>
        </Form>
      </div>
      <AuthDetails/>
    </div>
  )
}

export default LoginPage