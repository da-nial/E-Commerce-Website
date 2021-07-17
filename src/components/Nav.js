import React from 'react';

import LoginRegister from "./LoginRegister";

import "../assets/css/components/navStyle.css"

function Nav(props) {
    return (
        <nav className={"nav " + props.className}>
            <ul className="nav__ul">
                <li>
                    <a href="/"> فروشگاه </a>
                </li>

                <li>
                    <a href="/index"> صفحه‌ی اول </a>
                </li>

                <li>
                    <a href="/contact-us"> تماس با ما </a>
                </li>

                <li>
                    <a href="/support"> پشتیبانی </a>
                </li>

                <li>
                    <a href="/support"> محصولات </a>
                </li>

                <li>
                    <LoginRegister/>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;