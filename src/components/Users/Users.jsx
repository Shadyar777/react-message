import React from 'react';
import userClass from './Users.module.css';
import userPhoto from '../../assets/images/t1.jpg';
import {NavLink} from 'react-router-dom';
// import axios from 'axios';
const Users = (props) => {
  let pagaCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagaCount; i++) {
    pages.push(i);
  }


  return (
    <div>
      <div className={userClass.number}>
        {pages.map((element, index) => {
          return (
            <span
              key={index}
              onClick={(e) => {
                props.onPageChanged(element);
              }}
              className={props.currentPage === element && userClass.thisPage}
            >
              {element}
            </span>
          );
        })}
      </div>

      <div className={userClass.user}>
        {props.users.map((element) => (
          <div key={element.id}>
            <span className='span-item span-item-1'>
              <div>
                <NavLink to={'/profile/' + element.id}>
                  <img src={element.photos.small != null ? element.photos.small : userPhoto} alt='' />
                </NavLink>
              </div>
              <div>
                {element.followed ? (
                  <button
                    disabled={props.followingInProgress.some((id) => id === element.id)}
                    onClick={() => {
                     debugger;
                       props.unfollow(element.id)}}>
                    Unfollow
                    </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some((id) => id === element.id)}
                    onClick={() => { 
                       debugger;
                       props.follow(element.id)}}>
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span className='span-item span-item-2'>
              <span>
                <div>{element.name}</div>
                <div>{element.status}</div>
              </span>
              <span>
                <div>{'element.location.country'}</div>
                <div>{'element.location.city'}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
