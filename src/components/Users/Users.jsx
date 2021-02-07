import React from 'react';
import userClass from './Users.module.css';
import userPhoto from '../../assets/images/t1.jpg';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
const Users = (props) => {
  const API_KEY = "4de8babe-fd9e-4ab6-b0a0-c03fd947c7c9";
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
                      axios
                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                          withCredentials: true,
                          headers: {
                            'API-KEY': API_KEY,
                          },
                        })
                        .then(response => {
                          if (response.data.resultCode === 0) props.unfollow(el.id);
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              'API-KEY': API_KEY,
                            },
                          }
                        )
                        .then(response => {
                          if (response.data.resultCode === 0) props.follow(el.id);
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
