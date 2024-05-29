"use client";
import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import Header, {HEADER_HEIGHT} from "@/components/layout/Header";
import Footer, {FOOTER_HEIGHT} from "@/components/layout/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutWrapper = styled(Box)(() => ({
  display: 'grid',
  gap: '0px 0px',
  minHeight: '100vh',
  backgroundColor: '#eeeded',
  gridTemplateRows: `${HEADER_HEIGHT}px auto ${FOOTER_HEIGHT}px`,
  gridTemplateColumns: `auto`,
  gridTemplateAreas: `"header"
                      "body"
                      "footer"`
}))

const Layout = ({ children }: LayoutProps): React.ReactNode => {
  return (
    <LayoutWrapper sx={{paddingLeft: '48px', paddingRight: '48px'}}>
      <Box
        sx={{
          gridArea: 'header',
          width: '100%',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          minHeight: HEADER_HEIGHT
        }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          gridArea: 'body',
          width: '100%',
          minHeight: '100%',
          overflowY: 'auto',
            backgroundColor: '#eeeded',
        }}
      >
        {children}
      </Box>
      <Box sx={{ gridArea: 'footer', width: '100%' }}>
        <Footer />
      </Box>
    </LayoutWrapper>
  )
}

export default Layout
