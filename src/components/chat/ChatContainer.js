'use client';

import { useState } from 'react';

export default function ChatContainer() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    // Clear input
    setInput('');
    
    // Here we'll later add the API call
  };

  return (
   <div className="chatContainer flex flex-col bg-red text-black rounded-xl min-w-xl min-h-xl">
      <div className="user-chatbox p-2 pl-5 z-10 absolute bg-white min-w-4000">
        <span>Chat anything</span>
      </div>
   </div>
  );
}