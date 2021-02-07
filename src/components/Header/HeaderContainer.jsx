import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserDate } from '../../redux/auth-reducer.js';
import Header from './Header.jsx';
class HeaderComponent extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then((response) => {
      if (response.data.resultCode === 0) { // здесь date это axios структура 
        let {id,login ,email } = response.data.data;
          this.props.setAuthUserDate(id, email, login) // а здесь date.date axios и серверный запрос
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateTopProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateTopProps, {
    setAuthUserDate,
})(HeaderComponent);
