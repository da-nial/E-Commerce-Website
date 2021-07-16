import "../assets/css/screens/mainScreenStyle.css";

import HeroHeader from "../components/HeroHeader";
import SortBox from "../components/SortBox";
import CategoryBox from "../components/CategoryBox";
import PriceBox from "../components/PriceBox";
import ProductsView from "../views/ProductsView";

function MainScreen() {
    return (
        <div className="mainScreen">
            <HeroHeader/>

            <SortBox/>

            <section className="mainScreen__sidebar">
                <CategoryBox/>
                <PriceBox/>
            </section>

            <ProductsView/>

        </div>
    );
}

export default MainScreen;
