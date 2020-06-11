
const initialState = {
    currentUnitRoute: '/imperial'
}

const routeReducer = (state = initialState, action) => {
    if (action.type === 'SET_UNITS') {
        return {
            ...state,
            currentUnitRoute: action.payload
        }
    }
    return state;
}

export default routeReducer;