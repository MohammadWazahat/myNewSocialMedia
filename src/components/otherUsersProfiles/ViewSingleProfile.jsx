import React, { useContext } from "react";
import { OthersProfileContext } from "../../contexts/othersProfileContext";

const ViewSingleProfile = () => {
  const { viewData } = useContext(OthersProfileContext);
  // console.log(viewData);
  return (
    <div className="bdr m-2 p-2 ">
      <div className="bdr m-2 p-2">{viewData.name}</div>
      <div className="bdr flex justify-between m-2 p-2">
      <div className="bdr m-2 p-2">
            <img className="bdr h-12 w-12" src={viewData.profile_pic} alt="" />
          </div>
        <div className="bdr flex justify-between m-2 p-2">
          <div className="bdr m-2 p-2">no of post : {viewData.no_of_posts}</div>
          <div className="bdr m-2 p-2">followers : {viewData.followers}</div>
          <div className="bdr m-2 p-2">following : {viewData.following}</div>
        </div>
      </div>
      <div className="bdr m-2 p-2">{viewData.username}</div>
      <div className="bdr m-2 p-2">bio data : {viewData.bio_data}</div>
      <div className="bdr m-2 p-2">hash tags</div>
      <div className="bdr m-2 p-2">{viewData.job_title}</div>
      <div className="bdr m-2 p-2">follow button</div>
      <div className="bdr m-2 p-2">see my posts</div>
      {
        viewData.post_pic.map((item,index)=>{
            return   <div className="bdr m-2 p-2" key={index }>
            <img className="bdr h-48 w-48" src={item} alt="" />
          </div>
        })
      }
    </div>
  );
};

export default ViewSingleProfile;
