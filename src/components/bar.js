import React from 'react';
import { Link } from "@reach/router";


function Bar() {
  return (
    <div>
<div className="w3-bar w3-border w3-blue w3-xxlarge w3-padding-large">
 <Link to="/" style={{textDecoration : "none"}}>
 {/* <h1>ADMIN DASHBOARD</h1> */}
 <img src="https://png.pngtree.com/svg/20160520/f2b78f389c.png" width="50" height="50" alt="logo"/>
 </Link>
</div>
    </div>
  );
}

export default Bar;
