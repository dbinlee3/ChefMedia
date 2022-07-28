import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js"

//Imported Pages
import Login from './pages/login/Login.js'
import Home from './pages/home/Home.js'
import Profile from './pages/profile/Profile.js'


//Imported hooks
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Router>
          <Navbar />
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>

        <Footer />
      </Router>
      
    </>
  );
}

export default App;
