import React from 'react';

import "../assets/css/components/dropdownStyle.css"


function Dropdown(props) {
    return (
        <div className="dropdown">
            <button className="dropdown__button">هادی</button>
            <div className="dropdown__content">
                <a href="#">پروفایل</a>
                <a href="#">خروج از حساب</a>
            </div>
        </div>
    );
}

export default Dropdown;