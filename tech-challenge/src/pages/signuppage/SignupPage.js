import React from 'react'
import { InputField } from '../../components/InputField'
import { useHistory } from "react-router-dom";
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)
export const SignupPage = () => {
  const history = useHistory()
  const passwordInputRef = React.useRef()
  const [userData, setUserData] = React.useState({
    username:'',
    email:'',
    password:''
  })
  const [error, setError] = React.useState(false)
  const handleSignupChange= (e) => {
    setError(false)
    const {name, value} = e.target
    setUserData({...userData, [name]: value})
  }

  const handleSignup = (e) => {
    e.preventDefault()
    const {username, email, password} = userData
    if(username && email && password) {
      const passwordCurrentValue = passwordInputRef.current.value
      const hashedPassword = bcrypt.hashSync(passwordCurrentValue, `${salt}`) // hash created previously created upon sign up
      localStorage.setItem('username',JSON.stringify(username))
      localStorage.setItem('email',JSON.stringify(email))
      localStorage.setItem('password',JSON.stringify(hashedPassword))
      history.push('/')
    } else {
      setError(true)
    }
  }
  return (
    <div className='login-component'>
        <h2>Signup Page</h2>
        <div className='login-form-wrapper'>
            <form onSubmit={handleSignup}>
                <InputField name='username' onChange={handleSignupChange} legend={'Username'} type='text' placeholder='Enter Username'/>
                <InputField name='email' onChange={handleSignupChange} legend={'Email'} type='email' placeholder='Enter Email Address'/>
                <div className='password-field'>
                  <legend>Password</legend>
                  <input name='password' onChange={handleSignupChange} type='password' placeholder='Enter Password' ref={passwordInputRef}/>
                </div>
                <button>Sign Up</button>
            </form>
        </div>
        {error && <p style={{color:'red'}}>Fields are empty</p>}
        <p>Already registered? <span className='link' onClick={()=>history.push('/')}>...Sign in</span></p>
    </div>
  )
}
