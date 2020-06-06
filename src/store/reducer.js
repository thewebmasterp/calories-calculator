const initialState = {
    age: 0,
    gender: 'female',
    MUnit: { //Metric Units
        height: {
            centimeters: 0
        },
        weight: {
            kilograms: 0
        }
    },
    IUnit: { //Imperial Units
        height: {
            feet: 0,
            inches: 0,
        },
        weight: {
            pounds: 0
        }
    },
    activity: 0,
    goal: 0,
}

const reducer = (state = initialState, action) => {
    if (action.type === 'SET_AGE') {
        return {
            ...state,
            age: action.payload
        }
    } else if (action.type === 'SET_GENDER') {
        return {
            ...state,
            gender: action.payload
        }
    } else if (action.type === 'SET_ACTIVITY') {
        return {
            ...state,
            activity: action.payload
        }
    } else if (action.type === 'SET_GOAL') {
        return {
            ...state,
            goal: action.payload
        }
    } else if (action.type === 'SET_M_UNIT_HEIGHT') {
        let obj = { ...state };
        obj.MUnit.height.centimeters = action.payload;
        return obj;
    } else if (action.type === 'SET_M_UNIT_WEIGHT') {
        let obj = { ...state };
        obj.MUnit.weight.kilograms = action.payload;
        return obj;
    } else if (action.type === 'SET_I_UNIT_HEIGHT') {
        let obj = { ...state };
        obj.IUnit.height.feet = action.payload.feet;
        obj.IUnit.height.inches = action.payload.inches;
        return obj;
    } else if (action.type === 'SET_I_UNIT_WEIGHT') {
        let obj = { ...state };
        obj.IUnit.weight.pounds = action.payload;
        return obj;
    }
    return state;
}

export default reducer;