import React from 'react';

import "../assets/css/components/tableStyle.css";

function Table(props) {
    const data = props.data

    const headers = Object.keys(data[0]);

    return (
        <table className={"table " + props.className} cellSpacing="10" cellPadding="1">
            <thead>
            <tr>
                {headers.map((header, index) => (
                    <th><span>{header}</span></th>
                ))}
            </tr>
            </thead>

            <tbody>
            {data.map(row => (
                <tr>
                    {headers.map(header => (
                        <td><span>{row[header]}</span></td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;