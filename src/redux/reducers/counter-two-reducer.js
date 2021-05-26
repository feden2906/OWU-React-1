import {INC_TWO, DEC_TWO, RESET_TWO} from "../action-types";

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case INC_TWO: {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        case DEC_TWO: {
            return {
                ...state,
                counter: state.counter - action.payload
            }
        }
        case RESET_TWO: {
            return {
                ...state,
                counter: 0
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;
