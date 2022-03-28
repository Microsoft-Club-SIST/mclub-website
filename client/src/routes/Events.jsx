import NavBar from "../components/navbar";
import "../stylesheets/events.css";
import React, { useEffect, useState } from "react";
import { addEvent, getEvent, getPastEvent, getUpEvent, getMembers } from '../Firebase';
import { FcCalendar, FcClock } from 'react-icons/fc';

function Events() {
  const [events, setEvents] = useState([{event: "Loading...", date: 0, timestamp: "12121234"}]);
  const [_date, setDate] = useState(12);
  const today = new Date();
  
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
    getEvent().then(data => {
        // addEvent(
        //     {event: 'Git & Github',
        //     desc: 'Enim reprehenderit do ut labore ad. Anim aliquip deserunt culpa occaecat.Nulla velit tempor ea sit occaecat quis eiusmod Lorem voluptate pariatur eu consectetur laboris officia. Fugiat culpa tempor elit consectetur reprehenderit tempor exercitation nisi duis elit nostrud quis. Ex in laborum est exercitation. Nulla sint consectetur enim dolor est ut exercitation incididunt. Id amet ut excepteur commodo fugiat culpa sunt laboris proident',
        //     link: 'https://forms.gle/E25S3J1rDrfuie1g8',
        //     image: 'https://imgur.com/n4ypT1V.png'
        // });
        setEvents(data);
        formatDate(today);
    });
  }, []);
  function _getAllEvents(){
    getEvent().then(data => {
      setEvents(data);
      formatDate(today);
    });
  }
  function _getPastEvents(){
    getPastEvent().then(data => {
      setEvents(data);
      formatDate(today);
    });
  }
  function _getUpEvents(){
    getUpEvent().then(data => {
      setEvents(data);
      formatDate(today);
    });
  }
  return (
    <div className="poppins">
      <NavBar page="Events" />
      <h1 className="title">Events</h1>
      <div className="event-body">
        <div className="event-buttons">
          <div className="grey-button" onClick={_getAllEvents}>All Events</div>
          <div className="grey-button" onClick={_getUpEvents}>Upcoming Events</div>
          <div className="grey-button" onClick={_getPastEvents}>Past Events</div>
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
                    (_date < _.timestamp) && <button className="event-card-registerbutton" onClick={()=> window.open(_.link, "_blank")}>Register</button>
                }
                {
                    (_date > _.timestamp) && <button className="event-card-registerbutton" onClick={()=> window.open(_.link, "_blank")}>View Recorded Session</button>

                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
