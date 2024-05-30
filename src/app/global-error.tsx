'use client'

import BoxContainerWrapper from "@/components/wrappers/BoxContainerWrapper";
import {Theme} from "@mui/system";
import CustomTypography from "@/components/CustomTypography";
import {Button} from "@mui/material";

export default function GlobalError({error, reset,}: { error: Error & { digest?: string ,reset: () => void }}) {
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
            <Button onClick={() => reset()}>Try again</Button>
        </BoxContainerWrapper>
    )
}
