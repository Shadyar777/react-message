import React from 'react';
import piffleClasses from './Profileclass.module.css';
import {connect} from 'react-redux';
import {profileInfo, setUserProfile} from '../../redux/profile-reducer';
import Profile from './Profile';
import {Redirect, withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let usersId = this.props.match.params.usersId;
    if (!usersId) usersId = 2;
    this.props.profileInfo(usersId);
  }

  render() {
   if (!this.props.isAuth) return <Redirect to = "/login"/>

    return (
      <div className={piffleClasses.content}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateTopProps = (state) => ({
  profile: state.profile.profileInState,
  isAuth : state.auth.isAuth,
});

let WithUrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateTopProps, {
  setUserProfile,
  profileInfo,
})(WithUrlContainerComponent);
