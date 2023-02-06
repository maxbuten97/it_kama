import React from "react";
import classes from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={classes.img}
          src="https://wp-s.ru/wallpapers/10/9/463314880930454/krasivyj-zakat-lesnoe-ozero-gory.jpg"
          alt="main img"
        />
      </div>
      <div className={classes.descr__block}>ava + descr</div>
    </div>
  );
};

export default ProfileInfo;
