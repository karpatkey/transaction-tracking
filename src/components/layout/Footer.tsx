"use client";
import { Link } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import BoxWrapperColumn from "@/components/wrappers/BoxWrapperColumn";
import CustomTypography from "@/components/CustomTypography";
import BoxWrapperRow from "@/components/wrappers/BoxWrapperRow";
import Github from "@/components/assets/icons/socials/Github";
import Twitter from "@/components/assets/icons/socials/Twitter";
import Mirror from "@/components/assets/icons/socials/Mirror";
import Linkedin from "@/components/assets/icons/socials/Linkedin";

export const FOOTER_HEIGHT = 100

const FooterWrapper = styled(BoxWrapperColumn)(({ theme }: any) => ({
    backgroundColor: theme.palette.background.default,
    height: FOOTER_HEIGHT,
    paddingRight: '48px',
    paddingLeft: '48px',
    paddingTop: '24px',
    paddingBottom: '24px',
    justifyContent: 'center',
    gap: 20
}))

const CustomTypographyFooter = styled(CustomTypography)({
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '34px',
    color: '#232323'
})

const Footer = () => {
    const year = new Date()
    const fullYear = year.getFullYear()

    return (
            <FooterWrapper>
                <BoxWrapperRow sx={{ justifyContent: 'space-between' }}>
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
                </BoxWrapperRow>
            </FooterWrapper>
    )
}

export default Footer
