const MyReducer= (state,action)=>{
    var newData = "";
    if (action.type === "NAME") {
        newData = action.data;
      }
      return newData;
    
}
export default MyReducer;