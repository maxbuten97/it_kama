import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
  let posts = props.posts;

  let postsElements = posts.map((post) => (
    <Post
      message={post.message}
      likes={post.likesCount}
      id={post.id}
      key={post.id}
    />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={classes.MyPosts}>
      <div className={classes.posts__block}>
        <h3>My posts</h3>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            className={classes.input}
            placeholder="Create your new post"
            typeof="text"
            value={props.newPostText}
          />
          <div>
            <button className={classes.btn} onClick={addPost}>
              Add post
            </button>
          </div>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
