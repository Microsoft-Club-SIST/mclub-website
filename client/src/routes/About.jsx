import fLogo from '../images/f_logo.png';
import instagramLogo from '../images/instagram.png';
import linkedinLogo from '../images/in.png';
import githublogo from '../images/github.png';
import clubLogo from '../images/logo.png';
import { getEvent, getMembers } from '../Firebase';
import React, { useEffect, useState } from "react";

import '../App.css';

import NavBar from '../components/navbar';

function About() {
    const [responses, setResponses] = useState([{event: "Loading...", date: 0}]);
    const [members, setMembers] = useState([{name: "Loading...", role: ""}]);
    const [_date, setDate] = useState(12);
    const today = new Date();
    const cardColors=["#FFD700", "#008DD5", "#FF7467", "white", "#c4c4c410", "#050505"];
    useEffect(() => {
        getEvent().then(data => {
            setResponses(data);
            formatDate(today);
        });
        getMembers().then(data => {
            setMembers(data);
        })
    }, []);

    function formatDate(date) {
        const d = (date.getDate().toString().length > 1) ? date.getDate().toString() : "0"+date.getDate().toString()
        const m =  ((date.getMonth()+1).toString().length > 1) ? (date.getMonth()+1).toString() : "0"+(date.getMonth()+1).toString()
        const y= date.getFullYear().toString()
        const h = (date.getHours().toString().length > 1) ? date.getHours().toString() : "0"+date.getHours().toString()
        const mi = (date.getMinutes().toString().length > 1) ? date.getMinutes().toString() : "0"+date.getMinutes().toString()
        const s = (date.getSeconds().toString().length > 1) ? date.getSeconds().toString() : "0"+date.getSeconds().toString()
        const da = (y+m+d+h+mi+s)
        setDate(parseInt(da));
    }

    return (
        <div className="About">
            <NavBar page="About"/>
            <div className='upcoming--event'>
                <div className='upcoming--container'>
                    <div className='upcoming--poster'>
                        <img src={responses[0].image} alt="poster" width={'100%'}></img>
                    </div>
                    <div className='upcoming-poster-content'>
                        
                        {
                            (_date < responses[0].timestamp) && <div className='upcoming-event-label'>Upcoming{'\n\n'}Event</div>
                        }
                        {
                            (_date > responses[0].timestamp) && <div className='upcoming-event-label'>Past{'\n\n'}Event</div>

                        }
                    
                        <div className='upcoming-event-title'>
                            {
                                responses[0].event
                            }
                        </div>
                        <div className='upcoming-events'>
                            {responses[0].desc}
                        </div>
                        <br />
                        <br />
                        {
                            (_date < responses[0].timestamp) && 
                            <a href={'/register'} className='RSVP'>RSVP HERE</a>
                        }
                        {
                            (_date > responses[0].timestamp) &&
                            <a href={responses[0].link} target="_blank" rel="noreferrer" className='RSVP'>View Recorded Session</a>

                        }
                        
                    </div>
                </div>
            </div>
            <div className='joinUs'>
                <div className='joinUs--container'>
                    <div className='joinUs--discord'>
                        <div className='club--logo'>
                            <img src={clubLogo} alt='discord' width={'50%'} scale="1.3"></img>
                        </div>
                        <div className='discord--link'>
                            <p className='discord-text'>
                                Join in our Discord Community
                            </p>
                            <a href='https://bit.ly/mclub-s4' target= {'_blank'}  rel='noreferrer'>Click here to join</a>
                        </div>
                    </div>
                    <div className='followUs-links'>
                        Follow us on:
                        <div className='followUs-links-li'>
                            <a href="https://fb.com/" target="_blank" rel="noreferrer"><img src={fLogo} alt='Facebook Logo' height={'35px'}></img></a>
                            <a href="https://www.instagram.com/microsoft.sist/" target="_blank" rel="noreferrer"><img src={instagramLogo} alt='Instagram Logo' height={'35px'}></img></a>
                            <a href="https://www.linkedin.com/company/microsoft-sist/" target="_blank" rel="noreferrer"><img src={linkedinLogo} alt='LinkedIn Logo' height={'35px'}></img></a>
                            <a href="https://github.com/Microsoft-Club-SIST" target="_blank" rel="noreferrer"><img src={githublogo} alt="Github logo" height={'35px'}></img></a>    
                        </div>
                    </div>
                </div>
            </div>
            <ClubInfo />
            <div className='coreTeam'>
                <div className='coreTeam--container'>
                    <h1>Core Team</h1>
                    <div className='Profiles'>
                        {
                            members.map((_, i) => <div className='Profile' 
                            style={{
                                backgroundColor: cardColors[_.priority-1], 
                                color: (((+_.priority === 1 || +_.priority === 3|| +_.priority === 4) ? 'black' : 'white'))}}>
                            <img src={_.photo} style={{objectFit: "cover"}} alt="profile" srcset="" />
                                <h2 style={{marginTop: "10px", marginBottom: "10px"}}>{_.name}</h2>
                                <b style={{opacity: "0.8", zIndex: 0}}>{_.role}</b>
                                <b style={{opacity: "0.6"}}>{_.dept} {_.batch}</b>
                            </div>
                        )
                        }
                </div>
                    </div>
            </div>
            {
                // <div className='showAllMember'>
                //     <button>
                //         Show All Members
                //     </button>
                // </div>
            }
        </div>
    );
}

function ClubInfo(){
    return(
        <div className='aboutClub'>
            <div className='aboutClub--container'>
                <h1>
                    About Club
                </h1>
                <p>
                Microsoft Club is a community group of Sathyabama Institute of Science and Technology college students that was created with the sole purpose 
                of bringing folks with similar interests in technology together where they can begin and master their tech and development skills. 
                Students from all undergraduate programs with an interest in growing as a community are welcome here. The club is open to everyone in the university who are 
                obliged to work and learn together, be it a fresher or a senior. Anyone who wants to brush up their developing abilities and contribute 
                their knowledge in upgrading the club are gladly admitted .
                <br/><br/>
                The club strives to build and enhance the open-sourcing environment and the learning culture. By joining the club, students grow their 
                knowledge in a peer-to-peer learning atmosphere and build solutions for local businesses and their community. It serves as a common platform 
                for exchange of web, coding, programming and other tech related knowledge.
                <br/><br/>
                The enthusiasm and determination of each Developer, coders, graphic designers and innovative thinkers is what govern our community. It is 
                an initiative taken that will go a long way in maintaining the technical culture of Sathyabama in the years to come.
                </p>
            </div>
        </div>  
    );
}
export default About;