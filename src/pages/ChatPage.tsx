import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import Sidebar from '../components/navigation/Sidebar';
import { useUserStore } from '../store/userStore';

interface Message {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  text: string;
  timestamp: string;
}

export default function ChatPage() {
  const user = useUserStore((state) => state.user);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mock initial messages
    setMessages([
      {
        id: '1',
        user: {
          name: 'Alice Cooper',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        },
        text: 'Hey everyone! Who\'s going to the tech conference next week?',
        timestamp: '2:30 PM',
      },
      {
        id: '2',
        user: {
          name: 'Bob Wilson',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        },
        text: 'I\'ll be there! Looking forward to the workshops.',
        timestamp: '2:32 PM',
      },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;

    const message: Message = {
      id: Date.now().toString(),
      user: {
        name: user.name,
        avatar: user.avatar,
      },
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 h-screen flex flex-col">
        <div className="bg-white border-b p-4">
          <h1 className="text-xl font-semibold text-gray-800">Community Chat</h1>
          <p className="text-sm text-gray-500">Connect with other community members</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 ${
                message.user.name === user?.name ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <img
                src={message.user.avatar}
                alt={message.user.name}
                className="h-8 w-8 rounded-full"
              />
              <div
                className={`flex flex-col ${
                  message.user.name === user?.name ? 'items-end' : ''
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">
                    {message.user.name}
                  </span>
                  <span className="text-xs text-gray-500">{message.timestamp}</span>
                </div>
                <div
                  className={`mt-1 px-4 py-2 rounded-lg ${
                    message.user.name === user?.name
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t">
          <div className="flex space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}