import React from 'react';
import './App.css';
import User from './components/User';

function App() {
  return(
    <div>
    <User/>
    {/* <Student obj={Student.defaultProps}/> */}
    {/* <Student name={Student.defaultProps.name}/> */}
    {/* <Student name="abid"/> */}
    {/* <Course title="MCA"/> */}
    {/* <Enrollment date="20/2/2025"></Enrollment> */}
    </div>
  );
}

export default App;


export function Student(props){
  let data = props.obj;
  return (
    <>
        <div>this is student information </div>
        <div>Student Name : {props.obj.name}</div>
        <div>Student Age : {props.obj.age}</div>
        <div>Student Class : {props.obj.className}</div>
        <div>Student Address : {data.address}</div>
    </>
  )
}

export class Course extends React.Component{
  render(){
    return(
      <div>
        <div>this is class base components</div>
        <div>Course Name : {this.props.title}</div>
      </div>
    ) 
  }
}

export const Enrollment = ({date}) =>{
  return(
    <div>Enroll Date  : {date}</div>
  );
}


//default props 

Student.defaultProps = {
  name:"Ali",
  age : "14",
  address :"Ajmer",
  className : "8th"
}


