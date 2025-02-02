import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(() =>{
     fetch('https://api.github.com/users/shobhikaa16')
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        setData(data)
      })
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )  // to take these data like followers from the API's we have to study them like in github api there is key with the follower name so are directley taking the values.
}

export default Github