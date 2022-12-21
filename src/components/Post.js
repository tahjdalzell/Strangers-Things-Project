import React, { useEffect, useState } from "react";
import { PostContainer } from "./Post.style";

export const Post = () => {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    try {
      const respone = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/posts"
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
            </div>
          );
        })}
      </PostContainer>
    </section>
  );
};
