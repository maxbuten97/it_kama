import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div className={classes.MyPosts}>
      <div className={classes.posts}>
        My posts
        <div>
          <textarea
            className={classes.input}
            placeholder="Create your new post"
            typeof="text"
          ></textarea>
          <div>
            <button className={classes.btn}>Add post</button>
          </div>
        </div>
      </div>
      <Post message='Hi, how are you?' likes = '15' />
      <Post message='Its my first post' likes = '20'/>
    </div>
  );
};

export default MyPosts;
