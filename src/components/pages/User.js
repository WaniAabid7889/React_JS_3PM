import React from 'react'

function User() {

  const getUser = async() =>{
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let result = await response.json();
        console.log(result);
    } catch (error) {
        return error
    }
  }

  getUser();
  return (
    <div>
      this user components
      {/* get data from api then print  */}
    </div>
  )
}
export default User
