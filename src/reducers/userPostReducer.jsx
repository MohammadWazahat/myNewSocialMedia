const userPostReducer = (state,action) => {
    
    if(action.type === 'SAVE_MY_POST'){
        // console.log(action.payload.pay1)
        return {
            ...state ,
            savedPosts : [ ...state.savedPosts , action.payload.pay1 ]
        }
    }

    if (action.type === "DELETE_MY_POST") {
        // console.log(action.payload)
        const updatedSavedPosts = state.savedPosts.filter(
          (item) => item.user_id !== action.payload.pay1
        );
        // console.log(updatedCart);
        return {
          ...state,
          savedPosts : updatedSavedPosts ,
        };
      }
 return state ;
}

export default userPostReducer
