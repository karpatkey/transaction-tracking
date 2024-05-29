import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import {Avatar, Button} from '@mui/material'
import { useRouter } from 'next/navigation'
import BoxWrapperRow from "@/components/wrappers/BoxWrapperRow";
import CustomTypography from "@/components/CustomTypography";
import LogoKarpatkey from "@/components/LogoKarpatkey";

export const HEADER_HEIGHT = 100

interface NotLoggedProps {
    onLogin: any
}

const NotLogged = ({onLogin}: NotLoggedProps) => {
    return (
        <Button onClick={onLogin} sx={{ gap: 2, height: '48px', padding: '6px 14px' }}>
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
    const { name, image, onLogout } = props

    return (
        <BoxWrapperRow sx={{ height: 'inherit'}}>
            <BoxWrapperRow  sx={{ height: 'inherit'}}>
                <Avatar alt={name} src={image} />
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
            <Button onClick={onLogout} sx={{ gap: 2, height: '48px', padding: '6px 14px' }}>
                Logout
            </Button>
        </BoxWrapperRow>
    )
}

const Header = () => {
    const { user, isLoading } = useUser()
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
        <BoxWrapperRow
            sx={{
                backgroundColor: 'background.default',
                justifyContent: 'space-between',
                height: HEADER_HEIGHT
            }}
        >
            <LogoKarpatkey />
            <BoxWrapperRow sx={{height: '100%'}}>
                {!isLoading ? (
                    !user ? (
                        <NotLogged onLogin={onLogin}/>
                    ) : (
                        <Logged {...loggedComponentProps} />
                    )
                ) : null}
            </BoxWrapperRow>
        </BoxWrapperRow>
    )
}

export default Header
