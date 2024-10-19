import axios from 'axios';

// Defina a URL base da API
const API_URL = 'http://localhost:5000/api';

// Interface para o Chapter
export interface Chapter {
    _id: string;
    title: string;
    chapterNumber: number;
    mangaId: string;
    pages: string[];
    updatedAt: string;
}

export interface PageBase {
    image: string;
}

// Função para listar todos os capítulos de um mangá
export const getChaptersByMangaId = async (mangaId: string): Promise<Chapter[]> => {
    const response = await axios.get<Chapter[]>(`${API_URL}/mangas/${mangaId}/chapters`);
    return response.data;
};

// Função para buscar um capítulo por ID
export const getChapterById = async (id: string): Promise<Chapter> => {
    const response = await axios.get<Chapter>(`${API_URL}/chapters/${id}`);
    return response.data;
};

// Função para buscar uma pagina 
export const getPageFetched = async (id: string, page: number): Promise<PageBase> => {
    const response = await axios.get<PageBase>(`${API_URL}/chapters/${id}/pages/${page}`);
    return response.data;
};
