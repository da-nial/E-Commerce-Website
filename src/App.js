import './App.css';
import "./assets/css/alignments/alignmentStyle.css"


import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainScreen from "./screens/MainScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import TabMenu from "./components/TabMenu";
import LoginScreen from "./screens/LoginScreen";
import AdminProfileScreen from "./screens/AdminProfileScreen";

import {Switch, Route} from "react-router-dom"


function App() {
    return (
        <div className="App">
            <Nav className="app__header"/>
            <Switch>
                <Route path='/register' component={RegisterScreen}/>
                <Route path='/login' component={LoginScreen}/>
                <Route path='/user' component={UserProfileScreen}/>
                <Route path='/admin' component={AdminProfileScreen}/>
                <Route path='/' component={MainScreen}/>
            </Switch>

            <Footer className="app__footer"/>
        </div>
    );
}

export default App;
