
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from 'react-router-dom'; 
import {BASE_URL} from "../helper"


const BlogDetails = () => {
   const { id } = useParams(); 
  const navigate= useNavigate();
  const [inputs,setInputs]=useState({
    title:'',
    description:'',
    image:''
  })

  const handleChange = (e)=>{
    setInputs(prevState =>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    // console.log(inputs)
    try{
      const {data} = await axios.put(`${BASE_URL}/api/v1/blog/update-blog/${id}`,{
        title:inputs.title,
        description:inputs.description,
        image:inputs.image,
        id:id
      })
      
        // alert("User Register Successfully");
        toast.success('Blog updated successfully')
        navigate('/blogs')
      
    }catch(err){
      console.log(err)
    }
  } 
  
  return (
    <>

      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          borderRadius={5}
        >
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase", padding: 3, textAlign: "center" , fontWeight:'Bold'}}
            padding={3}
            textAlign="center"
          >
            Update Blog
          </Typography>

          <TextField
            placeholder="title"
            value={inputs.title}
            onChange={handleChange}
            name="title"
            margin="normal"
            type={"text"}
            required
            sx={{ borderRadius: "10px", backgroundColor: "#f5f5f5", width: "100%" }}
          />
          <TextField
            placeholder="description"
            value={inputs.description}
            onChange={handleChange}
            name="description"
            margin="normal"
            type={"text"}
            required
            sx={{ borderRadius: "10px", backgroundColor: "#f5f5f5", width: "100%" }}
          />
          <TextField
            placeholder="enter image url from google"
            value={inputs.image}
            onChange={handleChange}
            name="image"
            margin="normal"
            type={"text"}
            required
            sx={{ borderRadius: "10px", backgroundColor: "#f5f5f5", width: "100%" }}
          />
          

          <Button
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="primary"
          >
            Update
          </Button>
          
        </Box>
      </form>
    </>
  )
}

export default BlogDetails

