import React, { useState } from "react";

const MessagesModal = ({ isOpen, onClose }) => {
  const users = [
    { id: 1, name: "Devansh Kumar" },
    { id: 2, name: "Emily Stone" },
    { id: 3, name: "Amit Patel" },
  ];

  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState({
    "Devansh Kumar": ["Hey Devansh, welcome onboard!"],
    "Emily Stone": ["Hi Emily, your project looks great!"],
    "Amit Patel": ["Amit, we need your feedback on the layout."],
  });

  const handleSend = () => {
    if (!messageInput.trim()) return;
    setMessages((prev) => ({
      ...prev,
      [selectedUser.name]: [...(prev[selectedUser.name] || []), messageInput],
    }));
    setMessageInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-2">
      <div className="bg-white rounded-lg w-full max-w-4xl h-[500px] flex shadow-lg overflow-hidden">
        
        {/* Users Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-3">🧑 Messages</h2>
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`cursor-pointer p-2 mb-2 rounded-lg ${
                selectedUser?.id === user.id ? "bg-blue-200" : "hover:bg-gray-200"
              }`}
            >
              {user.name}
            </div>
          ))}
        </div>

        {/* Chat Window */}
        <div className="w-2/3 flex flex-col justify-between p-4 bg-white">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">{selectedUser?.name}</h2>
            <button onClick={onClose} className="text-red-500 hover:underline text-sm">Close</button>
          </div>

          {/* Message History */}
          <div className="flex flex-col gap-2 overflow-y-auto flex-grow mb-4 p-2 border rounded shadow-inner bg-gray-50">
            {(messages[selectedUser.name] || []).map((msg, index) => (
              <div key={index} className="self-start bg-blue-100 px-3 py-2 rounded-lg max-w-xs">
                {msg}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="flex items-center gap-2">
            <textarea
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Write a reply..."
              rows={2}
              className="w-full px-4 py-2 border rounded resize-none"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={!messageInput.trim()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesModal;
