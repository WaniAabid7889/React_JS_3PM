import React from 'react'

function User() {

  const getUser = async() =>{
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let result = await response.json();
        return result;
    } catch (error) {
        return error
    }
  }
 let users = "";
  return (
    <div>
      this user components
      {/* get data from api then print  */}
    </div>
  )
}
export default User
