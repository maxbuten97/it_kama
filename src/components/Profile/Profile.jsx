import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
const Profile = () => {
  return (
    <div>
      <div>
        <img
          className={classes.img}
          src="https://img1.akspic.ru/attachments/crops/8/7/0/7/2/127078/127078-orientir-metropoliya-gorodskoj_pejzazh-gorod-osveshhenie-2560x1440.jpg"
          alt="main img"
        />
      </div>
      <div>
        <img
          className={classes.avatar}
          src="https://tinypng.com/images/social/website.jpg"
          alt="avatar"
        />{" "}
        + descr
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
