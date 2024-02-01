import React from 'react'
import Link from 'next/link';


interface GptChatProps {
    imageUrl?: string;
    message?: string;
    htmlContent?: string;
}

const GptChat: React.FC<GptChatProps> = ({ imageUrl, message, htmlContent }) => {
    return (
        <div className="gptChat flex flex-col font-mono rounded-sm bg-purpz-50 border-2 border-purpz-200 px-2 py-2 mb-4">
            <span>GPT:</span>
            {imageUrl && <img className="pb-2" src={imageUrl} alt="Chat Image" />}
            {message && <p>{message}</p>}
            {htmlContent && <div dangerouslySetInnerHTML={{ __html: htmlContent }} />}
        </div>
    )
}

export default GptChat