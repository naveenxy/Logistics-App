
import './App.css';
import NavBar from './components';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home  from './Pages/Index';
import About from './Pages/about';
function App() {
  return (
    <Router>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    </Routes>
    </Router>
  );
}

export default App;
