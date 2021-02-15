const initialstate={city:''}

export const configReducer=(state=initialstate,action)=> {
    switch (action.type) {
        case 'addcity':
            return {...state,city:action.payload}
            break;
        case 'removecity':
            return {...state,city:''}
            break;
        default:
            return state
            break;
    }
}
