import React from 'react';

import "../assets/css/components/productCard.css"

import sampleProductImg from "../assets/pics/mouse.jpg"


function ProductCard(props) {
    return (
        <div className="productCard">
            <img className="productCard__img" src={sampleProductImg}/>
            <h5> موس گیمینگ ریزر</h5>
            <h6>دسته‌بندی ۱</h6>
            <hr/>

            ۱۰.۰۰۰ تومان
            خرید محصول
        </div>

    );
}

export default ProductCard;