import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './homies/Home';
// import Main from './main/Main';
import Favourite from './favourite/Favourite';


import './App.css';
// import Main from './main/Main';

function App() {
  return (
    <div>
    
      <Router>
     
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favourite" element={<Favourite/>} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;