import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserBlogs from "./pages/UserBlogs";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import { Toaster } from "react-hot-toast";
import Single from './pages/Single'

function App() {
  return (
    <>
    <Header></Header>
    <Toaster />
    <Routes>
    <Route path='/' element={<Blogs></Blogs>}></Route>
    <Route path='/blogs' element={<Blogs></Blogs>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path="/my-blogs" element={<UserBlogs />} />
    <Route path="/blog-details/:id" element={<BlogDetails />} />
    <Route path="/create-blog" element={<CreateBlog />} />
    <Route path='/single/:id' element={<Single/>}></Route>

    
    </Routes> 
    </>
  );
}

export default App;
