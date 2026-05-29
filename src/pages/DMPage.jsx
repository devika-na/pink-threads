import { useState } from "react";
import "../styles/dm.css";

function DMPage() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      text: "Hii girl 💗",
      sender: "them",
    },

    {
      text: "Heyyy ✨",
      sender: "me",
    },
  ]);

  const sendMessage = () => {

    if (message.trim() === "") return;

    const newMessage = {
      text: message,
      sender: "me",
    };

    setMessages([...messages, newMessage]);

    setMessage("");
  };

  return (
    <div className="dm-container">

      {/* SIDEBAR */}
      <div className="sidebar">

        <h1 className="logo">
          HerCircle
        </h1>

        <input
          type="text"
          placeholder="Search chats..."
          className="search-bar"
        />

        <div className="chat-user active-chat">

          <img
            src="https://i.pravatar.cc/150?img=32"
            alt=""
          />

          <div>

            <h3>Ariana</h3>

            <p>Online</p>

          </div>

        </div>

        <div className="chat-user">

          <img
            src="https://i.pravatar.cc/150?img=44"
            alt=""
          />

          <div>

            <h3>Mia</h3>

            <p>Typing...</p>

          </div>

        </div>

      </div>

      {/* CHAT SECTION */}
      <div className="chat-section">

        {/* TOP BAR */}
        <div className="chat-header">

          <div className="header-left">

            <img
              src="https://i.pravatar.cc/150?img=32"
              alt=""
            />

            <div>

              <h2>Ariana</h2>

              <p>Women Verified 💗</p>

            </div>

          </div>

          <button className="profile-btn">
            View Profile
          </button>

        </div>

        {/* MESSAGES */}
        <div className="messages">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={
                msg.sender === "me"
                  ? "my-message"
                  : "their-message"
              }
            >

              {msg.text}

            </div>

          ))}

        </div>

        {/* INPUT AREA */}
        <div className="message-input-area">

          <button className="icon-btn">
            📷
          </button>

          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="icon-btn">
            💗
          </button>

          <button
            className="send-btn"
            onClick={sendMessage}
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}

export default DMPage;