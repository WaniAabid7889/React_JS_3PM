import './App.css';



let arr = [1,2,3,4,5];
let userName = ['abid','raj','kumar'];
let userPost = ['teaching / Developer','salesforce Developer','backend Developer'];

let user = {
  __id : 101,
  name : "Bhanu",
  course : "React Js"
}



export const getUser = () =>{

  try{
    return [2,4,4];
  }catch(err){
    throw err;
  }
}

let combine = [...userName, ...userPost];

class Employee {
  constructor(id,name,post){
    this.id = id;
    this.name = name;
    this.post = post;
  }

  display(){
   
    return `id : ${this.id} name : ${this.name}, post : ${this.post}`;
  }
  
  setName=(name)=>{
    return this.name = name;

  }
}


function App() {
  let i=0;
  let emp = new Employee(1,"raj","developer");
  return (
    <div className="App">
      <h1>Hello we are create React Js project</h1>
       {arr.map((item)=><p>{item}</p>)}
        <p>{"Name"} &nbsp; &nbsp; {"Post"}</p>
        {/* {userName.map((val,key)=>
          <pre>{val} : {userPost[key]}</pre>
        )} */}
          {
          
            combine.map((val,key)=>
              <pre>
                { i < 3 ? parseInt(i++) : userName[key-i]} : {val}
              </pre>
            )
          }
          <p>Employee information</p>
          <p>{emp.display()}</p>
          <p>{emp.setName('abid')}</p>
          <p>{emp.display()}</p>


          <p>User information</p>
      
          {getUser()}

         <p>Addition   :  {add(1,3)}</p> 

    </div>
  );
}

export default App;

//ES6 --> 

export const add = (a,b) =>{
  return a+b;
}


