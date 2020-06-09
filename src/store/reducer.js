import config from '../config';

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
            inches: 0,
        },
        weight: {
            pounds: 0
        }
    },
    activity: 0,
    goal: 0,
}

const FEETtoIN = a => a * 12;
// const totalMHEIGHTval = (feet, inches) => {return  Number(inches) + FEETtoIN(Number(feet))} //inches + feets(into inches)

const reducer = (state = initialState, action) => {
    if (action.type === 'SET_AGE') {
        return {
            ...state,
            age: Number(action.payload)
        }
    } else if (action.type === 'SET_GENDER') {
        return {
            ...state,
            gender: action.payload
        }
    } else if (action.type === 'SET_ACTIVITY') {
        return {
            ...state,
            activity: Number(action.payload)
        }
    } else if (action.type === 'SET_GOAL') {
        return {
            ...state,
            goal: Number(action.payload)
        }
    } else if (action.type === 'SET_M_UNIT_HEIGHT') {
        let obj = { ...state };
        obj.MUnit.height.centimeters = Number(action.payload);
         obj.IUnit.height.inches = global.config.CMtoIN(Number(action.payload));
        return obj;
    } else if (action.type === 'SET_M_UNIT_WEIGHT') {
        let obj = { ...state };
        obj.MUnit.weight.kilograms = Number(action.payload);
         obj.IUnit.weight.pounds = global.config.KGtoLBS(Number(action.payload));
        return obj;
    } else if (action.type === 'SET_I_UNIT_HEIGHT') { //inch
        let obj = { ...state };
        obj.IUnit.height.inches = Number(action.payload);
         obj.MUnit.height.centimeters = global.config.INtoCM(Number(action.payload));
        return obj;
    } else if (action.type === 'SET_I_UNIT_WEIGHT') {
        let obj = { ...state };
        obj.IUnit.weight.pounds = Number(action.payload);
         obj.MUnit.weight.kilograms = global.config.LBStoKG(Number(action.payload));
        return obj;
    }
    return state;
}

export default reducer;