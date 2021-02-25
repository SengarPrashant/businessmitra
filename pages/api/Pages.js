import axios from 'axios';

export async function getPageData(_code) {
    let res={isSuccess:true,status:200, data:''};
    try {
      let result= await axios.get(`${process.env.API_BASE_URL}/FirmRegistration?planCode=${_code}`);
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
     let result= await axios.get(`${process.env.API_BASE_URL}/Common?pageCode=${_code}`);
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