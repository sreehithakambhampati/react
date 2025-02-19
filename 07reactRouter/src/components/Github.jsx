import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
//     const[data,setData] = useState("");
//     useEffect(() => {
// fetch(`https://api.github.com/users/sreehithakambhampati`)
// .then(response => response.json())
// .then(data => {
//     console.log(data)
//     setData(data)
// })
//     },[])
  return (
    <div className='text-center'>
        <img src={data.avatar_url} alt="" />
      Github followers : {data.followers}
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async() => {
    const response = await fetch(`https://api.github.com/users/sreehithakambhampati`)
    return response.json()
}
