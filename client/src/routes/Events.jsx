import NavBar from "../components/navbar";
import "../stylesheets/events.css";

function Events() {
  return (
    <div className="poppins">
      <NavBar page="Events" />
      <h1 className="title">Events</h1>
      <div className="event-body">
        <div className="event-buttons">
          <div className="grey-button">Upcoming Events</div>
          <div className="grey-button">Post Events</div>
          <div className="grey-button">All Events</div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 7, 8, 9, 10].map((_, i) => (
          <div className="event-cards">
            <div className="event-card">
              <img
                className="event-card-image"
                src="https://imgur.com/n4ypT1V.png"
                width="320px"
                height="400px"
                alt="Event"
              />
              <div className="event-card-content">
                <div className="event-card-data">
                  <h3 className="event-card-title">
                    Event Name{" "}
                    <span className="event-card-title-id">#0034</span>
                  </h3>
                  <p className="event-card-description">
                    
                    <b>Event Description:</b>
                    <br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet eligendi tempora mollitia necessitatibus quaerat
                    corporis nesciunt a exercitationem minima maiores esse,
                    voluptatibus, quisquam consequatur debitis veniam alias, nam
                    tenetur repellendus voluptate eaque laudantium beatae
                    eveniet! Sequi, adipisci veniam. Nisi, omnis.
                  </p>
                </div>
                <button className="event-card-registerbutton">Register</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
