import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  // Function to format the current time as "HH:MM AM/PM"
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const isOwner = message.senderId === currentUser.uid;

  return (
    <div
      ref={ref}
      className={`message ${isOwner ? "owner" : ""}`}
      style={{ justifyContent: isOwner ? "flex-end" : "flex-start" }}
    >
      <div className="messageInfo">
        {/* <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        /> */}
      </div>
      <div className="messageContent">
        {message.text && <p>{message.text}</p>}
        {message.img && <img src={message.img} alt="" />}
        <span>{getCurrentTime()}</span> {/* Display the current time */}
      </div>
    </div>
  );
};

export default Message;
