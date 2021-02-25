const initialstate={city:'',appText:{}}

export const configReducer=(state=initialstate,action)=> {
    switch (action.type) {
        case 'addcity':
            return {...state,city:action.payload}
            break;
        case 'removecity':
            return {...state,city:''}
            break;
        case 'appText':
            return {...state,appText:action.payload}
            break;
        default:
            return state
            break;
    }
}
