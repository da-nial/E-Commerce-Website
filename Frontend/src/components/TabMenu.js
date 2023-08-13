import React from 'react';

import "../assets/css/components/tabMenuStyle.css";


function TabMenu(props) {
    const tabs = props.tabs
    const setCurTab = props.setCurTab
    const curTab = props.curTab

    return (
        <div className={"tabMenu " + props.className}>
            {tabs.map(tab => (
                <button
                    className={"tabMenu__button " + (tab.index === curTab ? "tabMenu__button--selected" : "")}
                    onClick={() => setCurTab(tab.index)}
                >
                    {tab.name}
                </button>
            ))}
        </div>
    );
}

export default TabMenu;