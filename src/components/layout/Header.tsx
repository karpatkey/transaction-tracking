import React from 'react'
import {useUser} from '@auth0/nextjs-auth0/client'
import {AppBar, Avatar, Box, Button, Divider, Toolbar} from '@mui/material'
import {useRouter} from 'next/navigation'
import BoxWrapperRow from "@/components/wrappers/BoxWrapperRow";
import CustomTypography from "@/components/CustomTypography";
import LogoKarpatkey from "@/components/LogoKarpatkey";

interface NotLoggedProps {
    onLogin: any
}

const NotLogged = ({onLogin}: NotLoggedProps) => {
    return (
        <Button onClick={onLogin} sx={{gap: 2, height: '48px', padding: '6px 14px'}}>
            Login
        </Button>
    )
}

interface LoggedProps {
    name: string
    image: string
    onLogout: any
}

const Logged = (props: LoggedProps) => {
    const {name, image, onLogout} = props

    return (
        <BoxWrapperRow sx={{height: 'inherit'}}>
            <BoxWrapperRow sx={{height: 'inherit'}}>
                <Avatar alt={name} src={image}/>
                <CustomTypography sx={{
                    padding: '6px 14px',
                    alignItems: 'center',
                    wordWrap: 'break-word',
                    display: 'flex',
                    height: '100%'
                }}>
                    {name?.trim()}
                </CustomTypography>
            </BoxWrapperRow>
            <Button onClick={onLogout} sx={{gap: 2, height: '48px', padding: '6px 14px'}}>
                Logout
            </Button>
        </BoxWrapperRow>
    )
}

const Header = () => {
    const {user, isLoading} = useUser()
    const router = useRouter()

    const name = user?.name ?? ''
    const image = user?.picture ?? ''

    const onLogin = () => {
        router.push('/api/auth/login')
    }

    const onLogout = () => {
        router.push('/api/auth/logout')
    }

    const loggedComponentProps = {
        name,
        image,
        onLogout
    }

    return (
            <AppBar position="fixed" sx={{
                backgroundColor: 'background.default',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                boxShadow: 'none'
            }}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <LogoKarpatkey/>
                    <BoxWrapperRow sx={{height: '100%'}}>
                        {!isLoading ? (
                            !user ? (
                                <NotLogged onLogin={onLogin}/>
                            ) : (
                                <Logged {...loggedComponentProps} />
                            )
                        ) : null}
                    </BoxWrapperRow>
                </Toolbar>
                <Divider sx={{ position: 'fixed', width: '100%', top: '64px', left: 0 }} />
            </AppBar>
    )
}

export default Header
