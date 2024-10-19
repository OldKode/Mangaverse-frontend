// src/components/MangaCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MangaCardProps {
    id: string;
    title: string;
    imageBase64: string;
}

const MangaCard: React.FC<MangaCardProps> = ({id,  title, imageBase64 }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/manga/${id}`);
    };

    return (
        <div 
            className="max-w-44 rounded-lg border border-gray-300 shadow-lg flex flex-col items-center justify-center p-1"
            onClick={handleCardClick}        
           >
            <img 
                className="object-cover mb-2" 
                src={`data:image/jpeg;base64,${imageBase64}`} 
                alt={title} 
               />
            <div className="text-center text-xs font-bold text-wrap">
                {title}
            </div>
        </div>
    );
}

export default MangaCard;
