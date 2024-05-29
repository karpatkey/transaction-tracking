'use client';
import DataTable from "@/components/Datatable";
import CustomTypography from "@/components/CustomTypography";
import BoxContainerWrapper from "@/components/wrappers/BoxContainerWrapper";
import BoxWrapperColumn from "@/components/wrappers/BoxWrapperColumn";
import {Box} from "@mui/material";

export default function Page() {
    return (
        <BoxContainerWrapper>
            <BoxWrapperColumn gap={5}>
                <CustomTypography variant={'h4'}>Treasury transactions</CustomTypography>
                <Box sx={{
                    color: 'custom.black.primary',
                    backgroundColor: 'background.paper',
                    "> tr": {
                        backgroundColor: 'background.paper',
                    }
                }}>
                    <DataTable />
                </Box>
            </BoxWrapperColumn>
        </BoxContainerWrapper>
    )
}
