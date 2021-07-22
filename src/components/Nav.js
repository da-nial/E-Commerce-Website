import React from 'react';


import {Link} from "react-router-dom";
import LoginRegister from "./LoginRegister";
import Dropdown from "./Dropdown";

import "../assets/css/components/navStyle.css"

function Nav(props) {
    return (
        <nav className={"nav " + props.className}>
            <ul className="nav__ul">
                <li>
                    <Link to="/"> فروشگاه </Link>
                </li>

                <li>
                    <Link to="/index"> صفحه‌ی اول </Link>
                </li>

                <li>
                    <Link to="/contact-us"> تماس با ما </Link>
                </li>

                <li>
                    <Link to="/support"> پشتیبانی </Link>
                </li>

                <li>
                    <Link to="/"> محصولات </Link>
                </li>

                <li>
                    {/*<LoginRegister/>*/}
                    <Dropdown/>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;