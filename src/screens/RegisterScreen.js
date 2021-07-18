import React from 'react';

import "../assets/css/screens/registerScreenStyle.css";

import RegisterEditView from "../views/RegisterEditView";


function RegisterScreen(props) {

    return (
        <div className={"registerScreen " + props.className}>
            <h2 className="registerScreen__title">
                فروشگاه - ثبت نام
            </h2>

            <RegisterEditView type="register"/>
        </div>
    );
}

export default RegisterScreen;