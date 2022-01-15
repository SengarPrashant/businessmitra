const _config={
	_RzPayCheckoutScriptUrl:'https://checkout.razorpay.com/v1/checkout.js',
	logoUrl: 'http://localhost:1337/logo.svg',
	// messages
	RPayName:"Baijoo",
	RPayDescription:"Thank you for choosing our service",
	RPayLoadFailed:'Razorpay SDK failed to load. Are you online?'
}

const initialstate={city:'',appText:{}, configs:_config}

export const configReducer=(state=initialstate,action)=> {
    switch (action.type) {
        case 'addcity':
            return {...state,city:action.payload}
        case 'removecity':
            return {...state,city:''}
        case 'appText':
            return {...state,appText:action.payload}
        default:
            return state
    }
}
