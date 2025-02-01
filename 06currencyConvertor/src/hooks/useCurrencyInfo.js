// these are the custom hooks and most of the time we have these returned of the custom hooks as the js so use .js 
// custom hooks can also use your built in functions so we are going to do the same.
import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
   // here in this function we want to call an api when this function is call
   // so which hook we can use here is useEffect
   const [data,setData] = useState({})
   useEffect(() =>{
       fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
       .then((res) => res.json())
       .then((res) =>setData(res[currency]))
       console.log(data);
   }, [currency]) // yeh jo humne yha currency pass kia hai iska mtlb hai yeh hai kiyeh currency ek dependency hai jab jab humari ooper {currency}
   // mai kuch change ho tab tab humari yeh api call ho 
   return data;
}

export default useCurrencyInfo; //yeh functionlaity pura ka pura function return krke derhi hai hume