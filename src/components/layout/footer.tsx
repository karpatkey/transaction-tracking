"use client";
import {Box, Link} from '@mui/material'
import React from 'react'
import CustomTypography from "@/components/custom-typography";
import BoxWrapperRow from "@/components/wrappers/box-wrapper-row";
import Github from "@/components/assets/icons/socials/github";
import Twitter from "@/components/assets/icons/socials/twitter";
import Mirror from "@/components/assets/icons/socials/mirror";
import Linkedin from "@/components/assets/icons/socials/linkedin";
import {DRAWER_WIDTH} from "@/components/layout/sidebar";
import {useParams, usePathname} from 'next/navigation'

const pathnameWithReducedDrawerWidth = [
    '/dao',
]

const Footer =  () => {
    const year = new Date()
    const fullYear = year.getFullYear()

    const params = useParams();
    const pathname = usePathname()
    const id = params?.id || ''
    const pathnameWithoutId = pathname.replace(`/${id}`, '')

    const isReducedDrawerWidth = pathnameWithReducedDrawerWidth.includes(pathnameWithoutId)

    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                px: 3,
                mt: 'auto',
                backgroundColor: 'background.default',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bottom: 0,
                width: isReducedDrawerWidth ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%',
                ml: isReducedDrawerWidth ? `${DRAWER_WIDTH}px` : 0
            }}
        >
            <BoxWrapperRow>
                <CustomTypography sx={{
                    fontFamily: 'IBM Plex Sans',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '34px',
                    color: 'primary.main'
                }}>© {fullYear} karpatkey • &nbsp;</CustomTypography>
                <Link
                    href={`https://drive.google.com/drive/folders/1-RaGdsneMJ1sznUkzBw2CCWlLlO_EAJB`}
                    target="_blank"
                    sx={{color: 'black'}}
                >
                    <CustomTypography sx={{
                        fontFamily: 'IBM Plex Sans',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '34px',
                        color: 'primary.main'
                    }}>press kit</CustomTypography>
                </Link>
            </BoxWrapperRow>
            <BoxWrapperRow gap={4}>
                <Link href={`https://github.com/karpatkey`} target="_blank">
                    <Github height={24} width={24}/>
                </Link>
                <Link href={`https://twitter.com/karpatkey`} target="_blank">
                    <Twitter height={24} width={24}/>
                </Link>
                <Link href={`https://mirror.xyz/karpatkey.eth`} target="_blank">
                    <Mirror height={24} width={24}/>
                </Link>
                <Link href={`https://www.linkedin.com/company/karpatkey/mycompany/`} target="_blank">
                    <Linkedin height={24} width={24}/>
                </Link>
            </BoxWrapperRow>
        </Box>
    )
}

export default Footer
