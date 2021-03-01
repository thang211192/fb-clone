import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import "./Login.css";
import { actionTypes } from './reducer';
import { useReducerContext } from './StateProvider';


function Login({src, srcIcon}) {
    const [ x, dispatchx] = useReducerContext();
    console.log('x: ',x);

    const signIn = () => {
        //sign in...
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatchx({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
           

    };
    return <div className='login'>
            <div className='login__logo'>
                <img src={src} alt=''/>
                <img src={srcIcon} alt=''/>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
}

export default Login
