import { Link } from "react-router-dom";
import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="main">
        {/* <Facebook/> */}
        <Link to="/facebook"><span>Facebook</span>  </Link>
        <Link to="/instagram"><span>Instagram</span> </Link>
       
        </div>
    );
};

export default Home;