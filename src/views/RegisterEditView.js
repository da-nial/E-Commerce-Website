import React from 'react';
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";

import "../assets/css/views/registerEditViewStyle.css";


function RegisterEditView(props) {
    const type = props.type

    const fields = [
        {
            name: "نام",
            id: "fname",
            required: true
        },
        {
            name: "نام خانوادگی",
            id: "lname",
            required: true
        },
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
        <div>
            <form className="registerEditView__form" action="/">
                {fields.map((field, index) => (
                        <TextInput inputProps={field}/>
                    )
                )}

                <TextArea className="registerEditView__addressWrapper"/>
            </form>

            <button className="registerEditView__submitButton">
                {type === "register" ? "ثبت نام" : "ویرایش" }
            </button>
        </div>
    );
}

export default RegisterEditView;