import React from 'react'
import img from '../images/one.jpg';
export default function Home() {
  const clickMe = (event)=>{
    console.log(event);
  }
  return (
   <div className='container'>  
      <div className='row d-flex' style={{display:"inline"}}>
        <div className='col-lg-6'>
          <img src={img} alt="imag" />
          <button  className='btn btn-primary' onClick={clickMe}>click here..!</button>
        </div>
        <div className='col-lg-6'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quod debitis, corporis nobis similique facere culpa libero, at officia in ipsum. Atque, tempore reiciendis! Explicabo officiis magni veritatis consequuntur quisquam?
          Magnam Minima quisquam illum assumenda quam vitae accusantium eaque aperiam aspernatur officiis maiores suscipit harum eum vel velit inventore voluptate molestiae soluta, consequuntur magni, in nihil deserunt nobis perspiciatis. Deserunt, ullam.
        </div>
      </div>
   </div>
  )
}
