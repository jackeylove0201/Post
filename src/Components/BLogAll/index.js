import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogAll.scss"
import AddPost from "./AddPost";
function BlogAll(props){
    const { reload } =props;
    const [posts, setState] = useState([]);
   
    useEffect(() =>{
        fetch("https://dummyjson.com/posts")
        .then(res => res.json())
        .then(data => {
           
            
            setState(data.posts);
            
            
        })

    },[reload]);
  
    console.log(posts);
    
   
    
    
    return (
        <>
        
        <div className="Post">
        {posts.map(item =>(
            <div className="Post__item">
                 <h2>{item.title}</h2>
                 <div className="Post__function">
                 <button>Delete</button>
                 <button>Edit</button>
                 <button>Read</button>
                 </div>
            </div>
          ))}

        </div>
         
        </>
    )
}
export default BlogAll;