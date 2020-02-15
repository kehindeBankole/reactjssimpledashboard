import React from 'react';
import Card from './Card'

function Numberdata() {
    return (
    <div className="w3-container">
        <div className="w3-row w3-row-padding w3-margin-top">
          <div className="w3-col s12 m4 w3-margin-bottom">
            <Card color="w3-red" number = "50" title="reports"/>
          </div>
          <div className="w3-col s12 m4  w3-margin-bottom">
            <Card color="w3-blue" number = "27" title="attended"/>
          </div>
          <div className="w3-col s12 m4  w3-margin-bottom">
            <Card color="w3-orange" number = "23" title="Pending"/>
          </div>
         </div>
    </div>
    
    );
  }
  
export default Numberdata;