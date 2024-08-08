import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import ReadSinglePost from "./ReadSinglePost";
import { MyProfileContext } from "../../../contexts/myProfileContext";

const ReadPost = () => {
  const { myUser } = useContext(MyProfileContext);
  // const [myUser, setMyUser] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get("http://localhost:8005/users");
  //     setMyUser(res.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <div>i ma read post</div>
      {myUser.map((item, index) => {
        return <ReadSinglePost key={index} {...item} />;
      })}
    </div>
  );
};

export default ReadPost;
