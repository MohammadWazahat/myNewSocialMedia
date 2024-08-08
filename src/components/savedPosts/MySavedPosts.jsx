import React, { useContext } from 'react'
import { OtherUserPostContext } from "../../contexts/othersPostContext";
import SingleSavedPost from './SingleSavedPost';

const MySavedPosts = () => {
    const {state} = useContext(OtherUserPostContext);
    // console.log(state.savedPosts);
    const data = state.savedPosts ;
  return (
    <div>
      {
        data.map((item,index)=>{
            return <SingleSavedPost key={index} {...item}/>
        })
      }
    </div>
  )
}

export default MySavedPosts
