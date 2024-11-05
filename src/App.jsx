import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Work from './Components/Work';
import About from './Components/About';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/web-portfolio" >
        <NavBar/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/web-portfolio' element={<Navigate to="/work" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
