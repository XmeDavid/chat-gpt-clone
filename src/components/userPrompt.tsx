'use client';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { MouseEventHandler, useState } from "react";


export default function UserPrompt({ handleUserPromptSubmission }: {handleUserPromptSubmission: Function}) {

const [userPrompt, setUserPrompt] = useState<string>('');

const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPrompt(event.target.value);
};

const handleButtonClick = () => {
    handleUserPromptSubmission(userPrompt);
    setUserPrompt('');
}

  
return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center gap-4">
    <Input value={userPrompt} onChange={handleUserInput} placeholder="Type your message here."/>
    <Button onClick={handleButtonClick}>Send</Button>
    </div>
);
}