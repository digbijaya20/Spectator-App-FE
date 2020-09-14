import React, {useReducer} from 'react'
import GuestContext from './GuestContext';
import GuestReducer from './GuestReducer';

const GuestState = (props) => {
    const initialState = {
        guests: [
            {
                id:1,
                name:"ditu",
                phone:73773737373,
                dietary:"Non-Veg",
                iscomfirmed:true
            },
            {
                id:2,
                name:"ditu",
                phone:73773737373,
                dietary:"Non-Veg",
                iscomfirmed:true
            },
            {
                id:3,
                name:"ditu",
                phone:7377373,
                dietary:"Non-Veg",
                iscomfirmed:false
            },
        ]
    }
const [state, dispatch] = useReducer(GuestReducer, initialState)
    return (
        <GuestContext.Provider
        value = {{guests: state.guests}}
        >
            {props.children}
        </GuestContext.Provider>
    )
}

export default GuestState;
