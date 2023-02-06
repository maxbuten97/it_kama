import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let posts = props.posts;

  let postsElements = posts.map((post) => (
    <Post message={post.message} likes={post.likesCount} id={post.id} />
  ));

  return (
    <div className={classes.MyPosts}>
      <div className={classes.posts__block}>
        <h3>My posts</h3>
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
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
