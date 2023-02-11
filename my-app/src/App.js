import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Title from './components/Header';
import { Home } from './pages/Home';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Title />
        <Navbar />
        <Home/>
        <Routes>
          <Route path='/' >

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
