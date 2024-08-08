import React, { useContext, useState } from "react";
import SingleUserProfile from "./SingleUserProfile";
import { OthersProfileContext } from "../../contexts/othersProfileContext";
import { NavLink } from "react-router-dom";

const OtherUsersProfile = () => {
  const { state, filterByText } = useContext(OthersProfileContext);
  //  console.log(state.userProfiles)
  const data = state.userProfiles;

  const [text, setText] = useState("");

  const inputHandler = (e) => {
    const name = e.target.value;
    setText({ ...text, name });
  };
  // console.log(text);

  return (
    <div>
      <div>
        <div>
          Search bar
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="bdr"
              type="text"
              name="brand"
              onChange={inputHandler}
            />
            <button
              type="submit"
              className="m-4 p-4 "
              onClick={() => filterByText(text.name)}
            >
              click me
            </button>
          </form>
        </div>
        <NavLink to="/followings" className="bdr">
          <div className="bdr m-2 ">
            <button className="bdr m-2 p-2 ">List of Following</button>
          </div>
        </NavLink>

        <div className="flex flex-col gap-8 m-2 p-2.5 ">
          {data.map((item, index) => {
            return <SingleUserProfile key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OtherUsersProfile;
