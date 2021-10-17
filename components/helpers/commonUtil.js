export function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

export const registrationSteps={basicDetail:'basic', payment:'payment'}
export const _RzPayCheckoutScriptUrl ="https://checkout.razorpay.com/v1/checkout.js"
// export const config={
// 	_RzPayCheckoutScriptUrl:'https://checkout.razorpay.com/v1/checkout.js',
// 	logoUrl: 'http://localhost:1337/logo.svg',
// 	// messages
// 	RPayName:"Baijoo",
// 	RPayDescription:"Thank you for choosing our service",
// 	RPayLoadFailed:'Razorpay SDK failed to load. Are you online?',
// }