import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdatePost = () => {
  const { id } = useParams();

  const users = {
    add_image: "",
    add_description: "",
    add_location: "",
    add_music: "",
  };

  const [user, setUser] = useState(users);

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:8005/users/` + id, user);
    navigate("/myProfile");
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // console.log(user);
  };

  useEffect(() => {
    axios.get(`http://localhost:8005/users/` + id).then((res) => {
      setUser(res.data);
    //   console.log(id);
    });
  }, [id]);
//   console.log(user);

  return (
    <div>
      i am update post
      <form onSubmit={submitForm}>
        <label htmlFor="add_image">add image</label>
        <br />
        <input
          type="text"
          placeholder="add image"
          name="add_image"
          value={user.add_image}
          onChange={inputChangeHandler}
        />
        <br />
        <label htmlFor="add_description">add description</label>
        <br />
        <input
          type="text"
          placeholder="add description"
          name="add_description"
          value={user.add_description}
          onChange={inputChangeHandler}
        />
        <br />
        <label htmlFor="add_location">add location</label>
        <br />
        <input
          type="text"
          placeholder="add location"
          name="add_location"
          value={user.add_location}
          onChange={inputChangeHandler}
        />
        <br />
        <label htmlFor="add_music">add music</label>
        <br />
        <input
          type="text"
          placeholder="add music"
          name="add_music"
          value={user.add_music}
          onChange={inputChangeHandler}
        />
        <br />
        <button type="submit">Share post</button>
      </form>
    </div>
  );
};

export default UpdatePost;
