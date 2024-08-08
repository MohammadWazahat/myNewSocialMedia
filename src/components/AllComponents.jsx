import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import MyProfile from "./myProfile/MyProfile";
import MySavedPosts from "./savedPosts/MySavedPosts";
import OtherUsersProfile from "./otherUsersProfiles/OtherUsersProfile";
import Following from "./following/Following";
import SingleUserProfile from "./otherUsersProfiles/SingleUserProfile";
import ViewSingleProfile from "./otherUsersProfiles/ViewSingleProfile";
import CreatePost from "./myPost/createPost/CreatePost";
import UpdatePost from "./myPost/createPost/UpdatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/myProfile",
    element: (
      <>
        <Navbar />
        <MyProfile />
        <Footer />
      </>
    ),
  },
  {
    path: "/mySavedPosts",
    element: (
      <>
        <Navbar />
        <MySavedPosts />
        <Footer />
      </>
    ),
  },
  {
    path: "/searchUsers",
    element: (
      <>
        <Navbar />
        <OtherUsersProfile />
        <Footer />
      </>
    ),
  },
  {
    path: "/followings",
    element: (
      <>
        <Navbar />
        <Following />
        <Footer />
      </>
    ),
  },
  {
    path: "/viewSingleProfile/:id",
    element: (
      <>
        <Navbar />
        <ViewSingleProfile />
        <Footer />
      </>
    ),
  },
  {
    path: "/createPostForm",
    element: (
      <>
        <Navbar />
        <CreatePost />
        <Footer />
      </>
    ),
  },
  {
    path: "/updatePostForm/:id",
    element: (
      <>
        <Navbar />
        <UpdatePost/>
        <Footer />
      </>
    ),
  },
]);

const AllComponents = () => {
  return (
    <div>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
};

export default AllComponents;
