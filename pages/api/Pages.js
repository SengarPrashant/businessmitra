import axios from 'axios';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();

export async function getPageData(_code) {
    let res={isSuccess:true,status:200, data:''};
    try {
      let result= await axios.get(`${process.env.API_BASE_URL}/FirmRegistration?planCode=${_code}`);
      console.log('@@@',result);
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

export async function getPageInfo(_code) {
   let res={isSuccess:true,status:200, data:''};
   try {
     let result= await axios.get(`${process.env.API_BASE_URL}/Common/GetPageInfo?pageCode=${_code}`);
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

export async function getLocationList(searchText=null, startRow=0, pageSize=100, exact=false) {
   let res={isSuccess:true,status:200, data:''};
   try {
      let query='';
      if(searchText !==null){
         query=`searchText=${searchText}`;
      }
      if(query.length>0){
         query=query+'&'+ `startRow=${startRow}&pageSize=${pageSize}&exact=${exact}`;
      }
      else{
         query=`startRow=${startRow}&pageSize=${pageSize}&exact=${exact}`;
      }

     let result= await axios.get(`${publicRuntimeConfig.apiBaseUrl}/Common/GetLocation?${query}`);
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


export async function saveCustomer(_customerObj) {
   let res={isSuccess:true,status:200, data:''};
   try {
     let result= await axios.post(`${publicRuntimeConfig.apiBaseUrl}/Common/SaveCustomer`,_customerObj);
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