import React from 'react';

import "../assets/css/screens/registerScreenStyle.css";


function RegisterScreen(props) {
    return (
        <div className="registerScreen">
            <h2 className="registerScreen__title">
                فروشگاه - ثبت نام
            </h2>

            <form className="registerScreen__form" action="/action_page.php">
                <div className="registerScreen__inputWrapper">
                    <label className="registerScreen__label" htmlFor="fname">نام</label>
                    <input className="registerScreen__input" type="text" id="fname" name="fname"
                           placeholder="نام خود را وارد کنید. . ."/>
                </div>

                <div>
                    <label className="registerScreen__label" htmlFor="lname">نام خانوادگی</label>
                    <input className="registerScreen__input" type="text" id="lname" name="lname"
                           placeholder="نام خانوادگی خود را وارد کنید. . ."/>
                </div>

                <div>
                    <label className="registerScreen__label" htmlFor="email">ایمیل</label>
                    <input className="registerScreen__input" type="text" id="email" name="email"
                           placeholder="ایمیل خود را وارد کنید. . ."/>
                </div>

                <div>
                    <label className="registerScreen__label" htmlFor="password">رمز عبور</label>
                    <input className="registerScreen__input" type="text" id="password" name="password"
                           placeholder="رمز عبور خود را وارد کنید. . ."/>
                </div>

                <div className="registerScreen__addressWrapper">
                    <label className="registerScreen__label" htmlFor="address">آدرس</label>
                    <textarea className="registerScreen__textarea" type="textarea" id="address" name="address"
                              placeholder="آدرس خود را وارد کنید. . ."
                              rows="4" cols="5">
                    </textarea>
                </div>
            </form>

            <button> ثبت نام</button>
        </div>
    );
}

export default RegisterScreen;