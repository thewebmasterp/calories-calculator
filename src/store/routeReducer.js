
const initialState = {
    currentMasterRoute: '/front',
    currentUnitRoute: '/imperial',
    currentSettingsRoute: '',
}

const routeReducer = (state = initialState, action) => {
    if (action.type === 'SET_UNITS') {
        return {
            ...state,
            currentUnitRoute: action.payload,
        }
    }
    if (action.type === 'SET_SETTINGS') {
        return {
            ...state,
            currentSettingsRoute: action.payload,
        }
    }
    return state;
}

export default routeReducer;