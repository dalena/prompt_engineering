import React from 'react'

interface MeChatProps {
    message: string;
    imageUrl?: string;
}

const MeChat: React.FC<MeChatProps> = ({ message, imageUrl }) => {
    return (
        <div className="meChat rounded-sm bg-purpz-200 border-2 border-purpz-400 px-2 py-2 mb-4">
            {imageUrl && <img className="pb-2" src={imageUrl} alt="Chat Image" />}
            <p><span>Me:</span> {message}</p>
        </div>
    )
}

export default MeChat