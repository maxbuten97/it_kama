import React from "react";
import classes from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={classes.img}
          src="https://img1.akspic.ru/attachments/crops/8/7/0/7/2/127078/127078-orientir-metropoliya-gorodskoj_pejzazh-gorod-osveshhenie-2560x1440.jpg"
          alt="main img"
        />
      </div>
      <div className={classes.descr__block}>ava + descr</div>
    </div>
  );
};

export default ProfileInfo;
