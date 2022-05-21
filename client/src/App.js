import About from './routes/About';
import Gallery from './routes/Gallery';
import Events from './routes/Events';
import EventsUp from './routes/EventsUpcoming';
import EventsPast from './routes/EventsPast';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import AddEvent from './routes/AddEvent';
import EditEvent from './routes/EditEvent';
import AddMember from './routes/AddMember';
import EditMember from './routes/EditMember';
import AddPhoto from './routes/AddPhoto';
import Register from './routes/Register';

function App() {
    return ( 
        <div className="App">
            <Routes>
                <Route exact path = "/" element = { <About /> }/>   
                <Route exact path = "/gallery" element = { <Gallery /> }/>   
                <Route exact path = "/events" element = { <Events /> }/>   
                <Route exact path = "/upcoming-events" element = { <EventsUp /> }/>   
                <Route exact path = "/past-events" element = { <EventsPast /> }/>   
                <Route exact path = "/dashboard" element = { <Dashboard /> }/>   
                <Route exact path = "/login" element = { <Login /> }/>   
                <Route exact path = "/addevent" element = { <AddEvent /> }/>   
                <Route exact path = "/editevent" element = { <EditEvent /> }/>   
                <Route exact path = "/addmember" element = { <AddMember /> }/>   
                <Route exact path = "/editmember" element = { <EditMember /> }/>   
                <Route exact path = "/addphoto" element = { <AddPhoto /> }/>   
                <Route exact path = "/register" element = { <Register /> }/>   
            </Routes>
        </div>
    );
}

export default App;