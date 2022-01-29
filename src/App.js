import About from './routes/About';
import Gallery from './routes/Gallery';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
    return ( 
        <div className="App">
            <Routes>
                <Route exact path = "/" element = { <About /> }/>   
                <Route exact path = "/gallery" element = { <Gallery /> }/>   
            </Routes>
        </div>
    );
}


export default App;