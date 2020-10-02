import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react'
import './Login.css';

import {auth} from './firebase.js';

function Login() {
    const history = useHistory();

    const [email, setMail] = useState('');
    const [mdp,setMdp] = useState('');

    const signIn = e => {
        e.preventDefault(); {/*don't refresh*/}

        auth.signInWithEmailAndPassword(email,mdp)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

    }

    const signUp = e => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, mdp)
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/langfr-280px-Amazon_logo.svg.png"></img>
            </Link>

            <div className="login__container">
                <h1>Se connecter</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setMail(e.target.value)}></input>
                    <h5>Mot de passe</h5>
                    <input type='password' value={mdp} onChange={e => setMdp(e.target.value)}></input>
                    <button className="login__signIn" onClick={signIn}>Conexion</button>
                </form>
                <p>En signant vous accepteez les termes d'utilisation.</p>
                <button className="login__signUp" onClick={signUp}>S'inscrire</button>
            </div>
            
        </div>
    )
}

export default Login;
