import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function BlogDetail(){
    const params = useParams();
    const [posts,setPosts] = useState();
  
    useEffect(() =>{
        fetch(`https://dummyjson.com/posts/${params.id}`)
        .then(res =>res.json())
        .then(post =>{
            setPosts(post);
        })
    },[])
    return(
        <>
    
           {posts &&(
               <>
               <h1>{posts.title}</h1>
               <div>
                {posts.body}
               </div>
               </>
           
           )}
        
          
        </>
    )
}
export default BlogDetail;