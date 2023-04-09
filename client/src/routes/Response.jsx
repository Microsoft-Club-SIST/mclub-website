import { createRef } from "react";
import { getEvent, getResponse } from "../Firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import '../App.css';
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import clubLogo from '../images/logo.png';

export default function Response() {
    const [response, setResponse] = useState([])
    const [events, setEvents] = useState([{event: "Loading..."}]);
    let title = createRef();
    let option = createRef();
    
    useEffect(() => {
        getEvent().then(data => {
            setEvents(data);
        });
      }, []);

    function update(){
        var key =  option.current.value;
        title.current.value = events[key].event
        getResponse(events[key].id).then(res => { console.log(res); setResponse(res) })
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
            window.alert("Something went wrong!")
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
            <h1 style={{color: '#FFF', marginTop: 50, marginBottom: 20}}>Responses</h1>
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
                <input ref={title} readOnly="readonly" style={{height: '30px', width: '380px', padding: 5, fontSize: 18, paddingLeft: 15, paddingRight: 15, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#555', outline: 0, border: 0, color: '#EEE'}} type="text" placeholder="Event Title" />  
            </div>
        </div>
        <div className="table" style={{borderRadius: '10px', boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", overflow: 'scroll', height: '400px', width: '90vw', marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, background: "#333"}}>
        <table>
            <tr>
                <th>Email</th>
                <th>Name</th>
                <th>College</th>
                <th>Register</th>
                <th>Roll Number</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Grad</th>
                <th>Comment</th>
            </tr>
            {response.map((obj)=>{
                return <tr>
                    <td>{obj.email}</td>
                    <td>{obj.name}</td>
                    <td>{obj.college}</td>
                    <td>{obj.reg}</td>
                    <td>{obj.roll}</td>
                    <td>{obj.ph}</td>
                    <td>{obj.dept}</td>
                    <td>{obj.grad}</td>
                    <td>{obj.comment}</td>
                </tr>
                })
            }
        </table>
        </div>
    </div>
    );
}