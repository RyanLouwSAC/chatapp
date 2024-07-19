import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages([...messages, `User: ${userMessage}`]);
    setInput('');

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: userMessage,
      max_tokens: 150,
    });

    if (response.data.choices) {
      setMessages([...messages, `User: ${userMessage}`, `AI: ${response.data.choices[0].text?.trim()}`]);
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatInterface;
