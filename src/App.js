import logo from './logo.svg';
import './App.css';

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainScreen from "./screens/MainScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserProfileScreen from "./screens/UserProfileScreen";

function App() {
    return (
        <div className="App">
            <Nav/>
            {/*<MainScreen/>*/}
            {/*<RegisterScreen/>*/}
            <UserProfileScreen/>
            <Footer/>
        </div>
    );
}

export default App;
