import React from 'react';

import "../assets/css/screens/registerScreenStyle.css";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";


function RegisterScreen(props) {
    const fields = [
        {
            name: "نام",
            id: "fname"
        },
        {
            name: "نام خانوادگی",
            id: "lname"
        },
        {
            name: "ایمیل",
            id: "email"
        },
        {
            name: "رمز عبور",
            id: "password",
            type: "password"
        }

    ]
    return (
        <div className={"registerScreen " + props.className}>
            <h2 className="registerScreen__title">
                فروشگاه - ثبت نام
            </h2>

            <form className="registerScreen__form" action="/">
                {fields.map((field, index) => (
                        <TextInput inputProps={field}/>
                    )
                )}

                <TextArea className="registerScreen__addressWrapper"/>
            </form>

            <button> ثبت نام</button>
        </div>
    );
}

export default RegisterScreen;