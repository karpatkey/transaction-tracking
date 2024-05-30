import DataTable from "@/components/Datatable";
import CustomTypography from "@/components/CustomTypography";
import BoxWrapperColumn from "@/components/wrappers/BoxWrapperColumn";
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
                <CustomTypography variant={'h5'}>Transactions</CustomTypography>
                <Box sx={{
                    color: 'custom.black.primary',
                    backgroundColor: 'background.paper',
                }}>
                    <DataTable/>
                </Box>
            </BoxWrapperColumn>
        )
    },  { returnTo: "/" })

export default Page
