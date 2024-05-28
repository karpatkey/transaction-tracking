"use client";
import BoxContainerWrapper from "@/components/wrappers/BoxContainerWrapper";
import {Theme} from "@mui/system";
import CustomTypography from "@/components/CustomTypography";

export default function Page() {
    return (
        <BoxContainerWrapper
            sx={{height: '100%', backgroundColor: (theme: Theme) => theme.palette.background.default}}>
            <CustomTypography
                variant="h3"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                There was an error, contact a site administrator.
            </CustomTypography>
        </BoxContainerWrapper>
    )
}
