// src/pages/MangaDetailsPage.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMangaById, Manga } from '../../services/mangaService';
import { Chapter, getChaptersByMangaId } from '../../services/chapterService';


const MangaDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    //const imageUrl = placeholderImages[id || 'default'] || 'https://via.placeholder.com/300/CCCCCC/FFFFFF?text=Manga';
    const [manga, setManga] = useState<Manga | null>(null); // Estado para armazenar o mangá
    const [chapters, setChapter] = useState<Chapter[]>([]); // Estado para armazenar o mangá

    useEffect(() => {
        const fetchManga = async () => {
            if (id) {
                try {
                    const fetchedManga = await getMangaById(id);
                    setManga(fetchedManga);

                    const fetchedChapters = await getChaptersByMangaId(id);
                    setChapter(fetchedChapters);
                } catch (error) {
                    console.error('Erro ao buscar o mangá:', error);
                }
            }
        };
        fetchManga();
    }, [id]);

    if (!manga) {
        return <div>Carregando...</div>; // Exibe enquanto os dados estão sendo carregados
    }

    return (
        <div className="flex flex-col items-center max-w-4xl mx-auto p-4">
           <h1 className="text-2xl font-bold mb-4">{manga.title}</h1>
            <img src={`data:image/jpeg;base64,${manga.coverImage}`} alt={`Manga ${id}`} className="w-48 h-auto mb-4" />
            <div>
                <h1 className="text-3xl font-bold mb-2">{manga.title}</h1>
                <p><strong>Autor:</strong> {manga.author}</p>
                <p><strong>Artista:</strong> {manga.artist}</p>
                <p><strong>Gênero:</strong> {manga.genres}</p>
                <p><strong>Status:</strong> {manga.status}</p>
                <p><strong>Sinopse:</strong> {manga.summary}</p>
            </div>

            <div className="mt-6 w-full">
                <h2 className="text-xl font-bold mb-4">Chapters</h2>
                <ul className="w-full">
                    {chapters.map((chapter, index) => (
                        <li key={index} className="mb-2 p-2 border-b border-gray-300">
                            <Link to={`/manga/${id}/chapter/${chapter._id}`} className="flex justify-between hover:bg-gray-100 p-2">
                                <span>{chapter.title}</span>
                                <span>{chapter.updatedAt}</span>
                                <span>Chapter {chapter.chapterNumber}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
}

export default MangaDetailsPage;
