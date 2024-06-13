"use server";
import {Box} from "@mui/material";
import {redirect} from "next/navigation";
import {AppRouterPageRoute, getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";
import React from "react";
import {DAO} from "@/components/dao";

const Page: AppRouterPageRoute = withPageAuthRequired(
    async () => {
        const session = await getSession()
        const error = session?.error
        const user = session?.user

        if (error) redirect('/500')
        if (!user) redirect('/')

        // get roles from session
        const roles = user?.['http://localhost:3000/roles']
            ? (user?.['http://localhost:3000/roles'] as unknown as string[])
            : []

        const DAOs: string[] = roles

        return (
            <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px 20px',
            }}>
            {
                DAOs.map((DAOItem: string) => {
                    return <DAO value={DAOItem} />
                })
            }
            </Box>
        )

    }, {returnTo: "/"})

export default Page
