import React from 'react'

export default function PropDrilling(props) {
  return (
    <>
    <div>Name : {props.name}</div>
        <Student title={props.name} />
    </>
  )
}

export function Student(props){
    
    return(
        <p>Student Name  : {props.title}</p>
    );
    
}
