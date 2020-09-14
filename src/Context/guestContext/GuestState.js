import React, { useReducer } from 'react'
import GuestContext from './GuestContext';
import GuestReducer from './GuestReducer';
import {
    TOGGLE_FILTER,
    ADD_GUEST,
    REMOVE_GUEST,
} from '../types';

const GuestState = (props) => {
    const initialState = {
        filterGuest: false,

        guests: [
            {
                id: 1,
                name: "ditu",
                phone: 73773737373,
                dietary: "Vegan",
                isconfirmed: false
            },
            {
                id: 2,
                name: "ditu",
                phone: 73773737373,
                dietary: "Non-Veg",
                isconfirmed: true
            },
            {
                id: 3,
                name: "ditu",
                phone: 7377373,
                dietary: "Non-Veg",
                isconfirmed: false
            },
        ]
    }
    const [state, dispatch] = useReducer(GuestReducer, initialState)

    const addGuest =(guest)=>{
        guest.id = Date.now()
        guest.isconfirmed = false
        dispatch({
            type:ADD_GUEST,
        payload:guest
        })
    }
    const removeGuest = (id) =>{
        dispatch({
            type:REMOVE_GUEST,
            payload:id,
        })
    }
    const toggleFilter = () =>{
        dispatch({
            type: TOGGLE_FILTER
        }
        )
    }
    console.log(state.filterGuest)
    return (
        <GuestContext.Provider
            value={{ 
                guests: state.guests,
                addGuest,
                removeGuest,
                filterGuest: state.filterGuest,

                toggleFilter,
             }}
        >
            {props.children}
        </GuestContext.Provider>
    )
}

export default GuestState;
