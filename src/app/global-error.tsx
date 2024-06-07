'use client'

import {Theme} from "@mui/system";
import {Button} from "@mui/material";
import BoxContainerWrapper from "@/components/wrappers/box-container-wrapper";
import CustomTypography from "@/components/custom-typography";

type Props = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function GlobalError({error, reset}: Props) {
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
