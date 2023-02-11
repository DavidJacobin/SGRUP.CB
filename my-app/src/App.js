import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Title from './components/Header';
import { Shop } from './pages/shop/shop';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Title />
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
