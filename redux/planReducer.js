const initialstate={
    selected:false,
    planData:{},
}

export const planReducer=(state=initialstate,action)=> {
    switch (action.type) {
        case 'selectplan':
            return {selected : true, planData:action.payload};
        case 'clearplan':
            return {selected : false, planData:{}}
        default:
            return state
    }
}
