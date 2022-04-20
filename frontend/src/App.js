//Imported Pages
import Login from './pages/login/Login.js'
import Signup from './pages/signup/Signup.js'
import Home from './pages/home/Home.js'

//Imported hooks
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        {/* Temporary navbar */}
        <nav>
          <div>ChefMedia</div>
          <Link to="/"> Home </Link>
          <Link to="/login"> Login </Link>
          <Link to="/signup"> Signup </Link>
        </nav>

        {/* Router paths to other pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
