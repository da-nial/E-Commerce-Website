import React from 'react';

import "../assets/css/screens/loginScreenStyle.css";
import TextInput from "../components/TextInput";


function LoginScreen(props) {
    const fields = [
        {
            name: "ایمیل",
            id: "email",
            type: "email",
            required: true
        },
        {
            name: "رمز عبور",
            id: "password",
            type: "password",
            pattern: ".{6,}",
            required: true,
        }
    ]

    return (
        <div className={"loginScreen " + props.className}>
            <h2 className="registerScreen__title">
                فروشگاه - ورود
            </h2>

            <form className="loginScreen__form" action="/">
                {fields.map((field, index) => (
                        <TextInput inputProps={field}/>
                    )
                )}
            </form>

            <button className="loginScreen__submitButton">
                ورود
            </button>
        </div>
    );
}

export default LoginScreen;