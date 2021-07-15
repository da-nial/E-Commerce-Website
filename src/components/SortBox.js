import React from 'react';
import "../assets/css/components/sortBoxStyle.css"

function SortBox(props) {
    return (
        <div className="sortBox">
            <h4 className="sortBox__header">
                مرتب‌سازی بر اساس:
            </h4>
            <ul className="sortBox__ul">
                <li>
                    <button>
                        بیش‌ترین فروش
                    </button>
                </li>
                <li>
                    <button>
                        قیمت
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default SortBox;