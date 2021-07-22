import React from 'react';

import "../assets/css/components/dropdownStyle.css"
import {Link} from "react-router-dom";


function Dropdown(props) {
    return (
        <div className="dropdown">
            <button className="dropdown__button">هادی</button>
            <div className="dropdown__content">
                <Link to="/user">پروفایل</Link>
                <Link to="/logout">خروج از حساب</Link>
            </div>
        </div>
    );
}

export default Dropdown;