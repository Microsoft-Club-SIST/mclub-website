import '../App.css';
import '../stylesheets/about.css'
import React, { useState } from 'react';
import {Link} from "react-router-dom"


function NavBar(props){
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
    return(
        <div>
            <div className='navbar'>
                <div className='navbar--container'>
                    <div className='navbar--left'>
                    <Link to="/">
                        <img src="https://avatars.githubusercontent.com/u/58457318?s=200&v=4" height={46} alt='Microsoft Club Sathyabama - Logo'
                            style={{
                                borderRadius: "100%"
                            }}
                            ></img>
                    </Link>
                    </div>
                    <div className='navbar--right'>
                        <ul>
                            <li>
                                {(props.page === 'About') && <p style={{color: "#FFF"}}>About</p>}
                                {(props.page !== 'About') && <a href='/'>About</a>}
                                {(props.page === 'About') && <div className='underline'></div>}
                                {(props.page !== 'About') && <div className='underline hover-show'></div>}
                            </li>
                            <li>
                                {(props.page === 'Events') && <p style={{color: "#FFF"}}>Events</p>}
                                {(props.page !== 'Events') && <a href='/events'>Events</a>}
                                {(props.page === 'Events') && <div className='underline'></div>}
                                {(props.page !== 'Events') && <div className='underline hover-show'></div>}
                            </li>
                            <li>
                                {(props.page === 'Gallery') && <p style={{color: "#FFF"}}>Gallery</p>}
                                {(props.page !== 'Gallery') && <a href='/gallery'>Gallery</a>}
                                {(props.page === 'Gallery') && <div className='underline'></div>}
                                {(props.page !== 'Gallery') && <div className='underline hover-show'></div>}
                            </li>
                            <li className='register'>Register</li>
                        </ul>
                    </div>
                    <div className='navbar--right--mob'>
                        {/*
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FFFFFF80" class="bi bi-list" viewBox="0 0 16 16" onClick={ changeView }>
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        */}
                        <div onClick={ changeView }>
                        {path}
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='navbar-dummy'></div>
            <div className='navbar--right-mob--dropdown' style={ view }>
                <ul style={{display: 'flex', flexDirection: "column"}}>
                <li  style={{paddingTop: '10px'}}>
                    {(props.page === 'About') && <p style={{color: "#FFF"}}>About</p>}
                    {(props.page !== 'About') && <a href='/'>About</a>}
                </li>
                <li>
                    {(props.page === 'Events') && <p style={{color: "#FFF"}}>Events</p>}
                    {(props.page !== 'Events') && <a href='/events'>Events</a>}
                </li>
                <li>
                    {(props.page === 'Gallery') && <p style={{color: "#FFF"}}>Gallery</p>}
                    {(props.page !== 'Gallery') && <a href='/gallery'>Gallery</a>}
                </li>
                <li>
                    <a href='https://microsoft-club-sist.github.io/'>Register</a>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;