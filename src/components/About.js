import React, { useState } from 'react';
import Bar from './bar'
import data from './datas' 
function About({id}) {

  return (
    <div>
      <Bar/>
      <div className="w3-container w3-margin-top">
      {data.map((label , i)=>{
  if(label.id == id){
    return(
      <div>
  <div class="w3-container w3-card w3-margin-bottom">
  <h1>carrier_number</h1>
  <h3>{label.carrier_number}</h3>
</div>

<div class="w3-container w3-card w3-margin-bottom">
<h1>plate_number</h1>
<p>{label.plate_number}</p>
</div>

<div class="w3-container w3-card w3-margin-bottom">
<h1>location</h1>
<p>{label.location}</p>
</div>

<div class="w3-container w3-card w3-margin-bottom">
<h1>description</h1>
<p>{label.description}</p>
</div>
</div>
    )
  }
})}
      </div>

    </div>
  );
}

export default About;
