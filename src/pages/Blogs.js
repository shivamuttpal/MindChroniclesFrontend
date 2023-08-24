import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Blogcard from '../components/BlogCard'
import { BASE_URL } from "../helper";
// import {Button} from '@mui/material'

const Blogs = () => {
  const [blogs,setBlogs] = useState([])
  const [count,setCount] = useState(0)
  const getAllBlogs = async()=>{
    try{
      const {data} = await axios.get(`${BASE_URL}/api/v1/blog/all-blog`);
      // setBlogs(response.data)
      setBlogs(data?.blogs.reverse());
      // console.log(data?.blogs); 
    }catch(err){
      console.log(err)
    }
  } 

  useEffect(() => {
    getAllBlogs();
  },[]);

  return (
    <>
    <div>
      {blogs &&
        blogs.map((blog) => (
          <Blogcard
          
            id={blog?._id}
            isUser={localStorage.getItem("userId") === blog?.user?._id}
            title={blog?.title}
            description={blog?.description}
            image={blog?.image}
            username={blog?.user?.username}
            time={blog.createdAt}
          />
        ))}
 
    </div>
    </>
  )
}

export default Blogs  

