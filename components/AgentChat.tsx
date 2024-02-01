import React from 'react'

interface ChatProps {
    name?: string;
    color?: 'a' | 'b' | 'c' | 'd' | 'e';
    isInit?: boolean;
    children?: React.ReactNode;
    imageUrl?: string;
}

const AgentChat: React.FC<ChatProps> = ({ name, color, imageUrl, isInit, children }) => {
    const colorMap = isInit ? {
        a: 'bg-redz-100 border-redz-400 border-dashed',
        b: 'bg-greenz-100 border-greenz-400 border-dashed',
        c: 'bg-bluez-100 border-bluez-400 border-dashed',
        d: 'bg-purpz-50 border-purpz-200 border-dashed',
        e: 'bg-purpz-200 border-purpz-400 border-dashed',
    } : {
        a: 'bg-redz-200 border-redz-400',
        b: 'bg-greenz-200 border-greenz-400',
        c: 'bg-bluez-200 border-bluez-400',
        d: 'bg-purpz-50 border-purpz-200',
        e: 'bg-purpz-200 border-purpz-400',
    }

    const backgroundColor = color ? colorMap[color] : 'bg-purpz-50';

    return (
        <div className={`gptChat flex flex-col font-mono rounded-sm border-2 px-2 py-2 mb-4 ${backgroundColor}`}>
            <span>{name}</span>
            {imageUrl && <img className="pb-2" src={imageUrl} alt="Chat Image" />}
            {children}
            {/* {message && <p>{message}</p>} */}
        </div>
    )
}

export default AgentChat