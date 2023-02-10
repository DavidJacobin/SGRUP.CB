import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import Navbar from './components/Navbar';
import Title from './components/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Title/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
