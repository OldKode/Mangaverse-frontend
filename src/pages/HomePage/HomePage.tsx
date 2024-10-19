// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import MangaCard from '../../components/MangaCard/MangaCard';
import { getAllMangas, Manga } from '../../services/mangaService';

const HomePage: React.FC = () => {
    const today = new Date().toLocaleDateString();

    const [mangas, setMangas] = useState<Manga[]>([]);

    useEffect(() => {
        const fetchMangas = async () => {
            const result = await getAllMangas();
            setMangas(result);
        };

        fetchMangas();
    }, []);

    return (
        <div className="mt-4 w-full">
            <h1 className="text-3xl font-bold mb-4">Bem vindo ao MangaVerse!</h1>
            <p className="text-lg mb-4">Ultima atualização: {today}</p>

            {/* <div className="grid grid-cols-3 md:grid-cols-3 gap-4"> */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {mangas.map((manga) => (
                    <MangaCard key={manga._id} id={manga._id} title={manga.title} imageBase64={manga.coverImage} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
