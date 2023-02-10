import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import Navbar from './components/Navbar';
import Title from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Title />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}>

          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
