import { IKContext, IKUpload } from 'imagekitio-react';
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import clubLogo from '../images/logo.png';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


export default function AddPhoto() {
    
    const [image, setImage] = useState('')
    const [srcSet, setSecSet] = useState('https://ik.imagekit.io/mclubsist/image_K8j1sQhDc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653135300309')
    const publicKey=process.env.REACT_APP_URL_PBK;
    const urlEndpoint=process.env.REACT_APP_URL_ENDPOINT;
    const authenticationEndpoint=process.env.REACT_APP_ENDPOINT+"/auth"
    
    const onSuccess = (res) => {
        console.log(res.url);
        setImage(res.url);
        setSecSet('');
        alert('uploaded');
    }
    const onError = (err)=>{
        console.log(err);
    }

    const [view, setView] = useState({display: 'none', height: '0px'});
    const [path, setPath] = useState(
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FFFFFF80" class="bi bi-list" viewBox="0 0 16 16" >
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>);
    function addPhoto(){
        if(view.height === '0px'){
            setView({height: '200px', animation: 'navDropdown--close 0.6s ease-in'})
            setPath(
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FFFFFF80" class="bi bi-list" viewBox="0 0 16 16" >
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
                );
        } else {
            setView({height: '0px', animation: 'navDropdown--open 0.6s ease-in'})
            setPath(
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FFFFFF80" class="bi bi-list" viewBox="0 0 16 16" >
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>);
        }
    }

    const auth = getAuth();
    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (!user) {
            window.location='/login';
        }
        });
    }, []);
    const signout = () =>{
        signOut(auth).then(() => {
            window.location = '/login'
          }).catch((error) => {
            // An error happened.
          });
          
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', color: 'white'}}>
        <div>
            <div className='navbar'>
                <div className='navbar--container'>
                    <div className='navbar--left'>
                        <Link to="/">
                            <img src={clubLogo} height={48} alt='Microsoft Club Sathyabama - Logo'
                                style={{
                                    //borderRadius: "100%"
                                }} />
                        </Link>
                        <div className='club---name'
                            style={{ 
                                flexDirection: 'column', 
                                justifyContent: 'center', 
                            }}>
                            <Link to="/dashboard"
                                style={{
                                    color: "#CCC", 
                                    fontSize: '18px',
                                    fontFamily: 'Montserrat',
                                    fontWeight: '600',
                                    marginLeft: '5px',
                                    textDecoration: 'none'}}>
                                Microsoft Club SIST | Admin Panel
                            </Link>
                        </div>
                    </div>
                    <div className='navbar--right'>
                        <button style={{fontSize: 18, marginTop: 10, marginBottom: 10, borderRadius: 5, background: '#FF3838', outline: 0, border: 0, padding: 10, paddingLeft: 30, paddingRight: 30, color: '#EEE'}} onClick={signout}>Log Out</button>
                    </div>
                </div>
            </div>
            <div className='navbar-dummy'></div>
        </div>

        <div style={{
            marginLeft: 'auto', 
            marginRight: 'auto', 
            marginTop: 60, 
            marginBottom: 50, 
            paddingBottom: 20, 
            background: '#333', 
            width: '450px', 
            borderRadius: 10 }}>
            <div style={{textAlign: 'start', paddingLeft: 20}}>
                <IKContext
                    publicKey={publicKey} 
                    urlEndpoint={urlEndpoint} 
                    authenticationEndpoint={authenticationEndpoint} 
                >
                    <h1 style={{color: '#FFF', textAlign: 'center', marginTop: 30, marginBottom: 10}}>Upload Photo</h1>
                    <br/>
                    <img src={image} alt={"NO PHOTO"} srcSet={srcSet} width="410px" />
                    <IKUpload
                    style={{ marginTop: 10 }}
                    folder="GalleryPost"
                    fileName="test-upload.png"
                    onError={onError}
                    onSuccess={onSuccess}
                    />
                </IKContext>
            </div>
        </div>
    </div>
    );
}