'use client';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import UserPrompt from "@/components/userPrompt"
import ChatMessage from "@/components/chatMessage"
import { useState } from "react";

export interface ChatEntry {
  contents: Content[]
  isBot: boolean
}

export interface Content {
  content: string
  contentType: string
}

export default function Component() {

  // const chatHistory = [
  //   {
  //     message: "How can i help you today",
  //     isBot: true
  //   },

  //   {
  //     message: "Make me a sandwich",
  //     isBot: false
  //   },
  //   {
  //     message: "Actually, a burger",
  //     isBot: false
  //   },
  //   {
  //     message: "Make it yourself",
  //     isBot: true
  //   },
  //   {
  //     message: "How can i help you today",
  //     isBot: true
  //   },

  //   {
  //     message: "Make me a sandwich",
  //     isBot: false
  //   },
  //   {
  //     message: "Actually, a burger",
  //     isBot: false
  //   },
  //   {
  //     message: "Make it yourself",
  //     isBot: true
  //   },
  //   {
  //     message: "How can i help you today",
  //     isBot: true
  //   },

  //   {
  //     message: "Make me a sandwich",
  //     isBot: false
  //   },
  //   {
  //     message: "Actually, a burger",
  //     isBot: false
  //   },
  //   {
  //     message: "Make it yourself",
  //     isBot: true
  //   },
  //   {
  //     message: "How can i help you today",
  //     isBot: true
  //   },

  //   {
  //     message: "Make me a sandwich",
  //     isBot: false
  //   },
  //   {
  //     message: "Actually, a burger",
  //     isBot: false
  //   },
  //   {
  //     message: "Make it yourself",
  //     isBot: true
  //   },
  // ]

  const [chatHistory, setChatHistory] = useState<ChatEntry[]>([
    {
      contents: [
        {
          content: "This is my default answer.",
          contentType: "text"
        }
      ],
      isBot: true
    }
  ]);

  const addNewChatEntry = (text: string) => {
    const newChatHistory = chatHistory.slice();
    newChatHistory.push({
      contents: [
        {
          content: text,
          contentType: 'text'
        },
      ],
      isBot: true
    });
    if (["b", "image"].includes(text)) {
      newChatHistory.push({
        contents: [
          {
            content: "This is an image:",
            contentType: 'text'
          },
          {
            content: "https://colorlib.com/wp/wp-content/uploads/sites/2/wavo-portfolio-website-template.jpg",
            contentType: "image",
          }
        ],
        isBot: true
      }); 
    }
    else {
      newChatHistory.push({
        contents: [
          {
            content: "This is my default message",
            contentType: "text"
          }
        ],
        isBot: true
      });  
    }
    setChatHistory(newChatHistory);
  }
  

  return (
    <div className="w-screen h-screen p-4">
      <div className="flex flex-col h-full rounded-lg border border-gray-200 dark:border-gray-800">
        <div className="border-b border-gray-200 dark:border-gray-800 p-6 flex-1 overflow-auto">
          <div className="grid gap-4">
            {
              chatHistory.map(chatEntry => <ChatMessage chatEntry={chatEntry} />)
            }
          </div>
        </div>
        <UserPrompt handleUserPromptSubmission={addNewChatEntry}/>
      </div>
    </div>
  )
}