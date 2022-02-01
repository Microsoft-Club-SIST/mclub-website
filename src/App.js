import About from './routes/About';
import Gallery from './routes/Gallery';
import Events from './routes/Events';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
    return ( 
        <div className="App">
            <Routes>
                <Route exact path = "/" element = { <About /> }/>   
                <Route exact path = "/gallery" element = { <Gallery /> }/>   
                <Route exact path = "/events" element = { <Events /> }/>   
            </Routes>
        </div>
    );
}


export default App;