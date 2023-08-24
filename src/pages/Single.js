import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams
import { BASE_URL } from "../helper";

const Single = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams(); // Access the id from URL parameters using useParams

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/v1/blog/get-blog/${id}`);
                setBlog(response.data.blog);
                console.log(response.data.blog);
            } catch (err) {
                console.error('Error fetching blog details:', err);
            }
        };

        fetchBlog();
    }, [id]); // Include id in the dependency array

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'  ,color:'white'}}>
            <h1>{blog.title}</h1>
            <img src={blog.image} alt="" style={{ width: 'auto', height: '50vh' }} />
            <p>{blog.description}</p>
            {/* Render other blog details */}
        </div>
    ) 
} 

export default Single; 
