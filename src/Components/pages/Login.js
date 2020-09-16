import { Link } from 'react-router-dom'
import React, {useContext, useState} from 'react'
import AuthCotext from '../../Context/authContext/authContext'

const Login = () => {
    const {loginUser, userAuth, errors} = useContext(AuthCotext)
    const [ user, setUser ] = useState({email: "", password: ""})

        const {email, password} = user;

        const handleChange = (e) =>{
            setUser({
                ...user, 
                [e.target.name] : e.target.value
            })
        }

        const submit = (e) =>{
            e.preventDefault()
           loginUser(email,password)
        }
    return (
        <div className="login">
            <h1>Login</h1>
            <form  onSubmit={submit} >
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
                <input type="text" name="password" placeholder="Password" value={password} onChange={handleChange}/>
                <input type="submit" name="" value="Login" className="btn" />
            </form>
            <div className="question">
            {errors !== null && <button className="danger">
                    {errors.msg ? errors.msg :errors.error[0].msg}
                    <span>X</span></button>}
                
                <p>Don't have an account? {" "} <Link to ='/register'>Sign Up</Link> </p>
            </div>
        </div>
    )
}

export default Login
