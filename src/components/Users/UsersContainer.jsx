import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { setIsFetching, follow, unfollow, setUsers, setCurrentPage, setTotalusersCount, toogleFolowing} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UserComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.haha = 'Hello world';
  //   }
  componentDidMount() {
    // console.log(this.haha);
    this.props.setIsFetching(true);
    usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then((data) => {
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalusersCount(data.totalCount);
      });
  }

  onPageChanged = (PagaNumber) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(PagaNumber);
    usersAPI.getUsers(PagaNumber, this.props.pageSize).then((data) => {
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress = {this.props.followingInProgress}
          toogleFolowing={this.props.toogleFolowing}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};
const UsersContainer = connect(mapStateToProps, {
  setIsFetching,
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalusersCount,
  toogleFolowing,
})(UserComponent);

export default UsersContainer;
