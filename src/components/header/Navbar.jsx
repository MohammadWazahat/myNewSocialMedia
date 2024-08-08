import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <section>
          <header>
            <div className="flex flex-col m-4 p-4 justify-around items-center ">
              <div className=" m-4 text-4xl font-bold">
                <span className="alphaColor">J</span>INGLE
                <span className="alphaColor"> R</span>OOM
              </div>
              <div className=" flex m-4 text-xl">
                <ul className="flex flex-col  gap-6">
                  <li className="navlink ">
                    <NavLink to="/" className="clickLink">
                      Home
                    </NavLink>
                  </li>
                  <li className="navlink">
                    <NavLink to="/about" className="clickLink">
                      About
                    </NavLink>
                  </li>
                  <li className="navlink">
                    <NavLink to="/myProfile" className="clickLink">
                      My Profile
                    </NavLink>
                  </li>
                  <li className="navlink">
                    <NavLink to="/searchUsers" className="clickLink">
                      Search users
                    </NavLink>
                  </li>
                  <li className="navlink">
                    <NavLink to="/mySavedPosts" className="clickLink">
                      Saved Posts
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="horizonLineBox">
              <hr className="horizon boder border-slate-800 mx-4" />
            </div>
          </header>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
