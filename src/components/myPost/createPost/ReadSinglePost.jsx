import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ReadSinglePost = (user) => {
  //   console.log(user);
  const handleDelete = (id) => {
    // window.confirm ask for confirmation of deletion
    const confirm = window.confirm("would you like to delete the user");
    if (confirm) {
      axios
        .delete(`http://localhost:8005/users/` + id)
        .then((res) => {
          location.reload(); // reload us to the same page
        })
        .catch((err) => console.log(err));
    }
    // console.log(id);
  };

  return (
    <div className="bdr m-2 p-2 my-8">
      <div className="bdr m-2 p-2 ">image : {user.add_image}</div>
      <div className="bdr m-2 p-2 ">description : {user.add_dscription}</div>
      <div className="bdr m-2 p-2 ">loacation : {user.add_location}</div>
      <div className="bdr m-2 p-2 ">music : {user.add_music}</div>
      <div className="bdr m-2 p-2 ">
        <div className="bdr m-2 p-2 ">
          <Link
            className="link border border-slate-200 "
            to={`/updatePostForm/` + user.id}
          >
            update user
          </Link>
        </div>
        <div className="bdr m-2 p-2 ">
          <button className="link" onClick={(e) => handleDelete(user.id)}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadSinglePost;
