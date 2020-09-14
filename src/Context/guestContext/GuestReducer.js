import {
    TOGGLE_FILTER,
    ADD_GUEST,
    REMOVE_GUEST,
} from '../types';

export default(state, {type, payload}) =>{
    switch(type) {
        case ADD_GUEST:
            return{
                ...state,
                guests:[...state.guests,payload]
            }
            case REMOVE_GUEST :
                return{
                    ...state,
                    guests:state.guests.filter(guest => guest.id !== payload)
                }
        case TOGGLE_FILTER:
            return{
                ...state,
                filterGuest: !state.filterGuest
            }
            default:
                return state
    }
}