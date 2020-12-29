import Header from "./components/Header/Header";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Setting/Navbar";
import Profile from "./components/Profiles/Profile";
import DiologsContainer from "./components/Deologs/DiologsContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              store={props.store}
              statePost={props.state.profile.postData}
              textPost={props.state.profile.newPostText}
              dispatch={props.dispatch}
              // updateNewPostText={props.updateNewPostText}
            />
          )}
        />
        <Route path="/diologs" render={() => <DiologsContainer store={props.store} />} />
        {/* <Route path="/diologs" render={() => <Diologs stateDiologs={props.state.profile.diologsData} store={props.store} />} /> */}
      </div>
    </div>
  );
}

export default App;
