import logo from './logo.svg';
import './App.css';

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HeroHeader from "./components/HeroHeader";
import SortBox from "./components/SortBox";
import CategoryBox from "./components/CategoryBox";
import ProductCard from "./components/ProductCard";

function App() {
    return (
        <div className="App">
            <Nav/>
            <HeroHeader/>
            <SortBox/>
            <CategoryBox/>
            <ProductCard/>
            <Footer/>
        </div>
    );
}

export default App;
