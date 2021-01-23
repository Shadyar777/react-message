import Header from './components/Header/Header';
import './App.css';
import {Route} from 'react-router-dom';
import Navbar from './components/Setting/Navbar';
import DiologsContainer from './components/Deologs/DiologsContainer';
import UserComponent from './components/Users/UsersContainer';
import ProfileContainer from './components/Profiles/ProfileContainer';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile/:usersId' render={() => <ProfileContainer />} />
        <Route path='/diologs' render={() => <DiologsContainer />} />
        <Route path='/user' render={() => <UserComponent />} />
      </div>
    </div>
  );
}

export default App;
