import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
//import AuthState from '../../Context/authContext/AuthState'
import AuthCotext from '../../Context/authContext/authContext'

const Register = (props) => {
    const { registerUser, userAuth, errors } = useContext(AuthCotext)
    const [user, setUser] = useState({ name: '', email: '', password: '', password2:'', })
    const { name, email, password, password2 } = user;

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    const submit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            console.log("Password doesn't match!! ")
        } else {
            registerUser(name, email, password)
        }

    }


    return (
        <div className="register">
            <h1>Sign Up</h1>
            <form onSubmit={submit}>
                <input type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleChange}
                />

                <input type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                />
                <input type="text"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                />

                <input type="text"
                    name="password2"
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={handleChange}
                />

                <input type="submit"
                    name=""
                    value="Sign Up"
                    className="btn"

                />
            </form>
            <div className="question">
                {errors !== null && <button className="danger" type="button">
                    {errors.msg ? errors.msg : errors.error[0].msg}
                    <span>X</span></button>}

                <p>Already have an account? {" "} <Link to='/login'>Login</Link> </p>
            </div>
        </div>
    )
}

export default Register
