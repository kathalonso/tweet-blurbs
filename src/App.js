import React, {useState} from 'react';
import Tweet from './Tweet'

// create component in JSX
function App(){
  const[users, setUsers] = useState([
    { name: "Juan", message: "*death stare and cuddle*"},
    { name: "Mango", message: "i like meow in bathtub"},
    { name: "EJ", message: "horoscopos de durango!"},
  ])

// ----------Increment, Color-----------
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1)
  //   setRed(!isRed)
  

    return(
      <div className="app">
        {users.map(user => (
          <Tweet name={user.name} message={user.message} />
        ))}

      {/* ------------------- Increment, Color --------------- */}
        {/* <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1> */}

      {/*------------------- Tweets *---------------/}
        {/* <Tweet name="Juan" message="i lük at foodbowl" />
        <Tweet name="Mango" message="i like meow in bathtub" />
        <Tweet name="EJ" message="you are rude" />
        <Tweet name="Kati" message="💩💩💩" /> */}
        
      </div>
    )

  // const sayHello = () => {
  //   console.log('hello');
  // }


  // return(
  //   <div>
  //     <h1>Hello react</h1>
  //     <button onClick={sayHello}>Hello</button>
  //   </div>
  // )
}


// export component
export default App