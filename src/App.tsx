import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MainContent from "./components/MainContent/MainContent";

const App: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);

    return (
        <Grid container>
            {/*<Header/>*/}
            <Grid item xs={12}>
                <MainContent selectedTab={selectedTab} onTabChange={setSelectedTab}  />
            </Grid>
        </Grid>
    );
};

export default App;