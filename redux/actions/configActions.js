export const addCity = (_city) => {
    return {
       type: "addcity",
       payload: _city
     }
 }
 export const removeCity = () => {
    return {
       type: "removecity",
       payload: ''
     }
 }