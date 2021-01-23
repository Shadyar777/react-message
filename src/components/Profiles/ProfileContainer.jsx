import React from 'react';
import piffleClasses from './Profileclass.module.css';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import Profile from './Profile';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let usersId = this.props.match.params.usersId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + usersId).then((response) => {
      this.props.setUserProfile(response.data);
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
