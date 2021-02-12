import './App.css';
import {Route} from 'react-router-dom';
import Navbar from './components/Setting/Navbar';
import DiologsContainer from './components/Deologs/DiologsContainer';
import UserComponent from './components/Users/UsersContainer';
import ProfileContainer from './components/Profiles/ProfileContainer';
import MusicContainer from './components/Music/MusicContainer';
import HeaderComponent from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';

function App(props) {
  return (
    <div className='app-wrapper'>
      <HeaderComponent />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile/:usersId?' render={() => <ProfileContainer />} />
        <Route path='/diologs' render={() => <DiologsContainer />} />
        <Route path='/music' render={() => <MusicContainer date={new Date()} />} />
        <Route path='/user' render={() => <UserComponent />} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
