export const selectPlan = (_data) => {
    return {
       type: "selectplan",
       payload: _data
     }
 }
 export const clearPlan = () => {
    return {
       type: "clearplan",
       payload: ''
     }
 }