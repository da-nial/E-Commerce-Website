import React, {useState} from 'react';

import tableRows from "../assets/data/sampleData";

import "../assets/css/screens/userProfileScreenStyle.css";
import Table from "../components/Table";
import TabMenu from "../components/TabMenu";
import RegisterEditView from "../views/RegisterEditView";

function UserProfileScreen(props) {
    const [curTab, setCurTab] = useState(0);

    const tabs = [
        {
            name: "پروفایل",
            index: 0,
            component: <RegisterEditView type="edit"/>
        },
        {
            name: "رسیدها",
            index: 1,
            component: <Table data={tableRows} className={"userProfileScreen__table"}/>,
        },
    ]

    return (
        <div className={"userProfileScreen " + props.className}>
            <section className="userProfileScreen__welcomeSection">
                <h1 className="userProfileScreen__welcome">
                    هادی عزیز، خوش آمدید |
                </h1>
                <h5 className="userProfileScreen__balance">
                    موجودی حساب شما: ۱۰,۰۰۰
                </h5>
                <button className="userProfileScreen__increaseBalanceButton">
                    افزایش موجودی
                </button>
            </section>

            <TabMenu
                tabs={tabs}
                setCurTab={setCurTab}
                curTab={curTab}
                className="userProfileScreen__tab"/>

            {tabs[curTab].component}
        </div>
    );
}

export default UserProfileScreen;