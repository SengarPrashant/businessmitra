import axios from 'axios';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();

export async function generateOrder(_customerObj) {
   let res={isSuccess:true,status:200, data:''};
   try {
     let result= await axios.post(`${publicRuntimeConfig.apiBaseUrl}/Common/GenerateOrder`,_customerObj);
     res.status = await result.status;
     if(res.status===200){
        res.data=await result.data
     }
     else{
        res.isSuccess=false;
        res.data=await result.statusText;
     }
   }
   catch (err) {
      res.isSuccess=false;
      res.status=-1;
      res.data='Application error'
   }
   return res;
}