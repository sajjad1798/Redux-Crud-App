import React, { useState } from 'react';

const Navigation = (props) => {

  return (
    <div className="d-flex align-items-center justify-content-between p-3 shadow">
        <div><h2>Redux</h2></div>
        <div><button className="btn btn-primary">Create Contact</button></div>
    </div>
  );
}

export default Navigation;