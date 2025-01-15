import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //using usestate hook- give any default value true, false,[].{object}
  let [counter, setCounter]=useState(15) // counter ki default vlaue wehave given herer 15
// setCounter is a method that used to variate the value of the counter 
  //let counter=15; 
  const addValue =()=>{
    console.log("clicked",counter);
    //counter = counter +1;
    if (counter < 20) {
     setCounter(counter+1)
     setCounter(counter+1)// baar baar likhne par bhi ek clickpar ek hi baar update krtahai  aesa isiliye kyuki pura batch bnta hai 
     // aur vo dekhat hai pura batch ban rha hai ans all work is same so ek hi baar hoga
     // but if we really want to update more than once in single click then we will use
     setCounter(prevCounter=> prevCounter+1)// now using this then we can use it to update the num at once
     setCounter(prevCounter=> prevCounter+1)
   
    }
 }

 const removeVlaue=()=>{
  console.log("remove",counter);
  if(counter > 0){
  setCounter(counter-1)
  }
 }
// react , react krti hai variable ke updation par
  return (
    <>
      <h1>Chai aur react I am learining react</h1>
      <h3>Counter value:{counter}</h3>
      
      <button
      onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removeVlaue}>remove value{counter}</button>
      <p>footer:{counter}</p>
    </>
    // here we use counter mostly everywhere so it will be difficult with javascript 
    // to update every time and select it again and again with id/query etc so react gives us hooks
    // which says that i will change the game in the ui/ux and manage all at a time
    // ui updation ko react control krta hai
  )
}

export default App
 