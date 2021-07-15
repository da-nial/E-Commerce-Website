import React from 'react';

import "../assets/css/components/heroHeaderStyle.css"

function HeroHeader(props) {
    return (
        <div className="heroHeader">
            <p className="heroHeader__title"> در محصولات فروشگاه جستجو کنید </p>
            <input className="heroHeader__search-bar" placeholder="نام محصول خود را وارد کنید. . ."/>
            <button className="heroHeader__search-button"> جستجو کنید</button>
        </div>
    );
}

export default HeroHeader;