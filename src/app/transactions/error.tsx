"use client";
import CustomTypography from "@/components/CustomTypography";
import {Theme} from "@mui/system";
import BoxContainerWrapper from "@/components/wrappers/BoxContainerWrapper";

export default function Error() {
    return (
        <BoxContainerWrapper
            sx={{backgroundColor: (theme: Theme) => theme.palette.background.default}}>
            <CustomTypography
                variant="h3"
                sx={{
                    height: `calc(100vh - 194px)`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                Something went wrong!
            </CustomTypography>
        </BoxContainerWrapper>
    )
}
