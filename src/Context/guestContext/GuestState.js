import React, { useReducer } from 'react'
import GuestContext from './GuestContext';
import GuestReducer from './GuestReducer';
import {
    TOGGLE_FILTER,
    ADD_GUEST,
    REMOVE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT,
} from '../types';

const GuestState = (props) => {
    const initialState = {
        filterGuest: false,
        editAble: null,

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

//---------------------------Add Guest------------------------//

    const addGuest =(guest)=>{
        guest.id = Date.now()
        guest.isconfirmed = false
        dispatch({
            type:ADD_GUEST,
        payload:guest
        })
    }
//-----------------------------Remove Guest------------------------//
    const removeGuest = (id) =>{
        dispatch({
            type:REMOVE_GUEST,
            payload:id,
        })
    }

//-----------------------------Update IsconfirmedGuest------------------------//

    const updateGuest = (guest) =>{
       dispatch({
           type:UPDATE_GUEST,
           payload:guest,
       })
    }
//-----------------------------Edit Guest------------------------//
    
    const editGuest = (guest) =>{
        dispatch({
            type:EDIT_GUEST,
            payload:guest,
        })
    }

//-----------------------------Clear Edit------------------------//

    const clearEdit = (guest) =>{
        dispatch({
            type: CLEAR_EDIT,
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
                filterGuest: state.filterGuest,
                editAble: state.editAble,
                addGuest,
                removeGuest,
                updateGuest,
                editGuest,
                clearEdit,
                toggleFilter,
             }}
        >
            {props.children}
        </GuestContext.Provider>
    )
}

export default GuestState;
