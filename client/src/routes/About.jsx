import fLogo from '../images/f_logo.png';
import instagramLogo from '../images/instagram.png';
import linkedinLogo from '../images/in.png';
import githublogo from '../images/github.png';
import clubLogo from '../images/logo.png';

import '../App.css';

import NavBar from '../components/navbar';

function About() {
    return (
        <div className="About">
            <NavBar page="About"/>
            <div className='upcoming--event'>
                <div className='upcoming--container'>
                    <div className='upcoming--poster'>
                        <img src='https://imgur.com/n4ypT1V.png' alt="poster" width={'100%'}></img>
                    </div>
                    <div className='upcoming-poster-content'>
                        <div className='upcoming-event-label'>
                            Upcoming{'\n\n'}Event
                        </div>
                        <div className='upcoming-event-title'>
                            Git & Github
                        </div>
                        <div className='upcoming-events'>
                            Enim reprehenderit do ut labore ad. Anim aliquip
                            deserunt culpa occaecat.Nulla velit tempor ea sit occaecat quis eiusmod Lorem voluptate pariatur eu consectetur laboris officia. Fugiat culpa tempor elit consectetur reprehenderit tempor exercitation nisi duis elit nostrud quis. Ex in laborum est exercitation. Nulla sint consectetur enim dolor est ut exercitation incididunt. Id amet ut excepteur commodo fugiat culpa sunt laboris proident. Nostrud fugiat commodo eiusmod proident sit proident cillum. Aliqua dolor consequat ipsum officia nulla officia.
                        </div>
                        <br />
                        <br />
                        <a href='https://microsoft-club-sist.github.io/' className='RSVP'>RSVP HERE</a>
                        
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
            <div className='aboutClub'>
                <div className='aboutClub--container'>
                    <h1>
                        About Club
                    </h1>
                    <p>
                    Microsoft Club is a community group of Sathyabama Institute of Science and Technology college students that was created with the sole purpose 
                    of bringing folks with similar interests in technology together where they can begin and master their tech and development skills. 
                    <br/><br/>
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
            <div className='coreTeam'>
                <div className='coreTeam--container'>
                    <h1>Core Team</h1>
                    <div className='Profiles'>
                        {
                            [1,2,3,4,5,6,7,8,7,8,9,10].map((_, i) => <div className='Profile'>
                            <img src="https://www.sarojhospital.com/images/testimonials/dummy-profile.png" alt="profile" srcset="" />
                                <b>Name</b>Role
                            </div>
                        )
                        }
                </div>
                    </div>
            </div>
            <div className='showAllMember'>
                <button>
                    Show All Members
                </button>
            </div>
        </div>
    );
}

export default About;
