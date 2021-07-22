import React, {useState} from 'react';

import "../assets/css/screens/adminProfileScreenStyle.css";
import RegisterEditView from "../views/RegisterEditView";
import Table from "../components/Table";
import {sampleCategories, sampleAdminReceipts} from "../assets/data/sampleData";
import TabMenu from "../components/TabMenu";
import AdminReceiptView from "../views/AdminReceiptView";
import AdminProductView from "../views/AdminProductView";
import AdminCategoryView from "../views/AdminCategoryView";

function AdminProfileScreen(props) {
    const [curTab, setCurTab] = useState(0);

    const tabs = [
        {
            name: "لیست کالاها",
            index: 0,
            component: <AdminProductView/>
        },
        {
            name: "لیست دسته‌ها",
            index: 1,
            component: <AdminCategoryView/>,
        },
        {
            name: "رسیدها",
            index: 2,
            component: <AdminReceiptView/>,
        }
    ]

    return (
        <div className={"adminProfileScreen " + "app__content"}>
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