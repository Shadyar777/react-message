import React from "react";
import userClass from "./Users.module.css";

const User = (props) => {
  // debugger;
  return (
    <div className={userClass.user}>
      {props.users.map((el) => (
        <div key={el.id}>
          <span className='span-item span-item-1'>
            <div>
              <img src={el.photoUrl} alt='' />
            </div>
            <div>
              {el.followed ? (
                <button
                  onClick={() => {
                    props.follow(el.id);
                    console.log(el.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.unfolow(el.id);
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
          </span>
          <span className='span-item span-item-2'>
            <span>
              <div>{el.fullName}</div>
              <div>{el.status}</div>
            </span>
            <span>
              <div>{el.location.country}</div>
              <div>{el.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default User;
