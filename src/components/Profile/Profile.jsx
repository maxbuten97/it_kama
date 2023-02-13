import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  let posts = props.state.posts;
  let newPostText = props.state.newPostText;
  let updateNewPostText = props.updateNewPostText;
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        addPost={props.addPost}
        newPostText={newPostText}
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
};

export default Profile;
