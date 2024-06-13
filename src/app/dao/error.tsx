"use client";
import CustomTypography from "@/components/custom-typography";
import BoxContainerWrapper from "@/components/wrappers/box-container-wrapper";

export default function Error() {
    return (
        <BoxContainerWrapper
            sx={{backgroundColor:  'background.default'}}>
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
