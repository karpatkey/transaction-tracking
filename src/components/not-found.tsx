import {Box} from "@mui/material";
import CustomTypography from "@/components/custom-typography";
import React from "react";

type Props = {
    title?: string
}

export const NotFound = ({title = 'DAO not found'} : Props) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px 20px',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px 20px',
            }}>
                <CustomTypography variant={'h1'}>{title}</CustomTypography>
            </Box>
        </Box>
    )
}
