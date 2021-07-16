import React from 'react';
import ProductCard from "../components/ProductCard";

import "../assets/css/views/productsViewStyle.css"

function ProductsView(props) {
    return (
        <div className="productsView">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
}

export default ProductsView;