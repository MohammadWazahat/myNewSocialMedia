const othersProfileReducer = (state, action) => {
  if (action.type === "ADD_TO_FOLLOWING") {
    // console.log(state)
    return {
      ...state,
      savedToFollowing: [...state.savedToFollowing, action.payload.pay1],
     
    };
  }

  if (action.type === "DELETE_FROM_FOLLOWING") {
    // console.log(action.payload)
    const updatedFollowing = state.savedToFollowing.filter(
      (item) => item.user_id !== action.payload.pay1.user_id
    );
    return {
      ...state,
      savedToFollowing: updatedFollowing,
    };
  }

  if (action.type === "FILTER_BY_SEARCH") {
    const filteredData = action.payload.pay1.filter((item) => {
      return item.name.toLowerCase().includes(action.payload.pay2.toLowerCase());
    });
    return {
      ...state,
      userProfiles: filteredData,
    };
  }

  return state;
};

export default othersProfileReducer;
