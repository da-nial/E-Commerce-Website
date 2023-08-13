import React from 'react';

import "../assets/css/components/heroHeaderStyle.css"
import clockPic from "../assets/pics/clock.png"
import Slider from "./Slider";
import sliderImages from "../assets/data/sliderImages";

function HeroHeader(props) {
    return (
        <div className="heroHeader">
            <p className="heroHeader__title"> در محصولات فروشگاه جستجو کنید </p>
            <input className="heroHeader__search-bar" placeholder="نام محصول خود را وارد کنید. . ."/>
            <button className="heroHeader__search-button"> جستجو کنید</button>

            <section className="heroHeader__slider">
                <Slider slides={sliderImages}/>
            </section>
            {/*<img className="heroHeader__img" src={clockPic}/>*/}

        </div>
    );
}

export default HeroHeader;