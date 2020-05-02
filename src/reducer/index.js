import { ActionTypes } from '../action';

const initialState = {
    array: [],
    playAgain: false,
    key:0,
    show: false,
    speed: 100,
    startTimeStamp: 0,
    endTimeStamp: 0,
    currentTimeStamp: 0,
}

export default function reducer(state= initialState, action) {    
    switch(action.type) {
        case ActionTypes.START_AGAIN:
            return {
                ...state,
                key: state.key + 1,
                array: action.data,
            };
        case ActionTypes.SET_SPEED:
            return {  
                ...state,
                speed: action.data
            };
        case ActionTypes.SET_START_TIMESTAMP:
            return {
                ...state,
                startTimeStamp: action.data,
                currentTimeStamp: action.data,
            };
        case ActionTypes.SET_END_TIMESTAMP:
            return {
                ...state,
                endTimeStamp: action.data,
            };
        case ActionTypes.CURRENT_TIMESTAMP:
            return {
                ...state,
                currentTimeStamp: action.data,
            };            
        default:
            return state;
    }
}