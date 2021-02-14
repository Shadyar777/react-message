import React from 'react';
import piffleClasses from './Profileclass.module.css';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import Profile from './Profile';
import {withRouter} from 'react-router-dom';
import { usersAPI } from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let usersId = this.props.match.params.usersId;
    if (!usersId) usersId = 2;
    usersAPI.getUserProfile(usersId).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return (
      <div className={piffleClasses.content}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateTopProps = (state) => ({
  profile: state.profile.profileInState,
});

let WithUrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateTopProps, {
  setUserProfile,
})(WithUrlContainerComponent);
