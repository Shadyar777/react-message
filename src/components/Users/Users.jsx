import React from 'react';
import userClass from './Users.module.css';
import userPhoto from '../../assets/images/t1.jpg';
import {NavLink} from 'react-router-dom';
import { usersAPI } from '../../api/api';
const Users = (props) => {
  let pagaCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagaCount; i++) {
    pages.push(i);
  }
//   debugger;
  return (
    <div>
      <div className={userClass.number}>
        {pages.map((el, index) => {
          return (
            <span
              key={index}
              onClick={(e) => {
                props.onPageChanged(el);
              }}
              className={props.currentPage === el && userClass.thisPage}
            >
              {el}
            </span>
          );
        })}
      </div>

      <div className={userClass.user}>
        {props.users.map((el) => (
          <div key={el.id}>
            <span className='span-item span-item-1'>
              <div>
                <NavLink to={'/profile/' + el.id}>
                  <img src={el.photos.small != null ? el.photos.small : userPhoto} alt='' />
                  {/* <img src={el.photos.small || userPhoto} alt='' /> */}
                </NavLink>
              </div>
              <div>
                {el.followed ? (
                  <button 
                    onClick={() => {
                     usersAPI.deleteFollowUser(el.id)
                        .then(data => {
                          if (data.resultCode == 0) props.unfollow(el.id);
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                     usersAPI.postFollowUser(el.id)
                        .then(data => {
                          if (data.resultCode == 0) props.follow(el.id);
                        });
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span className='span-item span-item-2'>
              <span>
                <div>{el.name}</div>
                <div>{el.status}</div>
              </span>
              <span>
                <div>{'el.location.country'}</div>
                <div>{'el.location.city'}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
