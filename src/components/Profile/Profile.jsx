import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  let posts = props.profilePage.posts;
  let newPostText = props.profilePage.newPostText;
  let dispatch = props.dispatch;
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} newPostText={newPostText} dispatch={dispatch} />
    </div>
  );
};

export default Profile;
