"use client";
import CustomTypography from "@/components/CustomTypography";
import BoxContainerWrapper from "@/components/wrappers/BoxContainerWrapper";
import {Theme} from "@mui/system";
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/navigation'

export default function Home() {
    const {user, error} = useUser()
    const {push} = useRouter()

    if (error) push('/500')

    if (!user) {
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
                    To view the transactions you need to Login
                </CustomTypography>
            </BoxContainerWrapper>
        )
    }
    push('/transactions')
    return <></>
}
