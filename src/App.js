import React from 'react';
import { Route , Routes} from 'react-router-dom';
import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="app">   
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}/>
            
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;