import React, {useState} from 'react';

import "../assets/css/screens/adminProfileScreenStyle.css";
import RegisterEditView from "../views/RegisterEditView";
import Table from "../components/Table";
import {sampleCategories, sampleAdminReceipts} from "../assets/data/sampleData";
import TabMenu from "../components/TabMenu";

function AdminProfileScreen(props) {
    const [curTab, setCurTab] = useState(0);

    const tabs = [
        {
            name: "لیست کالاها",
            index: 0,
            component: <RegisterEditView type="edit"/>
        },
        {
            name: "لیست دسته‌ها",
            index: 1,
            component: <Table data={sampleCategories} className={"userProfileScreen__table"}/>,
        },
        {
            name: "رسیدها",
            index: 2,
            component: <Table data={sampleAdminReceipts} className={"userProfileScreen__table"}/>,
        }
    ]

    return (
        <div className={"adminProfileScreen " + props.className}>
            <section className="adminProfileScreen__welcomeSection">
                <h1 className="adminProfileScreen__welcome">
                    ادمین عزیز، خوش آمدید
                </h1>
            </section>

            <TabMenu
                tabs={tabs}
                setCurTab={setCurTab}
                curTab={curTab}
                className="adminProfileScreen__tab"/>
            {tabs[curTab].component}
        </div>
    );
}

export default AdminProfileScreen;