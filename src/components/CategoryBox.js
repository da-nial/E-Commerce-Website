import React from 'react';

import "../assets/css/components/categoryBox.css"

function CategoryBox(props) {
    return (
        <div className="categoryBox">
            متن الکی
            <form className="categoryBox__form">
                <h4 className="categoryBox__title">
                    دسته‌بندی‌ها
                </h4>

                <hr className="categoryBox__divider"/>

                <ul className="categoryBox__ul">
                    <li>
                        <input type="checkbox" id="category1" name="category" value="دسته‌بندی یک"/>
                        <label for="category1">دسته‌بندی یک</label>
                    </li>

                    <li>
                        <input type="checkbox" id="category2" name="category" value="دسته‌بندی دو"/>
                        <label htmlFor="category2">دسته‌بندی دو</label>

                    </li>

                    <li>
                        <input type="checkbox" id="category3" name="category" value="دسته‌بندی سه"/>
                        <label htmlFor="category3">دسته‌بندی سه</label>
                    </li>

                </ul>
            </form>
        </div>
    );
}

export default CategoryBox;