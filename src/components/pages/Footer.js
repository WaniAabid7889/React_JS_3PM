import React from 'react';
import '../css/Footer.css';
//when we are create style object then css properties are use camelCase like -> fontSize, borderRadius
const myStyle = {
    backgroundColor: 'green',
    fontSize : "20px",
    display:"flex",
    justifyContent: "space-around",
}
export default function Footer() {
    
  return (
    <div className="container"  style={myStyle}>
        <div style={{ position: "fixed", textAlign:'center', bottom: '0px'}}>
            <p className='foot'>Our website desgine for College Management </p>
            <p>@our website</p> 
        </div>
    </div>
  )
}
