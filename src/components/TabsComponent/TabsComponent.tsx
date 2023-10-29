import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface TabsComponentProps {
    selectedTab: number;
    onTabChange: (newValue: number) => void;
}

const TabsComponent: React.FC<TabsComponentProps> = ({ selectedTab, onTabChange }) => {
    return (
        <Tabs
            centered
            value={selectedTab}
            onChange={(event, newValue) => onTabChange(newValue)}
        >
            <Tab label="Converter" />
            <Tab label="All Currencies" />
        </Tabs>
    );
};


export default TabsComponent;
