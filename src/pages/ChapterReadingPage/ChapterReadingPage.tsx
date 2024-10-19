import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageImage from './PageImage';
import MenuProps from '../../components/MenuProps/MenuProps';
import { getChapterById, getPageFetched } from '../../services/chapterService';
import { Chapter , PageBase} from '../../services/chapterService';

const ChapterReadingPage: React.FC = () => {
    const { id, chapterId } = useParams<{ id: string, chapterId: string }>();
    const [pages, setPages] = useState<string[]>([]);
    const [chapter, setChapter] = useState<Chapter | null>(null);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        // Lógica para carregar as páginas do capítulo a partir de uma API ou banco de dados
        // Exemplo de API: fetch(`/api/mangas/${mangaId}/chapters/${chapterId}/pages`)
        const fetchChapter = async () => {
            const fetchedPages = ['']; // Placeholder para as páginas
            if (chapterId){
                const fetchedChapter = await getChapterById(chapterId);
                setChapter(fetchedChapter);

                console.log("Chapter " + fetchedChapter);
                if (fetchedChapter){                    
                    if(fetchedChapter?.pages.length){
                        fetchedPages.pop();
                        for (let index = 0; index < fetchedChapter?.pages.length; index++) {
                            const fetchedPage = await getPageFetched(chapterId, index+1)
                            fetchedPages.push(fetchedPage.image);
                        }                    
                    }            
                }    
            };
            
            setPages(fetchedPages);
            console.log(fetchedPages);
        }

        fetchChapter();
    }, [id, chapterId]);

    const goToPreviousPage = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(currentPageIndex - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPageIndex < pages.length - 1) {
            setCurrentPageIndex(currentPageIndex + 1);
        }
    };

    const goToPreviousChapter = () => {
        // Lógica para ir ao capítulo anterior
        navigate(`/manga/${id}/chapter/${Number(chapterId) - 1}`);
    };

    const goToNextChapter = () => {
        // Lógica para ir ao próximo capítulo
        navigate(`/manga/${id}/chapter/${Number(chapterId) + 1}`);
    };

    const returnToMangaPage = () => {
        navigate(`/manga/${id}`);
    };

    return (
        <div className="chapter-reading-page ">
            <div className="navigation-buttons flex">
                <button onClick={returnToMangaPage}>Página do mangá</button>
            </div>
            <div className="navigation-buttons text-center ">
                <button onClick={goToPreviousChapter} disabled={chapterId === '1'}>{'|<<'}</button>
                <button onClick={goToPreviousPage} disabled={currentPageIndex === 0}>{"<<"}</button>
                <button onClick={goToNextPage} disabled={currentPageIndex === pages.length - 1}>{">>"}</button>
                <button onClick={goToNextChapter}>{">>|"}</button>
            </div>

            <PageImage
                pageUrl={pages[currentPageIndex]}
                onPreviousPage={goToPreviousPage}
                onNextPage={goToNextPage}
            />

            {/* O botão de menu e o menu propriamente dito */}
            <MenuProps />

            <div className="navigation-buttons text-center ">
                <button onClick={goToPreviousChapter} disabled={chapterId === '1'}>{'|<<'}</button>
                <button onClick={goToPreviousPage} disabled={currentPageIndex === 0}>{"<<"}</button>
                <button onClick={goToNextPage} disabled={currentPageIndex === pages.length - 1}>{">>"}</button>
                <button onClick={goToNextChapter}>{">>|"}</button>
            </div>
        </div>
    );
};

export default ChapterReadingPage;
