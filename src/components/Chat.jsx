import React, { useContext, useState } from "react";
import Back from "../img/back.png";
import Messages from "./Messages";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import Sidebar from "./Sidebar";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const [showChat, setShowChat] = useState(true);

  const handleBackClick = () => {
    setShowChat(false);
  };

  const handleSidebarClick = () => {
    setShowChat(true);
  };

  return (
    <div className="chat">
      {showChat ? (
        <>
          <div className="chatInfo">
            <img src={Back} alt="" onClick={handleBackClick} />
            <span>{data.user?.displayName}</span>
            <div className="navbar">
              <button className="out" onClick={() => signOut(auth)}>Read Mode</button>
            </div>
          </div>
          <Messages />
          <Input />
        </>
      ) : (
        <div className="sidebar" onClick={handleSidebarClick}>
        <Sidebar/>
        </div>
      )}
    </div>
  );
};

export default Chat;
