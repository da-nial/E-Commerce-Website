import React from 'react';

import "../assets/css/components/productCard.css"

import sampleProductImg from "../assets/pics/mouse.jpg"


function ProductCard({product}) {
    const {name, category, price, numInStock, numSold, image} = product;

    return (
        <div className="productCard">
            <section className="productCard__upperSection">
                <img className="productCard__img" src={image} alt="Product Image"/>
                <h3 className="productCard__name"> {name} </h3>
                <h4 className="productCard__category">{category}</h4>
            </section>

            <hr className="productCard__divider"/>

            <section className="productCard__lowerSection">
                <p className="productCard__price">
                    {price} تومان
                </p>
                <button>
                    خرید محصول
                </button>
            </section>
        </div>

    );
}

export default ProductCard;