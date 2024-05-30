import BoxContainerWrapper from "@/components/wrappers/BoxContainerWrapper";
import {Theme} from "@mui/system";
import CustomTypography from "@/components/CustomTypography";

export default function Page() {
    return (
        <BoxContainerWrapper
            sx={{height: '100%', backgroundColor: 'background.default'}}>
            <CustomTypography
                variant="h3"
                sx={{
                    height: `calc(100vh - 194px)`,
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
