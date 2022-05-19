import { createRef } from "react";
import { deleteMember, editMember, getMembers } from "../Firebase";
import { IKContext, IKUpload } from 'imagekitio-react';
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import clubLogo from '../images/logo.png';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


export default function EditMember() {
    const batch = createRef();
    const dept = createRef();
    const name = createRef();
    const order = createRef();
    const priority = createRef();
    const role = createRef();
    
    const [image, setImage] = useState('')
    
    const [ID, setID] = useState(0)
    const [members, setMembers] = useState([{name: "Loading..."}]);
    let option = createRef();

    const [buttonState, setButtonState] = useState(true);
    const publicKey=process.env.REACT_APP_URL_PBK;
    const urlEndpoint=process.env.REACT_APP_URL_ENDPOINT;
    const authenticationEndpoint=process.env.REACT_APP_ENDPOINT+"/auth"
    
    useEffect(() => {
        getMembers().then(data => {
            setMembers(data);
            console.log(data);
        });
      }, []);

    const onSuccess = (res) => {
        console.log(res.url);
        setImage(res.url);
        setButtonState(false);
    }
    const onError = (err)=>{
        console.log(err);
    }

    const add = ()=>{
        var _batch = batch.current.value;
        var _dept = dept.current.value;
        var _name = name.current.value;
        var _order = order.current.value;
        var _priority = priority.current.value;
        var _role = role.current.value;

        editMember(
            {
            batch: _batch,
            id: ID,
            dept: _dept,
            name: _name,
            image: image,
            order: _order,
            priority: _priority,
            role: _role
            }
        ).then(
            ()=>{
                window.location = '/dashboard'
            }
        )
    }


    const remove = ()=>{
        deleteMember(
            {
                id: ID,
            }
        ).then(
            ()=>{
                window.location = '/dashboard'
            }
        )
        console.log(members)
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

    function update(){
        var key =  option.current.value;
        console.log(key);
        batch.current.value = members[key].batch;
        dept.current.value = members[key].dept;
        name.current.value = members[key].name;
        order.current.value = members[key].order;
        priority.current.value = members[key].priority;
        role.current.value = members[key].role;
        setID(members[key].id);
        setButtonState(false);
        setImage(members[key].photo);
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
            <h1 style={{color: '#FFF', marginTop: 50, marginBottom: 20}}>Edit Member</h1>
            <div style={{padding: 20}}>
                <select defaultValue={-1} ref={option} onChange={update} 
                    style={{width: "100%",  padding: "10px", background: "#333", outline:0, color: '#FFF', paddingRight: "20px", borderRadius: 5 }}
                >
                    <option key={-1} value={-1} disabled>Select Option</option>
                    {
                    members.map((value, key) =>
                    <option key={key} value={key}> {value.name} </option>
                    )}
                </select>
            </div>
            <div>
                <p style={{textAlign: "start", paddingLeft: 20}}>Name</p>
                <input ref={name} style={{height: '30px', width: '380px', padding: 5, fontSize: 18, paddingLeft: 15, paddingRight: 15, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#555', outline: 0, border: 0, color: '#EEE'}} type="text" placeholder="Name" />  
            </div>
            <div>
                <p style={{textAlign: "start", paddingLeft: 20}}>Department</p>
                <input ref={dept}  style={{height: '30px', width: '380px', padding: 5, fontSize: 18, paddingLeft: 15, paddingRight: 15, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#555', outline: 0, border: 0, color: '#EEE'}} type="text" placeholder="Department" />
            </div> 
            <div>
                <p style={{textAlign: "start", paddingLeft: 20}}>Order</p>
                <input ref={order}  style={{height: '30px', width: '380px', padding: 5, fontSize: 18, paddingLeft: 15, paddingRight: 15, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#555', outline: 0, border: 0, color: '#EEE'}} type="text" placeholder="Position in list" />
            </div> 
            <div>
                <p style={{textAlign: "start", paddingLeft: 20}}>Priority</p>
                <input ref={priority}  style={{height: '30px', width: '380px', padding: 5, fontSize: 18, paddingLeft: 15, paddingRight: 15, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#555', outline: 0, border: 0, color: '#EEE'}} type="text" placeholder="Enter the priority level value" />
            </div>
            <div>
                <p style={{textAlign: "start", paddingLeft: 20}}>Batch</p>
                <input ref={batch}  style={{height: '30px', width: '380px', padding: 5, fontSize: 18, paddingLeft: 15, paddingRight: 15, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#555', outline: 0, border: 0, color: '#EEE'}} type="text" placeholder="2020-2024" />
            </div>
            <div>
                <p style={{textAlign: "start", paddingLeft: 20}}>Role</p>
                <input ref={role}  style={{height: '30px', width: '380px', padding: 5, fontSize: 18, paddingLeft: 15, paddingRight: 15, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#555', outline: 0, border: 0, color: '#EEE'}} type="text" placeholder="Enter the role" />
            </div>
            <div style={{textAlign: 'start', paddingLeft: 20}}>
                <IKContext
                    publicKey={publicKey} 
                    urlEndpoint={urlEndpoint} 
                    authenticationEndpoint={authenticationEndpoint} 
                >
                    Photo (1:1)
                    <br/>
                    <img src={image} alt={"media is not available found"} width="410px" />

                    <IKUpload
                    style={{ marginTop: 10 }}
                    folder="Members"
                    fileName="test-upload.png"
                    onError={onError}
                    onSuccess={onSuccess}
                    />
                </IKContext>
            </div> 
            
            <div style={{display: "flex", justifyContent: 'space-around', marginTop: 15}}>
                <button disabled={buttonState} style={{fontSize: 18, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#222', outline: 0, border: 0, padding: 10, paddingLeft: 50, paddingRight: 50, color: '#EEE'}} onClick={add}>Update</button>
                <button style={{fontSize: 18, marginTop: 10, marginBottom: 10, borderRadius: 10, background: '#F44', outline: 0, border: 0, padding: 10, paddingLeft: 50, paddingRight: 50, color: '#EEE'}} onClick={remove}>Delete</button>
            </div>
        </div>
    </div>
    );
}