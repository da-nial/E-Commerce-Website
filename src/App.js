import './App.css';
import "./assets/css/alignments/alignmentStyle.css"

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainScreen from "./screens/MainScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import TabMenu from "./components/TabMenu";
import LoginScreen from "./screens/LoginScreen";


function App() {
    return (
        <div className="App">
            <Nav className="app__header"/>
            {/*<MainScreen className="app__content"/>*/}
            {/*<RegisterScreen className="app__content"/>*/}
            <LoginScreen className="app__content"/>
            {/*<UserProfileScreen className="app__content"/>*/}
            <Footer className="app__footer"/>
        </div>
    );
}

export default App;
