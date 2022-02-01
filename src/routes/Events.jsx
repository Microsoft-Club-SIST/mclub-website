import NavBar from '../components/navbar';
import '../stylesheets/events.css'
function Gallery() {
    return(
        <div>
            <NavBar page='Events' />
            <h1 className="title">Events</h1>
            <div className="event-buttons">
                <div className="grey-button">Upcoming Events</div>
                <div className="grey-button">Post Events</div>
                <div className="grey-button">All Events</div>
            </div>
            {
            [1,2,3,4,5,6,7,8,7,8,9,10].map((_, i) =>
                <div className="event-cards">
                    <div className="event-card">
                        <img className="event-card-image" src="https://placekitten.com/500/500" alt="Event"/>
                        <div className="event-card-content">
                            <div className="event-card-title">Event Name <span className="event-card-title-id">#0034</span></div>
                            <div className="event-card-description">Some Random Text</div>
                            <div className="event-card-registerbutton">Register</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;