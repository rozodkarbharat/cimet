import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
    const params =useParams()
    const [blog,setBlog]=useState({})

    useEffect(()=>{
        async function fetchData(){
            try{
             let response = await axios(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
              setBlog(response.data)
        }
        catch(err){
            console.log('Error fetching data:', err)
        }

        }
        if(params.id){
            fetchData()
        }

    },[params])
  return (
    <div className='text-white py-20 w-[90%] m-auto'>
      <p className='font-bold text-2xl text-orange-600'>{blog?.title}</p>
      <p className='w-[80%] py-10 text-white'>{blog?.body}</p>
    </div>
  )
}

export default BlogDetail
