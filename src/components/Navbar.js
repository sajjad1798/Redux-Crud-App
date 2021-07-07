import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Navigation = (props) => {

  return (
    <div className="d-flex align-items-center justify-content-between p-3 shadow">
        <div><Link to="/" className="btn ">Redux</Link></div>
        <div><Link  to="/contact/add" className="btn btn-primary">Create Contact</Link></div>
    </div>
  );
}

export default Navigation;