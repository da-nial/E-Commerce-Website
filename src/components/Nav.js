import React from 'react';

function Header(props) {
    return (
        <nav>
            <ul>
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
                    <a href="/support"> ورود/ ثبت نام </a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;