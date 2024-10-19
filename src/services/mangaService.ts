import axios from 'axios';

// Defina a URL base da API
const API_URL = 'http://localhost:5000/api/manga';

// Interface para o Manga
export interface Manga {
    _id: string;
    title: string;
    author: string;
    artist: string;
    genres: string;
    status: string;
    summary: string;
    rating:number;
    view:number;
    publishDate:Date;
    coverImage: string;
    chapters: Chapter[];
}

export interface Chapter {
    _id: string;
    title: string;
    chapterNumber: number;
    updatedAt: string;
}

// Função para listar todos os mangas
export const getAllMangas = async (): Promise<Manga[]> => {
    const response = await axios.get<Manga[]>(`${API_URL}`);
    return response.data;
};

// Função para buscar um manga por ID
export const getMangaById = async (id: string): Promise<Manga> => {
    const response = await axios.get<Manga>(`${API_URL}/${id}`);
    return response.data;
};

