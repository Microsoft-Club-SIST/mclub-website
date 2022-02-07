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
                        Sunt elit laborum ullamco excepteur. Deserunt ad excepteur tempor id nostrud ex dolor ex cupidatat. Culpa dolor ex duis ipsum commodo dolore incididunt et sit eiusmod nulla nulla. Reprehenderit veniam laboris id officia nulla laborum mollit consectetur ut ut consectetur elit duis.
                        <br></br>
                        <br></br>
                        Ullamco elit enim sunt magna labore dolor. Nisi non do dolor amet veniam do fugiat commodo nisi eu eiusmod velit velit. Lorem deserunt aliqua aliquip ipsum nostrud Lorem sunt quis eu nulla incididunt elit labore. Ipsum ullamco et elit nisi aliqua consequat. Ut consequat ut aute sint proident sunt cillum.
                        Ullamco elit enim sunt magna labore dolor. Nisi non do dolor amet veniam do fugiat commodo nisi eu eiusmod velit velit. Lorem deserunt aliqua aliquip ipsum nostrud Lorem sunt quis eu nulla incididunt elit labore. Ipsum ullamco et elit nisi aliqua consequat. Ut consequat ut aute sint proident sunt cillum.
                        <br></br>
                        <br></br>
                        Laboris aute proident eu sunt do magna reprehenderit ea nisi. Proident tempor magna commodo reprehenderit dolor duis in id eiusmod adipisicing eiusmod voluptate. Duis sunt elit adipisicing eu cupidatat officia culpa reprehenderit. Do ea laboris reprehenderit amet ea amet culpa nisi et nisi.
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
