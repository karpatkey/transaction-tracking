"use client";
import {Box, Link} from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import CustomTypography from "@/components/CustomTypography";
import BoxWrapperRow from "@/components/wrappers/BoxWrapperRow";
import Github from "@/components/assets/icons/socials/Github";
import Twitter from "@/components/assets/icons/socials/Twitter";
import Mirror from "@/components/assets/icons/socials/Mirror";
import Linkedin from "@/components/assets/icons/socials/Linkedin";
import {DRAWER_WIDTH} from "@/components/layout/Sidebar";
import {useUser} from "@auth0/nextjs-auth0/client";

const CustomTypographyFooter = styled(CustomTypography)({
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '34px',
    color: '#232323'
})

const Footer = () => {
    const {user} = useUser()

    const year = new Date()
    const fullYear = year.getFullYear()

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
                width: user? `calc(100% - ${DRAWER_WIDTH}px)`: '100%',
                ml: user? `${DRAWER_WIDTH}px`: 0
            }}
        >
            <BoxWrapperRow>
                <CustomTypographyFooter>© {fullYear} karpatkey • &nbsp;</CustomTypographyFooter>
                <Link
                    href={`https://drive.google.com/drive/folders/1-RaGdsneMJ1sznUkzBw2CCWlLlO_EAJB`}
                    target="_blank"
                    sx={{ color: 'black' }}
                >
                    <CustomTypographyFooter sx={{ fontWeight: 500 }}>press kit</CustomTypographyFooter>
                </Link>
            </BoxWrapperRow>
            <BoxWrapperRow gap={4}>
                <Link href={`https://github.com/karpatkey`} target="_blank">
                    <Github height={24} width={24} />
                </Link>
                <Link href={`https://twitter.com/karpatkey`} target="_blank">
                    <Twitter height={24} width={24} />
                </Link>
                <Link href={`https://mirror.xyz/karpatkey.eth`} target="_blank">
                    <Mirror height={24} width={24} />
                </Link>
                <Link href={`https://www.linkedin.com/company/karpatkey/mycompany/`} target="_blank">
                    <Linkedin height={24} width={24} />
                </Link>
            </BoxWrapperRow>
        </Box>
    )
}

export default Footer
