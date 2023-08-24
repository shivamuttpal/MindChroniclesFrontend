import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
import { BASE_URL } from "../helper";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${BASE_URL}/api/v1/user/login`, {
        email: inputs.email,
        password: inputs.password,
      });
      
      localStorage.setItem("userId", data?.user._id);
      dispatch(authActions.login());
      toast.success("User logged in successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    } 
  }; 

  return (
    <form onSubmit={handleSubmit}>
      <Box
        maxWidth={450}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop={5}
        boxShadow="10px 10px 20px #ccc"
        padding={3}
        borderRadius={5}
        bgcolor="black" // Set background color
        color="white" // Set text color
      >
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", padding: 3, textAlign: "center" , fontWeight:'Bold'}}
        >
          Login
        </Typography>

        <TextField
          placeholder="Email"
          value={inputs.email}
          name="email"
          margin="normal"
          type="email"
          required
          onChange={handleChange}
          sx={{ borderRadius: "10px", backgroundColor: "#f5f5f5", width: "100%" }}
        />

        <TextField 
          placeholder="Password"
          value={inputs.password}
          name="password"
          margin="normal"
          type="password"
          required
          onChange={handleChange}
          sx={{ borderRadius: "10px", backgroundColor: "#f5f5f5", width: "100%" }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ borderRadius: 3, marginTop: 3 }}
        >
          Submit
        </Button>

        <Button
          onClick={() => navigate("/register")}
          variant="text"
          sx={{
            borderRadius: 3,
            marginTop: 3,
            // width: "100%",
            // backgroundColor: "#e0e0e0", // Set background color
          }}
        >
          Not a user? Please Register
        </Button>
      </Box>
    </form>
  );
};

export default Login;
