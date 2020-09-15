import { Link } from 'react-router-dom'
import React from 'react'

const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <form >
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="password" placeholder="Password" />
                <input type="submit" name="" value="Sign Up" className="btn" />
            </form>
            <div className="question">
                
                <p>Don't have an account? {" "} <Link to ='/register'>Sign Up</Link> </p>
            </div>
        </div>
    )
}

export default Login
