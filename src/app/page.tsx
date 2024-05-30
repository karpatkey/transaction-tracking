"use client";
import CustomTypography from "@/components/CustomTypography";
import BoxContainerWrapper from "@/components/wrappers/BoxContainerWrapper";
import {Theme} from "@mui/system";
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/navigation'
import Loading from "@/components/Loading";

export default function Home() {
    const {user, isLoading, error} = useUser()
    const {push} = useRouter()

    if (error) push('/500')
    if (isLoading) return <Loading/>;

    if (!user) {
        return (
            <BoxContainerWrapper
                sx={{ backgroundColor: (theme: Theme) => theme.palette.background.default}}>
                <CustomTypography
                    variant="h3"
                    sx={{
                        height: `calc(100vh - 194px)`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    To view the transactions you need to Login
                </CustomTypography>
            </BoxContainerWrapper>
        )
    }
    push('/transactions')
    return <></>
}
