"use server";
import CustomTypography from "@/components/custom-typography";
import {Box} from "@mui/material";
import {redirect} from "next/navigation";
import {AppRouterPageRoute, getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";
import {DAOs as DAOsConfig, DAOType} from "@/config/app";
import React from "react";
import Sidebar from "@/components/layout/sidebar";
import {NotFound} from "@/components/not-found";
import dynamic from 'next/dynamic'

const ContactsWithNoSSR = dynamic(() =>
        import('@/components/contacts').then((mod) => mod.Contacts),
    { ssr: false }
)

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

        if(DAOs.length === 0) {
            return <NotFound title={'No DAOs found'} />
        }

        // DAO from params
        const DAOIdItem = params.id

        const DAOId = DAOIdItem.replaceAll('%20', ' ')


        // Check if DAO exists
        const DAOItem = DAOsConfig.find((daoConfig: DAOType) => {
            return daoConfig.name.toLowerCase() === DAOId.toLowerCase()
        })

        if(!DAOItem) {
            return <NotFound />
        }

        // Check if DAO exists in the roles
        if(!DAOItem || !DAOs.includes(DAOItem.role)) {
            return <NotFound />
        }

        return (
            <>
                <Sidebar DAO={DAOItem} withFilters={false}/>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        width:  `100%`,
                        backgroundColor: 'background.default',
                    }}
                >
                    <CustomTypography variant={'h5'}>Contacts</CustomTypography>
                    <ContactsWithNoSSR />
                </Box>
            </>
        )
    },  { returnTo: "/" })

export default Page
