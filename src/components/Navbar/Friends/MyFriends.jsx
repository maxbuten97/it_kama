import React from "react";
import classes from "./MyFriends.module.css";
const Friends = (props) => {
  let friends = props.friends;
  return (
    <div className={classes.friends__block}>
      <div className="friends__title">Friends</div>

      <div className={classes.friends__list}>
        <div className={classes.friends__item}>
          <div className={classes.avatar}></div>
          <div className={classes.friends__name}>{friends[0].name}</div>
        </div>
        <div className={classes.friends__item}>
          <div className={classes.avatar}></div>
          <div className={classes.friends__name}>{friends[1].name}</div>
        </div>
        <div className={classes.friends__item}>
          <div className={classes.avatar}></div>
          <div className={classes.friends__name}>{friends[2].name}</div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
