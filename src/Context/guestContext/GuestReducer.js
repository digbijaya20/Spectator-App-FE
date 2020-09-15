import {
    TOGGLE_FILTER,
    ADD_GUEST,
    REMOVE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT,
} from '../types';

export default (state, { type, payload }) => {

    switch (type) {
        //---------------------------Add Guest------------------------//
        case ADD_GUEST:
            return {
                ...state,
                guests: [...state.guests, payload]
            }
        //---------------------------Remove Guest------------------------//
        case REMOVE_GUEST:
            return {
                ...state,
                guests: state.guests.filter(guest => guest.id !== payload)
            }
        //---------------------------Update IsconfirmedGuest------------------------//

        case UPDATE_GUEST:
            return {
                ...state,
                guests: state.guests.map(guest => guest.id === payload.id ? payload : guest)
            }
        
        //---------------------------Edit Guest------------------------//
        
        case EDIT_GUEST:
            return{
                ...state,
                editAble: payload
            }

        //---------------------------Clear Edit------------------------//

        case CLEAR_EDIT:
            return{
                ...state,
                editAble: null,
            }

        //---------------------------Toggle filter------------------------//
        case TOGGLE_FILTER:
            return {
                ...state,
                filterGuest: !state.filterGuest
            }
        default:
            return state
    }
}