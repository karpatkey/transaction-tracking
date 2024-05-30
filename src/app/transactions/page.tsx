'use client';
import DataTable from "@/components/Datatable";
import CustomTypography from "@/components/CustomTypography";
import BoxWrapperColumn from "@/components/wrappers/BoxWrapperColumn";
import {Box} from "@mui/material";
import {useUser} from "@auth0/nextjs-auth0/client";
import {useRouter} from "next/navigation";
import Loading from "@/components/Loading";

interface PageProps {
    transactions: any[]
}

const Page = (props: PageProps) => {
    const { user, error, isLoading } = useUser();
    const {push} = useRouter()

    if (isLoading) return <Loading/>;
    if (error) push('/500')
    if(!user) push('/')

    return (
        user && (
            <BoxWrapperColumn gap={1}>
                <CustomTypography variant={'h5'}>Treasury transactions</CustomTypography>
                <Box sx={{
                    color: 'custom.black.primary',
                    backgroundColor: 'background.paper',
                }}>
                    <DataTable />
                </Box>
            </BoxWrapperColumn>
        )
    )
}

export default Page
