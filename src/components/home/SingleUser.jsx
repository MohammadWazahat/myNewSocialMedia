import React, { useContext } from "react";
import { OtherUserPostContext } from "../../contexts/othersPostContext";
import CommentPost from "./CommentPost";

const SingleUser = (item) => {
  const {saveMyPost} = useContext(OtherUserPostContext);

  //   console.log(item);
  return (
    <div className="bdr m-4 p-2 my-12 flex flex-col gap-4">
      <div className="bdr flex justify-between ">
        <div className="bdr flex gap-4 ">
          <div className="bdr ">
            <img className="bdr h-12 w-12" src={item.profile_pic} alt="" />
          </div>
          <div className="bdr ">
            <div className="bdr ">{item.name} </div>
            <div className="bdr ">{item.username} </div>
          </div>
        </div>
        <div className="bdr "> three dots</div>
      </div>
      <div className="bdr ">{item.post_text} </div>
      <div className="bdr ">
        <img className="bdr h-84 w-96 " src={item.post_pic[0]} alt="" />
      </div>
      <div className="bdr flex justify-between ">
        <div className="bdr flex gap-4 ">
          <div className="bdr ">like button</div>
          <div className="bdr ">comment</div>
          <div className="bdr ">share</div>
        </div>
        <div className="bdr ">
          <button onClick={()=>saveMyPost({...item})}>savepost</button>
        </div>
      </div>
      <div className="bdr ">
      <div className="bdr ">{item.no_of_likes} likes </div>
      <div className="bdr ">hashtags :{item.tags} </div>
      </div>
      <div className="bdr ">comment column
        <CommentPost/>
      </div>
    </div>
  );
};

export default SingleUser;
