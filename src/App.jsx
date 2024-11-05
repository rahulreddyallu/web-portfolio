import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Work from './Components/Work';
import About from './Components/About';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/*' element={<Work/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
