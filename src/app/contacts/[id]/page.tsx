"use server";
import CustomTypography from "@/components/custom-typography";
import {Box} from "@mui/material";
import {redirect} from "next/navigation";
import {AppRouterPageRoute, getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";
import {DAOs as DAOsConfig, mapDAOs} from "@/config/app";
import React from "react";
import Sidebar, {DRAWER_WIDTH} from "@/components/layout/sidebar";
import {inverse} from "@/utils/object";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const Page: AppRouterPageRoute = withPageAuthRequired(
    async ({ params, searchParams,}: Props)=> {
        const session = await getSession()
        const error = session?.error
        const user = session?.user

        if (error) redirect('/500')
        if (!user) redirect('/')

        // get roles from session
        const roles = user?.['http://localhost:3000/roles']
            ? (user?.['http://localhost:3000/roles'] as unknown as string[])
            : []

        // DAOs from user roles
        const DAOs: string[] = roles

        // DAO from params
        const DAOId = params.id

        // check if DAO exists
        const DAOItem = DAOsConfig.find((dao: {id: string, name: string}) =>
            dao.name.toLowerCase() === DAOId.toLowerCase() && DAOs.includes(inverse(mapDAOs)[DAOId]))

        if(!DAOItem) {
            return <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px 20px',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px 20px',
                }}>
                    <CustomTypography variant={'h1'}>DAO not found</CustomTypography>
                </Box>
            </Box>
        }

        return (
            <>
                <Sidebar DAO={DAOItem} withFilters={false}/>
                <Box
                    component="main"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        padding: '24px',
                        width:  `100%`,
                        pl: `${DRAWER_WIDTH + 24}px`,
                        backgroundColor: 'background.default',
                        position: 'absolute',
                    }}
                >
                    <CustomTypography variant={'h5'}>Contacts</CustomTypography>
                </Box>
            </>
        )
    },  { returnTo: "/" })

export default Page
