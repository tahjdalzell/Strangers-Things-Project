import React from "react";
import { useState } from "react";
// import { json } from "react-router-dom";
import { APIurl } from "../api";
// import { Login } from "./Login";
import { LoginButt } from "./Login.style";


export const CreatPost = ({ token }) => {
    // console.log(token)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${APIurl}/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:  `Bearer ${token}`,
          },
          body: JSON.stringify({
            post: {
              title,
              description,
              price,
              location,
              willDeliver,
            },
          }),
        }
      );
      const json = await response.json();
    } catch (err) {}
  };

  return (
    <section>
      <h1>Make Post</h1>
      {/* {<p>{saveToken(json.data.username)}</p>} */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder='TITLE' onChange={(e)=>{
            setTitle(e.target.value)
        }} />
        <input type="text" value={description} placeholder='DESCRIPTION' onChange={(e)=>{
            setDescription(e.target.value)
        }} />
          <input type="text" value={price} placeholder='$' onChange={(e)=>{
            setPrice(e.target.value)
        }} />
          <input type="text" value={location} placeholder='LOCATION' onChange={(e)=>{
            setLocation(e.target.value)
        }} />
        <span>Will Deliver</span>
          <input type="checkbox" checked={willDeliver}  onChange={(e)=>{
            setWillDeliver(e.target.checked)
        }} />
        <LoginButt type="submit">Submit</LoginButt>
        


      </form>
    </section>
  );
};
