import * as axios from "axios";
import React from "react";
import userClass from "./Users.module.css";
import userPhoto from "../../assets/images/t1.jpg";

class User extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      this.props.setUsers(response.data.items);
    });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {/* <button className='btn' onClick={this.getUser}>
          add users
        </button> */}
        <div className={userClass.user}>
          {this.props.users.map((el) => (
            <div key={el.id}>
              <span className='span-item span-item-1'>
                <div>
                  <img src={el.photos.small != null ? el.photos.small : userPhoto} alt='' />
                  {/* <img src={el.photos.small || userPhoto} alt='' /> */}
                </div>
                <div>
                  {el.followed ? (
                    <button
                      onClick={() => {
                        this.props.follow(el.id);
                      }}
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.unfolow(el.id);
                      }}
                    >
                      Unfollow
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
                  <div>{"el.location.country"}</div>
                  <div>{"el.location.city"}</div>
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default User;
