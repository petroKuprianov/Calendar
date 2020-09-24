const _initialState = {
    displayPop: false,
    selectedDate:{}
}

export default function dateInfo(state = _initialState,action){
    switch (action.type){
        case "SET_DISPLAY":
            return {...state, displayPop:action.payload}
        case "SET_DATE":
            return {...state,selectedDate: action.payload}
        default: 
            return state;
    }
}