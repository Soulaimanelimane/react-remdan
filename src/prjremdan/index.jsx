import React, { useRef, useState } from 'react'
import FormData from './FormData'
import StaticsFinals from './StaticsFinals';
function App() {




  





    

  var startDate = new Date("2024-03-12"); 
  var currentDate = new Date();
  var oneDay = 24 * 60 * 60 * 1000; 

  var diffDays = Math.round(Math.abs((currentDate - startDate) / oneDay));
  


 

  return <>
 

    
    <div className=" d-flex flex-row-reverse p-3 pt-5">
      <div className="bg-primary rounded px-1">
          <h4 align={"center"}>Day : {diffDays} </h4>
      </div>
      


    </div>
  
    
     {diffDays >=29 ? <StaticsFinals/> : <FormData /> } 
   
    

  </>



}

export default App