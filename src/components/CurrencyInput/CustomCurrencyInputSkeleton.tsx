import React from "react";
import Skeleton from "@mui/material/Skeleton";

const CustomCurrencyInputSkeleton: React.FC = () => {
    const numberOfSkeletons = 4;

    const skeletons = Array.from({ length: numberOfSkeletons }, (_, index) => (
        <Skeleton key={index} variant="text" width={220} height={48} />
    ));

    return <div>{skeletons}</div>;
};

export default CustomCurrencyInputSkeleton;
