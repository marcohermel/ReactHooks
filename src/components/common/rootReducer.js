const INITIAL_STATE = { count: 0};
export default function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {    
        case 'INC':
            return { ...state, count: state.count + 1 };
        case 'DEC':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}
