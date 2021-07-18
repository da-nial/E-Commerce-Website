import React from 'react';

import tableRows from "../assets/data/sampleData";

import "../assets/css/screens/userProfileStyle.css";
import Table from "../components/Table";

function UserProfileScreen(props) {
    return (
        <div className={"userProfileScreen " + props.className}>
            <h1 className="userProfileScreen__title">
                هادی عزیز، خوش آمدید
            </h1>

            <div className="userProfileScreen__tab">
                <button className="userProfileScreen__tab__button userProfileScreen__tab__button--selected">
                    پروفایل
                </button>

                <button className="userProfileScreen__tab__button">
                    رسیدها
                </button>

                <button className="userProfileScreen__tab__button">
                    یه چیز دیگه
                </button>
            </div>

            <Table data={tableRows} className={"userProfileScreen__table"}/>
        </div>
    );
}

export default UserProfileScreen;