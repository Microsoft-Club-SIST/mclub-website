import NavBar from "../components/navbar";
import "../stylesheets/events.css";
import React, { useEffect, useState } from "react";
import { getEvent } from '../Firebase';
import { FcCalendar, FcClock } from 'react-icons/fc';
import clubLogo from '../images/logo.png';

function Events() {
  const [events, setEvents] = useState([{event: "Loading...", date: 0, timestamp: "12121234"}]);
  const [_date, setDate] = useState(12);
  
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
  
  useEffect(() => {
    const today = new Date();
    getEvent().then(data => {
      formatDate(today);
      setEvents(data);
    });
  }, []);
  
  return (
    <div className="poppins">
      <NavBar page="Events" />
      <h1 className="title">Events</h1>
      <div className="event-body">
        <div className="event-buttons">
          <div className="selected-button" >All Events</div>
          <div className="grey-button" onClick={()=> window.location="/upcoming-events"}>Upcoming Events</div>
          <div className="grey-button" onClick={()=> window.location="/past-events"}>Past Events</div>
        </div>
        {events.map((_, i) => (
          <div className="event-cards">
            <div className="event-card">
              
              <img
                  className="event-card-image"
                  src={_.image}
                  width="320px"
                  height="400px"
                  alt="Event"
                  style={{margin: "10px"}}
                />
              <div className="event-card-content">
                <div className="event-card-data">
                  <h3 className="event-card-title">
                    {_.event}{" "}
                    <span className="event-card-title-id">#0034</span>
                  </h3>
                  <p className="event-card-description">
                    
                    <b>Event Description:</b>
                    <br></br>
                    {_.desc}
                    <br></br>
                    <b><FcCalendar />{'  '} &nbsp;&nbsp; 
                    {_.timestamp.toString().slice(6, 8)}-
                    {_.timestamp.toString().slice(4, 6)}-
                    {_.timestamp.toString().slice(0, 4)}
                    </b>
                    <br />
                    <b><FcClock />{'  '} &nbsp;&nbsp;
                    {_.timestamp.toString().slice(8, 10)}:
                    {_.timestamp.toString().slice(10, 12)}
                    </b>
                  </p>
                </div>
                {
                    (_date < _.timestamp) && <button className="event-card-registerbutton" onClick={()=> {window.location = 'register'}}>Register</button>
                }
                {
                    (_date > _.timestamp) && <button className="event-card-registerbutton" onClick={()=> window.open(_.link, "_blank")}>View Recorded Session</button>
                }
              </div>
            </div>
          </div>
        ))}
        {
          events.length === 0 && 
          <>
          <img src={clubLogo} alt='discord' style={{ marginTop: "100px"}} width="200px" scale="1.3"></img>
            <h3 className="event-card-title" style={{color: "white", marginTop: "50px"}}>
              Wait for sometime
              <br />
              We will be coming up with more cool stuff again
              <br />
              Stay Tuned!
            </h3>
          </>
        }
      </div>
    </div>
  );
}

export default Events;
