import React from 'react';

import "../assets/css/components/TextInput.css";


function TextInput({inputProps, className}) {
    const name = inputProps.name
    const id = inputProps.id
    const type = inputProps.type ? inputProps.type : "text"
    const pattern = inputProps.pattern
    const required = inputProps.required
    const error = inputProps.error
    const onChange = inputProps.onChange


    const placeholderTemplate = " خود را وارد کنید . . . "

    return (
        <div className={"inputField__wrapper " + inputProps.className}>
            <label className="inputField__label" htmlFor="fname">{name}</label>

            <input className="inputField_input"
                   type={type}
                   id={id}
                   name={name}
                   pattern={pattern}
                   required={required}
                   placeholder={name + placeholderTemplate}
                   onInput={onChange}
            />
            <div>
                {error}
            </div>
        </div>
    );
}

export default TextInput;