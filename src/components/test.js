import React from 'react';
import {  Link } from "react-router-dom";

const Testcomponents = () => {
  return (
    <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/About">About</Link>
    </li>
  </div>
  )
}

export default Testcomponents
