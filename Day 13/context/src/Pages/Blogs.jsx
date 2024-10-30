import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation, useSearchParams} from 'react-router-dom'
import BlogCard from '../Components/BlogCard'

const Blogs = () => {
  const blogs = useLoaderData([])
  const [page,setPage]=useState(1)
  const [tenBlogs,settenBlogs]=useState([])
  const [totalPages,settotalPages]=useState([])
  let [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation()

  useEffect(()=>{
    let num = [...blogs]
    const {search} =location
    let currentPage = search.length > 0 ? search[search.length-1] :1
    handlePagination(currentPage-1)
    settotalPages(new Array(num.length/10).fill(0))
  },[])

  function handlePagination(index) {
    let tempBlogs = [...blogs]
    setSearchParams({page: index+1})
    tempBlogs=tempBlogs.slice(index*10,(index*10)+10)
    console.log(tempBlogs,'data')
    settenBlogs(tempBlogs)
    setPage(index+1)
  }

  return (
    <div className='pt-10'>
      <div className='w-[90%] m-auto  grid grid-cols-4 gap-4 pt-10'>
        {
          tenBlogs?.map((blog) => {
            console.log(blog ,'blog')
            return <BlogCard key={blog.id} blog={blog} />
          })
        }
      </div>
      <div className='flex gap-2 justify-end w-[90%] m-auto py-5'>
        {
         totalPages?.map((_,index) => {
            return (
              <button onClick={()=>handlePagination(index)} className={` px-5 py-1 cursor-pointer1 b ${page==index+1? "bg-orange-400" :"bg-white"} ${page==index+1? "text-white" :"text-black"}`} key={index}>
                {index+1}
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

export default Blogs