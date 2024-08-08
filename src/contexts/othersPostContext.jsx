import React, { createContext, useReducer } from "react";
import reducer from "../reducers/userPostReducer";
import Data from '../dataFiles/DataOfPosts.json'






export const OtherUserPostContext = createContext();


const UserPostProvider = ({ children }) => {
  const initialState = {
    userPost : Data ,
    savedPosts : [] ,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const saveMyPost = ( x) => {
    // console.log(x);
    dispatch({ type : 'SAVE_MY_POST' , payload : {
        pay1 : x ,
    }})
  }

  const deleteSavedPost = (x) => {
    // console.log(x);
    dispatch({ type : 'DELETE_MY_POST' , payload : {
        pay1 : x ,
    }})
  }

  return (
    <OtherUserPostContext.Provider
      value={{
        state: state,
        saveMyPost : saveMyPost ,
        deleteSavedPost : deleteSavedPost ,
      }}
    >
      {children}
    </OtherUserPostContext.Provider>
  );
};

export default UserPostProvider;
