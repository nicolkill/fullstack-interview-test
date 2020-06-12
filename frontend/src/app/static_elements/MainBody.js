import React from 'react';

import NavBar from './NavBar';

function MainBody (props) {
  return (

    <div>
      <NavBar/>
      <div className="no-pad-bot">
        <br/>
        <div className="container">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default MainBody