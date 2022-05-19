import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createRef, useEffect } from "react";
import clubLogo from '../images/logo.png';

function Login() {
    const username = createRef();
    const password = createRef();

    const auth = getAuth();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              window.location="/dashboard";
            } else {
            }
        });    
    }, [])
      
    const login = ()=> {
        const user = username.current.value;
        const pass = password.current.value;
        signInWithEmailAndPassword(auth, user, pass)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location="/dashboard";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    return <div style={{display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center'}}>
        <div style={{marginLeft: 'auto', marginRight: 'auto', background: '#333', width: '450px', borderRadius: 10 }}>
            <img src={clubLogo} width="100px" style={{marginTop: 30, marginBottom: 20}} />
            <h1 style={{color: '#FFF', marginTop: 10, marginBottom: 20}}>Login</h1>
            <div>
                <input ref={username} style={{height: '30px', width: '380px', padding: 5, fontSize: 18, paddingLeft: 15, paddingRight: 15, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#fff', outline: 0, border: 0, color: '#EEE'}} type="text" placeholder="Username" />  
            </div>
            <div>
                <input ref={password}  style={{height: '30px', width: '380px', padding: 5, fontSize: 18, paddingLeft: 15, paddingRight: 15, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#555', outline: 0, border: 0, color: '#EEE'}} type="password" placeholder="Password" autoComplete="on" />
            </div> 
            <button style={{fontSize: 18, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#222', outline: 0, border: 0, padding: 10, paddingLeft: 50, paddingRight: 50, color: '#EEE'}} onClick={login}>Login</button>
        </div>
    </div>
}

export default Login;