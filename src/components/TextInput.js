import React from 'react';

import "../assets/css/components/TextInput.css";


function TextInput(props) {
    const name = props.name
    const id = props.id

    const placeholderTemplate = " خود را وارد کنید . . . "

    return (
        <div className="inputField__wrapper">
            <label className="inputField__label" htmlFor="fname">{name}</label>
            <input className="inputField_input" type="text" id={id} name={name}
                   placeholder={name + placeholderTemplate}
            />
        </div>
    );
}

export default TextInput;