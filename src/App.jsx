import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignUp from './components/signUp/SignUp';
import Login from './components/Login/Login'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
