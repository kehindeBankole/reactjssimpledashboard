import React , { useState } from 'react';
import { Link } from "@reach/router";
import data from './datas'
function Report(props){
     const[report ] = useState(data)
         

       
 return(
<div className="w3-container">
 <div className="w3-responsive">
        <table className="w3-table-all w3-striped w3-card-4">
        <thead>
  <tr className="w3-green">
<th>s/n</th>
<th>carrier number</th>
<th>plate number</th>
<th>status</th>
</tr>
  </thead>
  <tbody>
      {report.map((label)=>{
          return(
              <tr>
      <td><Link to={`${label.id}`} style={{textDecoration:"none"}}>{label.id}</Link></td>
          <td>{label.carrier_number}</td>
          <td>{label.plate_number}</td>
      <td>{label.id >=1 && label.id <= 23 ? "pending" : "solved"}</td>
              </tr>
          )
      })}
  </tbody>
        </table>
    </div>
        </div>
    )
}
export default Report