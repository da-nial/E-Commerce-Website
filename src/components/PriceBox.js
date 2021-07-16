import React from 'react';

import "../assets/css/components/priceBoxStyle.css"

function PriceBox(props) {
    return (
        <div className="priceBox">
            <h4 className="priceBox__title">
                تنظیم قیمت کالا
            </h4>

            <hr className="priceBox__divider"/>

            <input type="range" min="1" max="100" value="50"/>
        </div>
    );
}

export default PriceBox;