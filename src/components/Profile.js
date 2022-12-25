import React, { useState }  from "react";
import { PostContainer } from "./Post.style";
import { APIurl ,apiPost} from "../api";
import { useEffect } from "react";


export const Profile =  ({ token }) => {
  const [showUserData,setShowUserData] = useState({})

  const displayProfile = async () =>  {
    
    
    const respone = await fetch(`${APIurl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const apiPost = await respone.json();
    console.log(apiPost)
    if (!apiPost.success) {
        throw apiPost.error.message;
      }else {
        setShowUserData(apiPost.data)
        console.log(token)
      }
  } 
  useEffect(()=> {
    displayProfile()
  }, []);

  return (
    <section>
      <h1>Welcome</h1>
      {showUserData.username}
         
        {/* {showUserData.posts.map((post, i) => {
          return (
            <div key={i}>
          
              <h1>{post.title}</h1>
              <p>{post.price}</p>
              <span>{post.author.username}</span>
            
            </div>
          );
        })} */}
     
    </section>
  );
};

export default Profile;
