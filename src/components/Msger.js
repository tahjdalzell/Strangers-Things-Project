import React from "react";
import { useState } from "react";
import { APIurl, PostApiCall } from "../api";

export const Message = ({ token, postid, messages }) => {
  const [allMessages, setMesssages] = useState(messages);
  const [msg, setMsg] = useState("");
  //   console.log("token", token, postid);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${APIurl}/posts/${postid}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: msg,
          },
        }),
      });

      const json = await response.json();

      const postapi = await PostApiCall({ token });
      console.log(postapi);
      const singlePost = postapi.posts.find((element) => {
        return element._id === postid;
      });

      setMesssages(singlePost.messages);

      console.log("id", json.data.posts._id);
    } catch (err) {}
  };
  //   console.log(allMessages);

  return (
    <div>
      {allMessages.map((messages, i) => {
        return <p key={i}>{messages.content}</p>;
      })}
      ;
      <form onSubmit={handleSubmit}>
        <textarea
          name="message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button>Send Message</button>
      </form>
    </div>
  );
};

// export const MessagesList = ({ messages, posts }) => {
//   return (
//     <div>
//       {messages.map((message) => {
//         const post = posts.find((post) => post._id === message.post._id);
//         return <MessageForm key={message._id} {...message} post={post} />;
//       })}
//     </div>
//   );
// };
