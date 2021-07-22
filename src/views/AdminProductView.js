import React from 'react';

import "../assets/css/views/adminProductViewStyle.css"
import ProductsView from "./ProductsView";

function AdminProductView(props) {
    return (
        <div className="adminProductView">
            <button className="adminProductView__button">+ ایجاد محصول جدید</button>
            <ProductsView/>
        </div>
    );
}

export default AdminProductView;