import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  const posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "Its my first post", likesCount: 20 },
  ];

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
