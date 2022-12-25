import React, { useEffect, useState } from "react";
import { PostContainer } from "./Post.style";
import { DeletePost } from "./ DeletePost";
import  {Message} from "./Msger"
import { APIurl, PostApiCall } from "../api";


export const Post = (props) => {
  const {token,isLoggedIn} = props
  const [posts, setPosts] = useState([]);
  console.log(isLoggedIn)
  // const token = localStorage.getItem("myToken")

  const getPost = async () => {
    try {
      const postapi = await PostApiCall({token})
      console.log(postapi)
      
      setPosts(postapi.posts);
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
        {posts.map((post, i) => {
          return (
            <div key={i}>
              <h1>{post.title}</h1>
              <p>{post.price}</p>

              <span>{post.author.username}</span>
              {post.isAuthor  &&
<DeletePost token={token} postid={post._id}/> }

<Message messages={post.messages} token={token} postid={post._id} />
              
            </div>
          );
        })}
      </PostContainer>
    </section>
  );
};
