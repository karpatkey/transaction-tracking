"use server";
import CustomTypography from "@/components/custom-typography";
import BoxWrapperColumn from "@/components/wrappers/box-wrapper-column";
import {Box} from "@mui/material";
import {redirect} from "next/navigation";
import {AppRouterPageRoute, getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";

const Page: AppRouterPageRoute = withPageAuthRequired(
    async ()=> {
        const session = await getSession()
        const error = session?.error

        if (error) redirect('/500')

        return (
            <BoxWrapperColumn gap={1}>
                <CustomTypography variant={'h5'}>Contacts</CustomTypography>
                <Box sx={{
                    color: 'customPalette.black.primary',
                    backgroundColor: 'background.paper',
                }}>
                    Add contacts
                </Box>
            </BoxWrapperColumn>
        )
    },  { returnTo: "/" })

export default Page
