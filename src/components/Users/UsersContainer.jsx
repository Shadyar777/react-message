import React from 'react';
import Users from './Users';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {followAC, setCurrentPageAC, setIsFetchingAC, setTotalusersCountAC, setUsersAC, unfollowAC} from '../../redux/users-reducer';
// import preloader from '../../assets/Loader.gif';
import Preloader from '../common/Preloader/Preloader';

class UserComponent extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
      this.props.setIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalusersCount(response.data.totalCount);
    });
  }
  onPageChanged = (PagaNumber) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(PagaNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${PagaNumber}&count=${this.props.pageSize}`).then((response) => {
      this.props.setIsFetching(false);
      this.props.setUsers(response.data.items);
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
          unfolow={this.props.unfolow}
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
  };
};
let mapDispachToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfolow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setTotalusersCount: (totoalCount) => {
      dispatch(setTotalusersCountAC(totoalCount));
    },
    setCurrentPage: (pagaNumber) => {
      dispatch(setCurrentPageAC(pagaNumber));
    },
    setIsFetching: (isTrueAndFalse) => {
      dispatch(setIsFetchingAC(isTrueAndFalse));
    },
  };
};
const UsersContainer = connect(mapStateToProps, mapDispachToProps)(UserComponent);
export default UsersContainer;
