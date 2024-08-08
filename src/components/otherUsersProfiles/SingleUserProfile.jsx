import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { OthersProfileContext } from "../../contexts/othersProfileContext";

const SingleUserProfile = (item) => {
  const { AddToFollowing, viewProfile ,state } =
    useContext(OthersProfileContext);

  return (
    <div className="bdr border-4 border-y-slate-800">
      <div className="bdr flex gap-4 justify-between">
        <div className="bdr flex gap-2 ">
          <div className="bdr m-2 p-2">
            <img className="bdr h-12 w-12" src={item.profile_pic} alt="" />
          </div>
          <div className="bdr ">
            <div className="bdr m-2 p-1">{item.name}</div>
            <div className="bdr m-2 p-1">{item.username}</div>
          </div>
        </div>
        <div className="bdr m-2 p-2 ">
          {/* {isFollowed ? <button>it is true</button> : <button>it is false</button>} */}
          <button
            className="bdr m-2 p-2 "
            onClick={() => AddToFollowing({ ...item })}
          >
            Follow
          </button>
        </div>
      </div>
      <NavLink to={`/viewSingleProfile/${item.user_id}`}>
        <button
          className="bdr m-2 p-2 "
          onClick={() => viewProfile({ ...item })}
        >
          View Profile ...
        </button>
      </NavLink>
    </div>
  );
};

export default SingleUserProfile;
