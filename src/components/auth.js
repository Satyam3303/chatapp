import { auth, provider } from '../firebase-config.js';
import { signInWithPopup } from 'firebase/auth';

import Cookies from 'universal-cookie';
import './auth.css';
const cookies = new Cookies();

export const Auth = (props) =>{
    const {setIsAuth} = props
    const signinwithgoogle = async () => {
        try{
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        }
        catch(err){
            console.error(err);
        }
    };

    return(
    <div className="container">
    <div className="auth">
        Welcome to the chat Application, Please Sign In to Continue
        <p> Sign in with google</p>
        <button onClick={signinwithgoogle}> Sign In With Google</button>
    </div>
    </div>
    );
}