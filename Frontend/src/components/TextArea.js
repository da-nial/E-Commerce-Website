import React from 'react';

import "../assets/css/components/TextAreaStyle.css";


function TextArea(props) {
    return (
        <div className={"textarea__wrapper " + props.className}>
            <label className="textarea__label" htmlFor="address">آدرس</label>
            <textarea className="textarea__textarea" type="textarea" id="address" name="address"
                      placeholder="آدرس خود را وارد کنید. . ."
                      rows="4" cols="5">
                    </textarea>
        </div>
    );
}

export default TextArea;