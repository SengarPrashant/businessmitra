import axios from 'axios';

export async function getGoogleNews(query) {
    let res={isSuccess:true,status:200, data:''};
    try {
      let result= await axios.get(`https://news.google.com/rss/search?q=${query}&hl=en-IN&gl=IN&ceid=IN:en`);
      //res.status = await result.status;
     
      res.data=result;
    //   if(res.status===200){
    //      res.data=await result.data
    //   }
    //   else{
    //      res.isSuccess=false;
    //      res.data=await result.statusText;
    //   }
    }
    catch (err) {
       res.isSuccess=false;
       res.status=-1;
       res.data='Application error'
    }
    return res;
}

