import Axios from "axios";
import React, { useReducer } from "react";
import { FAIL_LOGIN, FAIL_REGISTER, SUCCESS_LOGIN, SUCCESS_REGISTER } from "../types";
import AuthContext from './authContext';
import authReducer from './authReducer'

const AuthState = (props) => {
    const initialState ={
        userAuth: null,
        errors: null
    }
    const [state, dispatch] = useReducer(authReducer , initialState)

//Register User
    
    const registerUser = async userData =>{
        const config ={
            header: {
                'Content-Type':'application/json'
            }
        }
        try {
            const res = await Axios.post('/register', userData, config)
            dispatch({
                type:SUCCESS_REGISTER,
                payload:res.data
            })
            
        } catch (err) {
            dispatch({
                type: FAIL_REGISTER,
            payload: err.response.data
            })
        }
    }

//Login User
        
    const loginUser = async userData =>{
        const config ={
            header: {
                'Content-Type':'application/json'
            }
        }
        try {
            const res = await Axios.post('/auth', userData, config)
            dispatch({
                type:SUCCESS_LOGIN,
                payload:res.data
            })
            
        } catch (err) {
            dispatch({
                type: FAIL_LOGIN,
            payload: err.response.data
            })
        }
    }


    return(
        <AuthContext.Provider value ={{
            userAuth:state.userAuth,
            errors:state.errors,
            registerUser,
            loginUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;