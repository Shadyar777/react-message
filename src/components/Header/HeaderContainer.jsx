import React from 'react';
import { connect } from 'react-redux';
import { authIn, setAuthUserDate } from '../../redux/auth-reducer.js';
import Header from './Header.jsx';
class HeaderComponent extends React.Component {
  componentDidMount() {
   this.props.authIn();
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
    setAuthUserDate, authIn,
})(HeaderComponent);
