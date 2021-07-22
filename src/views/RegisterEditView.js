import React, {useState, useEffect} from 'react';
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";

import "../assets/css/views/registerEditViewStyle.css";


function RegisterEditView(props) {
    const type = props.type

    const fNameInitial = {
        name: "نام",
        id: "fname",
        required: true,
        error: "",
        // onChange: handleFirstName
    }
    const [firstName, setFirstName] = useState(fNameInitial)
    const handleFirstName = event => {
        setFirstName({
            name: event.target.value
        });
        alert(firstName.name)
    };

    let fields = [
        {
            name: "نام",
            id: "fname",
            required: true,
            error: "z!",
            // onChange: handleChange
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

    const initialState = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        fnameError: "salam",
        lnameError: "",
        emailError: "",
        passwordError: "",
    }

    const [state, setState] = useState(initialState)

    const validate = () => {
        let fnameError = "";
        let lnameError = ""
        let emailError = ""
        let passwordError = ""

        if (!state.email.includes('@')) {
            emailError = 'invalid email';
        }

        if (emailError) {
            setState({emailError: "zzzz"})
        }

    }

    const handleSubmit = event => {
        event.preventDefault()
        const isValid = validate()

        if (isValid) {
            setState(initialState)
        }
        console.log(state)
    }

    return (
        <div>
            <form className="registerEditView__form" onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                        <TextInput inputProps={field}/>
                    )
                )}
                {/*<span style={{color: "red"}}> {state.fnameError} </span>*/}

                <TextArea className="registerEditView__addressWrapper"/>

                <button type="submit" className="registerEditView__submitButton">
                    {type === "register" ? "ثبت نام" : "ویرایش"}
                </button>
            </form>
        </div>
    );
}

export default RegisterEditView;