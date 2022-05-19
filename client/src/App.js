import About from './routes/About';
import Gallery from './routes/Gallery';
import Events from './routes/Events';
import EventsUp from './routes/EventsUpcoming';
import EventsPast from './routes/EventsPast';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';

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
            </Routes>
        </div>
    );
}


export default App;