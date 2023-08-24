import React, { useState } from 'react'
import {Box,Typography,TextField,Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from "../helper";

const Register = () => {
  const navigate= useNavigate();
  const [inputs,setInputs]=useState({
    name:'',
    email:'',
    password:''
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
      const {data} = await axios.post(`${BASE_URL}/api/v1/user/register`,{
        username:inputs.name,
        email:inputs.email,
        password:inputs.password
      })
      
        alert("User Register Successfully");
        navigate('/login')
      
    }catch(err){
      console.log(err)
    }
  } 
  
  return ( 
    <>
    <form action="" onSubmit={handleSubmit}>
    <Box maxWidth={450} display='flex' flexDirection={'Column'} alignItems='center' justifyContent={'center'} margin={'auto'} marginTop={5} boxShadow="10px 10px 20px #ccc" padding={3} borderRadius={5} bgcolor="black" // Set background color
        color="white" >
      <Typography variant='h4'
      padding={3}
      textAlign={'center'}
      sx={{ textTransform: "uppercase", padding: 3, textAlign: "center" , fontWeight:'Bold'}}
      >Register</Typography>


      <TextField placeholder='name'
      value={inputs.name}
      onChange={handleChange}
      name='name'
      margin='normal'
      type='text'
      sx={{ borderRadius: "10px", backgroundColor: "#f5f5f5", width: "100%" }}
      ></TextField>


      <TextField placeholder='email'
      value={inputs.email}
      onChange={handleChange}
      name='email' 
      margin='normal'
      type='email'
      sx={{ borderRadius: "10px", backgroundColor: "#f5f5f5", width: "100%" }}
      ></TextField>

      
      <TextField placeholder='password'
      value={inputs.password}
      onChange={handleChange}
      name='password'
      margin='normal'
      type='password'
      sx={{ borderRadius: "10px", backgroundColor: "#f5f5f5", width: "100%" }}
      ></TextField>
      <Button type='submit'  sx={{borderRadius:3,marginTop:3}} variant='contained' color='primary'>Submit</Button>
      <Button onClick={()=>navigate('/login')} sx={{borderRadius:3,marginTop:3}} variant='contained' color='primary' >Already Registered ? Please Login</Button>
    </Box>
    </form>
    </>
  )
}
 
export default Register 