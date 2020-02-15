import React from 'react';
import Bar from './bar'
import Numberdata from './Numberdata'
import Report from './Report'
function Home(){

    return(
        <div>
     <Bar/>
    <Numberdata path="/data"/>
       <Report path="/report"/>
        </div>
    )
}
export default Home