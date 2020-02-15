import React from 'react';


function Card(props) {
  return (
    <div className={`w3-card ${props.color} w3-hover-shadow w3-padding-64 w3-center`}>
<h1 style={{fontSize : "65px"}}>{props.number}</h1>
<h2>{props.title}</h2>
    </div>
  );
}

export default Card;
