import React from "react";
import classes from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://mobimg.b-cdn.net/v3/fetch/74/749a35f15dec6d974afe2efe7b1bbc81.jpeg"
        alt="avatar"
      />{" "}
      {props.message}
      <div>
        <span>like:{props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
