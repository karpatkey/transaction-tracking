"use client";
import React from 'react'
import {useUser} from '@auth0/nextjs-auth0/client'
import {AppBar, Avatar, Box, Button, Divider, Menu, MenuItem, Toolbar} from '@mui/material'
import {useRouter} from 'next/navigation'
import BoxWrapperRow from "@/components/wrappers/box-wrapper-row";
import CustomTypography from "@/components/custom-typography";
import LogoKarpatkey from "@/components/logo-karpatkey";
import {mapDAOs} from "@/config/app";

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
    const router = useRouter()

    const {name, image, onLogout} = props
    const data =  useUser()
    const user = data?.user || {}

    const roles = user?.['http://localhost:3000/roles']
        ? (user?.['http://localhost:3000/roles'] as unknown as string[])
        : []

    const DAOs: string[] = roles

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const goToDao = (DAOItem: string) => {
        router.push(`/dao/${DAOItem}`)
    }

    return (
        <BoxWrapperRow sx={{height: 'inherit'}}>
            <BoxWrapperRow sx={{height: 'inherit'}}>
                <Avatar alt={name} src={image}/>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    {name?.trim()}
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        DAOs.map((DAOItem: string) => {
                            const item = mapDAOs[DAOItem]
                            return <MenuItem onClick={()=> goToDao(item)} key={item}>{item}</MenuItem>
                        })
                    }
                    <MenuItem onClick={onLogout}>Logout</MenuItem>
                </Menu>
            </BoxWrapperRow>
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
