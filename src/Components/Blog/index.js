import { Outlet } from "react-router-dom"
import AddPost from "../BLogAll/AddPost"
import { useState } from "react";
import BlogAll from "../BLogAll";

function Blog(){
  const [reload,setReload] = useState(false);
  const handleReload = () =>{
              setReload(!reload);
  }
     return(
        <>
          <h1>Manage Blog</h1>
          <AddPost onReload = {handleReload}/>
          <BlogAll reload = {reload} />
          
        </>
     )
}
export default Blog