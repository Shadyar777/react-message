import Header from "./components/Header/Header";
import "./App.css";
import {Route} from "react-router-dom";
import Navbar from "./components/Setting/Navbar";
import Profile from "./components/Profiles/Profile";
import DiologsContainer from "./components/Deologs/DiologsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/diologs' render={() => <DiologsContainer />} />
        <Route path='/user' render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
