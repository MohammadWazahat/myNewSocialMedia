import React, { useContext } from "react";
// import Data from "../../dataFiles/DataOfPosts.json";
import SingleUser from "./SingleUser";
import { OtherUserPostContext } from "../../contexts/othersPostContext";

const Home = () => {
  // console.log(Data)
 const {state} = useContext(OtherUserPostContext);
//  console.log(state.userPost)
 const userPostData = state.userPost ; 
  return (
    <div>
     
      <div>logo</div>
      <div>Profile pics of users</div>
      <div>posts of users</div>
      <div>
        {userPostData.map((item, index) => {
          return <SingleUser key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
