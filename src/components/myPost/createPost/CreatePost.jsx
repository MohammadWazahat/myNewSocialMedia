import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const [values, setValues] = useState({
    add_image : "",
    add_description : "",
    add_location : "",
    add_music : "",
  });

  const navigate = useNavigate();

    const submitForm = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:8005/users", values)
        .then((res) => {
        //   console.log(res);
          // hook to navigate back to the page
          navigate("/myProfile");
        })
        .catch((err) => console.log(err));
    };

//   const submitForm = (e) => {
//     e.preventDefault();
// console.log("i am submitted")
// console.log(values);
//   };

  return (
    <div>
      <div>
        <h2>i will add data form</h2>
        <form onSubmit={submitForm}>
          <label htmlFor="add_image">add image</label>
          <br />
          <input
            type="text"
            placeholder="add image"
            name="add_image"
            onChange={(e) =>
              setValues({ ...values, add_image : e.target.value })
            }
          />
          <br />
          <label htmlFor="add_description">add description</label>
          <br />
          <input
            type="text"
            placeholder="add description"
            name="add_description"
            onChange={(e) =>
              setValues({ ...values, add_description: e.target.value })
            }
          />
          <br />
          <label htmlFor="add_location">add location</label>
          <br />
          <input
            type="text"
            placeholder="add location"
            name="add_location"
            onChange={(e) =>
              setValues({ ...values, add_location: e.target.value })
            }
          />
          <br />
          <label htmlFor="add_music">add music</label>
          <br />
          <input
            type="text"
            placeholder="add music"
            name="add_music"
            onChange={(e) =>
              setValues({ ...values, add_music: e.target.value })
            }
          />
          <br />
          <button type="submit">Share post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
