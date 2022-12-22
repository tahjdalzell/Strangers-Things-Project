import React, { useEffect, useState } from "react";
import { PostContainer } from "./Post.style";
import { DeletePost } from "./ DeletePost";

export const Post = ({token}) => {
  const [post, setPost] = useState([]);
  // const token = localStorage.getItem("myToken")

  const getPost = async () => {
    try {
      const respone = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/posts",{
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        }
      );
      const apiPost = await respone.json();
      console.log(apiPost);
      setPost(apiPost.data.posts);
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <section>
      <h1>Post Page</h1>
      <PostContainer>
        {post.map((e, i) => {
          return (
            <div key={i}>
              <h1>{e.title}</h1>
              <p>{e.price}</p>

              <span>{e.author.username}</span>
              {e.isAuthor  ? 
<DeletePost token={token} postid={e._id}/> : null}

              
              
            </div>
          );
        })}
      </PostContainer>
    </section>
  );
};
