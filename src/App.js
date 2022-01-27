import About from './routes/About';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
    return ( 
        <div className="App">
            <Routes>
                <Route exact path = "/" element = { <About /> }/>   
            </Routes>
        </div>
    );
}


export default App;