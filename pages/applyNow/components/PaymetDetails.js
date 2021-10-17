import React, { useState, useEffect } from 'react';
import {useSelector} from "react-redux";
import { Button } from 'react-bootstrap';
import {loadScript,_RzPayCheckoutScriptUrl} from "../../../components/helpers/commonUtil";
import { generateOrder } from "../../api/payment";

const PaymentDetails = ({ customerDetail, planData, goToBasicDetail }) => {
	const config = useSelector(state => state.config.configs);
	
     const displayRazorpay = async ()=> {
		const res = await loadScript(_RzPayCheckoutScriptUrl);
		customerDetail.planId=planData.plan.planId;
		customerDetail.planTypeId=planData.plan.id;
		if (!res) {
			alert(config.RPayLoadFailed)
			return;
		}
		generateOrder(customerDetail).then(res=>{
			console.log(res);
			const options = {
				key: res.data.razorpayKey,
				currency: res.data.currency, //'INR', // data.currency,
				amount: res.data.amount, // data.amount.toString(),
				order_id: res.data.orderId, //data.id,
				name: config.RPayName,
				description: config.RPayDescription,
				image: config.logoUrl,
				handler: function (response) {
					alert(response.razorpay_payment_id)
					alert(response.razorpay_order_id)
					alert(response.razorpay_signature)
				},
				prefill: {
					name : customerDetail.Name,
					email: customerDetail.Email,
					contact: customerDetail.Mobile
				}
			}
			const paymentObject = new window.Razorpay(options);
			paymentObject.open();
		})
	
	}

    return (
        <>
        <Button onClick={displayRazorpay}>
            Pay now
        </Button>
		<Button onClick={goToBasicDetail}>
           Back
        </Button>
        </>
    )
}

export default PaymentDetails