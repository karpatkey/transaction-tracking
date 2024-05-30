'use client';
import DataTable from "@/components/Datatable";
import CustomTypography from "@/components/CustomTypography";
import BoxWrapperColumn from "@/components/wrappers/BoxWrapperColumn";
import {Box} from "@mui/material";

export default function Page() {
    return (
        <BoxWrapperColumn gap={1}>
            <CustomTypography variant={'h5'}>Treasury transactions</CustomTypography>
            <Box sx={{
                color: 'custom.black.primary',
                backgroundColor: 'background.paper',
            }}>
                <DataTable />
            </Box>
        </BoxWrapperColumn>
    )
}
