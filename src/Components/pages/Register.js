import { Link } from 'react-router-dom'
import React from 'react'

const Register = () => {
    return (
        <div className="register">
            <h1>Sign Up</h1>
            <form >
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="password" placeholder="Password" />
                <input type="text" name="password2" placeholder="Confirm Password" />
                <input type="submit" name="" value="Sign Up" className="btn" />
            </form>
            <div className="question">
                
                <p>Already have an account? {" "} <Link to ='/login'>Login</Link> </p>
            </div>
        </div>
    )
}

export default Register
