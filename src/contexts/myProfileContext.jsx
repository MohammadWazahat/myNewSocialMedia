import React, { createContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/myProfileReducer";
import axios from "axios";

export const MyProfileContext = createContext();

const MyProfileProvider = ({ children }) => {
  const initialState = {
    x: 10,
    // myData : [] ,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   dispatch({type : 'FETCH_MY_POST' , payload : myUser})
  //  }, [myUser]);

  const createPost = () => {
    // console.log("i m clicked");
    // console.log(state);
  };

  const [myUser, setMyUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8005/users");
      setMyUser(res.data);
    };
    fetchData();
  }, []);

  // console.log(myUser.length);

  // console.log(state)

  return (
    <MyProfileContext.Provider
      value={{
        state: state,
        createPost: createPost,
        myUser: myUser,
      }}
    >
      {children}
    </MyProfileContext.Provider>
  );
};

export default MyProfileProvider;
