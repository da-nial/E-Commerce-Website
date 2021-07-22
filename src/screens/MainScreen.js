import "../assets/css/screens/mainScreenStyle.css";

import HeroHeader from "../components/HeroHeader";
import SortBox from "../components/SortBox";
import CategoryBox from "../components/CategoryBox";
import PriceBox from "../components/PriceBox";
import ProductsView from "../views/ProductsView";

function MainScreen(props) {
    return (
        <div className={"mainScreen " + "app__content"}>
            <HeroHeader/>

            <section className="mainScreen__mainSection">
                <SortBox/>

                <section className="mainScreen__sidebar">
                    <CategoryBox/>
                    <PriceBox/>
                </section>

                <ProductsView/>
            </section>
        </div>
    );
}

export default MainScreen;
