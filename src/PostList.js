import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, remove, check}) => {
    return (
        <div className='box'>
        {posts.map((post) => 
        <PostItem remove={remove} check={check} post={post} key={post.id}/>)}
      </div>
    )
}

export default PostList