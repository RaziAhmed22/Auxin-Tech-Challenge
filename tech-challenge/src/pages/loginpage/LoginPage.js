import React from 'react'
import { InputField } from '../../components/InputField'
import './LoginPage.css'
import { useHistory } from "react-router-dom";
import bcrypt from 'bcryptjs'

export const LoginPage = ({ auth }) => {
    const [error, setError] = React.useState(false)
    const [credentialError, setCredentialError] = React.useState(false)
    const [loginData, setLoginData] = React.useState({
        email:'',
        password:''
    })
    const [hashedPassword, setHashedPassword] = React.useState('')
    React.useEffect(()=>{
        if(JSON.parse(localStorage.getItem('password'))){
            const hash = JSON.parse(localStorage.getItem('password'))
            setHashedPassword(hash)
        }
    },[])

    const history = useHistory()

    const handleLoginForm = (e) => {
        e.preventDefault()
        const {email, password} = loginData
        if(email && password) {
            const emailFromDatabase = JSON.parse(localStorage.getItem('email'))
            if(hashedPassword) {
                bcrypt.compare(password, hashedPassword, (err,res)=>{
                    if (email === emailFromDatabase && res) {
                        localStorage.setItem('auth', JSON.stringify(res))
                        history.push('/home')
                    } else {
                        setCredentialError(true)
                    }
                })
            } else {
                setCredentialError(true)
            }
        } else {
            setError(true)
        }
    }

    const handleLoginChange = (e) => {
        setError(false)
        setCredentialError(false)
        const {name, value} = e.target
        setLoginData({...loginData,[name]:value})
    }
// React.useEffect(()=>{
//     if() history.push('/home')
// },[auth])
  return (
    <div className='login-component'>
        <h2>Login Page</h2>
        <div className='login-form-wrapper'>
            <form onSubmit={(e)=>handleLoginForm(e)}>
                <InputField onChange={handleLoginChange} name='email' legend={'Email'} type='email' placeholder='Enter Email Address'/>
                <InputField onChange={handleLoginChange} name='password' legend={'Password'} type='password' placeholder='Enter Password'/>
                <button>Sign In</button>
            </form>
        </div>
        {error && <p style={{color:'red'}}>Fields are empty</p>}
        {credentialError && <p style={{color:'red'}}>Credentials are invalid</p>}
        <p>register? <span className='link' onClick={()=>history.push('/signup')}>...Sign up</span></p>
    </div>
  )
}
