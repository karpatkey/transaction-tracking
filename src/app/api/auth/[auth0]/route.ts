// app/api/auth/[auth0]/route.js
import {handleAuth, handleCallback,  handleLogin} from '@auth0/nextjs-auth0';
import {NextApiRequest, NextApiResponse} from "next";
import {redirect} from "next/navigation";

export const GET = handleAuth({
    login: handleLogin({
        authorizationParams: {
            prompt: 'login'
        },
        returnTo: '/'
    }),
    signup: handleLogin({
        authorizationParams: {
            prompt: 'login',
            screen_hint: 'login'
        },
        returnTo: '/'
    }),
    onError(req: NextApiRequest, res: NextApiResponse) {
        // console.log('res', res, req)
        // res.statusCode = 302;
        // res.setHeader('Location', '/errors/500');
        redirect('/errors/500')
    }
});
