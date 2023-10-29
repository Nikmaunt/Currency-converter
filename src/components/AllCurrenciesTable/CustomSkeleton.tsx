import React from "react";
import Skeleton from "@mui/material/Skeleton";

const CustomSkeleton: React.FC = () => {

    return (
        <div>
            <Skeleton variant="text" width={220} height={48} />
        </div>
    );
};

export default CustomSkeleton;
