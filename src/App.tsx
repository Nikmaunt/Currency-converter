import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MainContent from "./components/MainContent/MainContent";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";


const App: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);


    return (
        <ErrorBoundary>
        <Grid container>
            <Grid item xs={12}>
                <MainContent selectedTab={selectedTab} onTabChange={setSelectedTab} />
            </Grid>
        </Grid>
        </ErrorBoundary>
    );
};

export default App;