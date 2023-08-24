import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { BASE_URL } from "../helper";


 const UserBlogs = () => {

    // const isUser = 
  const [blogs,setBlogs] = useState([])
  const getUserBlogs = async()=>{
    try{
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(`${BASE_URL}/api/v1/blog/user-blog/${id}`);
      setBlogs(data?.userBlog.blogs);
    }catch(err){
      console.log(err)
    }
  } 

  useEffect(() => {
    getUserBlogs();
  },[]);


   return (
     <div>
        {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            id={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            time={blog.createdAt}
          />
        ))
      ) : (
        <h1>You Havent Created a blog</h1>
      )}
     </div>
   )
 }
 
 export default UserBlogs