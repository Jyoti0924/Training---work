import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header />
        <Routes>
        
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
