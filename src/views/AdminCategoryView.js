import React from 'react';
import {sampleCategories} from "../assets/data/sampleData";
import Table from "../components/Table";

function AdminCategoryView(props) {
    const data = sampleCategories

    const rows = data.map(name => {
        return {
            name: {name},
            operations: [
                <a>ویرایش دسته‌بندی</a>,
                <a>حذف دسته‌بندی</a>,
            ]

        }
    })

    console.log(rows)

    return (
        <div>
            <Table data={data} className={"userProfileScreen__table"}/>
        </div>
    );
}

export default AdminCategoryView;