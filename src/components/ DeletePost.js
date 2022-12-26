import React from "react";
// import { useState } from "react";
// import { json } from "react-router-dom";
import { APIurl } from "../api";
// import { Login } from "./Login";
// import { LoginButt } from "./Login.style";

export const DeletePost = (props) => {
  const tok = props.token;
  const handleSubmit = async (postid) => {
    // console.log('my props',props)
    try {
      const response = await fetch(`${APIurl}/posts/${postid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tok}`,
        },
      });
      const json = await response.json();
      //  console.log('id',json.data.posts._id)
    } catch (err) {}
  };
  return (
    <button
      onClick={() => {
        handleSubmit(props.postid);
      }}
    >
      Delete
    </button>
  );
};
