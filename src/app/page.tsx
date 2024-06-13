"use server";
import CustomTypography from "@/components/custom-typography";
import BoxContainerWrapper from "@/components/wrappers/box-container-wrapper";
import {redirect} from 'next/navigation'
import {getSession} from "@auth0/nextjs-auth0";

export default async function Home()  {
    const session = await getSession()
    const user = session?.user
    const error = session?.error

    if (error) redirect('/500')

    if (!user) {
        return (
            <BoxContainerWrapper
                sx={{ backgroundColor: 'background.default'}}>
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
    redirect('/dao')
}
