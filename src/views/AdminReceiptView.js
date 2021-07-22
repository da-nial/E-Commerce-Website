import React from 'react';
import Table from "../components/Table";
import tableRows, {sampleAdminReceipts} from "../assets/data/sampleData";
import TextInput from "../components/TextInput";

import "../assets/css/views/adminReceiptViewStyle.css";


function AdminReceiptView(props) {
    const receiptInput = {
        name: "جستجوی کد پیگیری",
        id: "email",
        type: "email",
        placeholder: "کد پیگیری را برای جستجو وارد کنید . . .",
        required: true
    }

    return (
        <div className="adminReceiptView">
            <span className="adminReceiptView__trackCodeInput">
                <TextInput inputProps={receiptInput}/>
            </span>
            <Table data={sampleAdminReceipts} className={"adminProfileScreen__table"}/>
        </div>
    );
}

export default AdminReceiptView;