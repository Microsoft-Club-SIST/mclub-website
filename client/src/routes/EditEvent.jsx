import { createRef } from "react";
import { deleteEvent, editEvent, getEvent } from "../Firebase";
import { IKContext, IKUpload } from 'imagekitio-react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import '../App.css';
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import clubLogo from '../images/logo.png';

export default function EditEvent() {
    const title = createRef();
    const link = createRef();
    const date = createRef();
    const desc = createRef();
    const [image, setImage] = useState('')
    const [ID, setID] = useState(0)
    const [events, setEvents] = useState([{event: "Loading..."}]);
    let option = createRef();
    const [srcSet, setSecSet] = useState('https://ik.imagekit.io/mclubsist/image_K8j1sQhDc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653135300309')

    const [buttonState, setButtonState] = useState(true)
    const publicKey=process.env.REACT_APP_URL_PBK;
    const urlEndpoint=process.env.REACT_APP_URL_ENDPOINT;
    const authenticationEndpoint=process.env.REACT_APP_ENDPOINT+"/auth";
    
    useEffect(() => {
        getEvent().then(data => {
            setEvents(data);
        });
      }, []);

    const onSuccess = (res) => {
        console.log(res.url);
        setImage(res.url);
        setSecSet('');
        setButtonState(false);
    }
    const onError = (err)=>{
        console.log(err);
    }

    const add = ()=>{
        var _date = new Date(date.current.value);
        var _title = title.current.value;
        var _link = link.current.value;
        var _desc = desc.current.value;
        console.log(date.current.value);
        editEvent(
            {
                id: ID,
                event: _title,
                date: _date,
                link: _link,
                image: image,
                desc: _desc
            }
        ).then(
            ()=>{
                window.location = '/dashboard'
            }
        )
        console.log(events)
    }


    const remove = ()=>{
        deleteEvent(
            {
                id: ID,
            }
        ).then(
            ()=>{
                window.location = '/dashboard'
            }
        )
        console.log(events)
    }

    function update(){
        var key =  option.current.value;
        console.log(key);
        title.current.value = events[key].event;
        link.current.value = events[key].link;
        desc.current.value = events[key].desc;
        date.current.value = events[key].timestamp.toString().slice(0, 4)+'-'+events[key].timestamp.toString().slice(4, 6)+'-'+events[key].timestamp.toString().slice(6, 8);
        setID(events[key].id);
        setImage(events[key].image);
    }  

    const [view, setView] = useState({display: 'none', height: '0px'});
    const [path, setPath] = useState(
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FFFFFF80" class="bi bi-list" viewBox="0 0 16 16" >
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>);
    function changeView(){
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
                    <div className='navbar--right--mob'>
                        <div onClick={ changeView }>
                        {path}
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='navbar-dummy'></div>
        </div>


        <div style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 60, marginBottom: 50, paddingBottom: 20, background: '#333', width: '450px', borderRadius: 10 }}>
            <h1 style={{color: '#FFF', marginTop: 50, marginBottom: 20}}>Edit Event</h1>
            <div style={{padding: 20}}>
                <select defaultValue={-1} ref={option} onChange={update} 
                    style={{width: "100%",  padding: "10px", background: "#333", outline:0, color: '#FFF', paddingRight: "20px", borderRadius: 5 }}
                >
                    <option key={-1} value={-1} disabled>Select Option</option>
                    {
                    events.map((value, key) =>
                    <option key={key} value={key}> {value.event} </option>
                    )}
                </select>
            </div>
            <div style={{marginTop: 10}}>
                <p style={{textAlign: "start", paddingLeft: 20, fontWeight: 'bold'}}>Event Name:</p>
                <input ref={title} style={{height: '30px', width: '380px', padding: 5, fontSize: 18, paddingLeft: 15, paddingRight: 15, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#555', outline: 0, border: 0, color: '#EEE'}} type="text" placeholder="Event Title" />  
            </div>
            <div>
                <p style={{textAlign: "start", paddingLeft: 20, fontWeight: 'bold'}}>Event Link:</p>
                <input ref={link}  style={{height: '30px', width: '380px', padding: 5, fontSize: 18, paddingLeft: 15, paddingRight: 15, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#555', outline: 0, border: 0, color: '#EEE'}} type="text" placeholder="Event Link" />
            </div> 
            <div>
                <p style={{textAlign: "start", paddingLeft: 20, fontWeight: 'bold'}}>Event Date (MM/DD/YYYY)</p>
                <input ref={date}  style={{height: '30px', width: '380px', padding: 5, fontSize: 18, paddingLeft: 15, paddingRight: 15, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#555', outline: 0, border: 0, color: '#EEE'}} type="date" placeholder="Event Link" />
            </div> 
            <div>
                <p style={{textAlign: "start", paddingLeft: 20, fontWeight: 'bold'}}>Event Description:</p>
                <textarea ref={desc} style={{height: '200px', minWidth: '380px', maxWidth: '380px', padding: 5, fontSize: 18, paddingLeft: 15, paddingRight: 15, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#555', outline: 0, border: 0, color: '#EEE'}} type="date" placeholder="Event Description" />
            </div>
            <div style={{textAlign: 'start', paddingLeft: 20}}>
                <IKContext
                    publicKey={publicKey} 
                    urlEndpoint={urlEndpoint} 
                    authenticationEndpoint={authenticationEndpoint} 
                >
                    <b style={{fontSize: 18}}>Event Poster:</b>
                    <br/>
                    <br/>
                    <img src={image} alt={"NO PHOTO"} srcSet={srcSet} width="410px" />
                    <IKUpload
                    style={{ marginTop: 10 }}
                    fileName="test-upload.png"
                    onError={onError}
                    onSuccess={onSuccess}
                    />
                </IKContext>
            </div> 
            <div style={{display: "flex", justifyContent: 'space-around', marginTop: 15}}>
                <button disabled={buttonState} className="black_button" onClick={add}>Update</button>
                <button style={{fontSize: 18, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#F44', outline: 0, border: 0, padding: 10, paddingLeft: 50, paddingRight: 50, color: '#EEE'}} onClick={remove}>Delete</button>
            </div>
        </div>
    </div>
    );
}