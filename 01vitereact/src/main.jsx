
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'


function MyApp(){
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// };

const anotheruser = "chai aur code"
const ReactElement =React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click me to visit google',
  anotheruser
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
);


createRoot(document.getElementById('root')).render(
  
   //<App />
    ReactElement
    //anotherElement
    // or we can do the same with the given below as MyApp is function and we call it but hum aese likhenge nhi
    // MyApp()

)
