import React from 'react';

import "../assets/css/screens/userProfileStyle.css";

function UserProfileScreen(props) {
    return (
        <div className={"userProfileScreen " + props.className}>
            <h1 className="userProfileScreen__title">
                هادی عزیز، خوش آمدید
            </h1>

            <div className="userProfileScreen__tab">
                <button>
                    پروفایل
                </button>

                <button className="button2">
                    رسیدها
                </button>

                <button>
                    یه چیز دیگه
                </button>
            </div>

            <table className="userProfileScreen__table" cellSpacing="10" cellPadding="1">
                <thead>
                <tr>
                    <th><span> کد پیگیری</span></th>
                    <th><span>کالا</span></th>
                    <th><span>قیمت پرداخت شده</span></th>
                    <th><span>آدرس ارسال شده</span></th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td><span>۱۲۳۴۵۶</span></td>
                    <td><span>موس گیمینگ ریزر</span></td>
                    <td><span>10,000 تومان</span></td>
                    <td><span>تهران، تهران، امیرکبیر</span></td>
                </tr>

                <tr>
                    <td><span>۱۲۳۴۵۶</span></td>
                    <td><span>موس گیمینگ ریزر</span></td>
                    <td><span>10,000 تومان</span></td>
                    <td><span>تهران، تهران، امیرکبیر</span></td>
                </tr>

                <tr>
                    <td><span>۱۲۳۴۵۶</span></td>
                    <td><span>موس گیمینگ ریزر</span></td>
                    <td><span>10,000 تومان</span></td>
                    <td><span>تهران، تهران، امیرکبیر</span></td>
                </tr>

                <tr>
                    <td><span>۱۲۳۴۵۶</span></td>
                    <td><span>موس گیمینگ ریزر</span></td>
                    <td><span>10,000 تومان</span></td>
                    <td><span>تهران، تهران، امیرکبیر</span></td>
                </tr>

                <tr>
                    <td><span>۱۲۳۴۵۶</span></td>
                    <td><span>موس گیمینگ ریزر</span></td>
                    <td><span>10,000 تومان</span></td>
                    <td><span>تهران، تهران، امیرکبیر</span></td>
                </tr>

                <tr>
                    <td><span>۱۲۳۴۵۶</span></td>
                    <td><span>موس گیمینگ ریزر</span></td>
                    <td><span>10,000 تومان</span></td>
                    <td><span>تهران، تهران، امیرکبیر</span></td>
                </tr>


                {/*<tr>*/}
                {/*    <td colSpan="4">*/}
                {/*        <hr/>*/}
                {/*    </td>*/}
                {/*</tr>*/}

                {/*<tr>*/}
                {/*    <td>۱۲۳۴۵۶</td>*/}
                {/*    <td>موس گیمینگ ریزر</td>*/}
                {/*    <td>10,000 تومان</td>*/}
                {/*    <td>تهران، تهران، امیرکبیر</td>*/}
                {/*</tr>*/}

                </tbody>
            </table>

        </div>
    );
}

export default UserProfileScreen;