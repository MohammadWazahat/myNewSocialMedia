import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { OthersProfileContext } from "../../contexts/othersProfileContext";

const Following = () => {
  const { state, deleteFollowing, viewProfile } =
    useContext(OthersProfileContext);
  // console.log(state.savedToFollowing);
  const myFollowing = state.savedToFollowing;
console.log(myFollowing.length)
  return (
    <div>
      <div>List of Following</div>
      {myFollowing.map((item, index) => {
        return (
          <div key={index}>
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
              <button
                className="bdr m-2 p-2 "
                onClick={() => deleteFollowing({ ...item })}
              >
                unFollow
              </button>
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
      })}
    </div>
  );
};

export default Following;
