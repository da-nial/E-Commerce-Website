import React from 'react';

import "../assets/css/components/productCard.css"

import sampleProductImg from "../assets/pics/mouse.jpg"


function ProductCard(props) {
    return (
        <div className="productCard">
            <img className="productCard__img" src={sampleProductImg}/>
            <h3 className="productCard__title"> موس گیمینگ ریزر</h3>
            <h4 className="productCard__category">دسته‌بندی ۱</h4>

            <hr className="productCard__divider"/>

            <span className="productCard__span">
                <p className="productCard__price">
                    ۱۰.۰۰۰ تومان
                </p>

                <button>
                    خرید محصول
                </button>
            </span>
        </div>

    );
}

export default ProductCard;