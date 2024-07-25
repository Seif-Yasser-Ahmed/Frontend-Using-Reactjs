import { Fragment, useState } from 'react'
import User from './components/User';
import Users from './components/Users';
import Movies from './components/Movies';
import Task from './components/Task';
function App() {
  // const [count, setCount] = useState(0)

  //lazem law fe html lazem tkon goa el return 
  //wlazem goa div wahda
  //lw mesh 3ayz t3ml div 3adya lazem t3ml fragment
  // w <> </> bt3awd mkan Fragment
  //  class will be className
  //  for will be htmlFor fel label
  var name="seif";
  var styleObj={
    backgroundColor:"red",
    color:"white",
    textAlign:"center",
  }
  return (

    <>
      <Movies></Movies>
      {/* <Task></Task> */}
      {/* <div style={styleObj}>
        hello world ya {name.toLocaleUpperCase()}
      </div>
      <div>
        hii
      </div> */}
    </>
  )
}

export default App
