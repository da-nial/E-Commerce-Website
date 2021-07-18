import React from 'react';

import "../assets/css/components/TextInput.css";


function TextInput({inputProps}) {
    const name = inputProps.name
    const id = inputProps.id
    const type = inputProps.type ? inputProps.type : "text"

    const placeholderTemplate = " خود را وارد کنید . . . "

    return (
        <div className="inputField__wrapper">
            <label className="inputField__label" htmlFor="fname">{name}</label>
            <input className="inputField_input" type={type} id={id} name={name}
                   placeholder={name + placeholderTemplate}
            />
        </div>
    );
}

export default TextInput;