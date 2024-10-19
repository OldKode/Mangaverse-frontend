import React, { useState } from 'react';

const MenuProps: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isPageListOpen, setPageListOpen] = useState(false);
    const [isChapterListOpen, setChapterListOpen] = useState(false);

    return (
        <div className="fixed top-0 right-0 mt-16 mr-4">
            <button onClick={() => setMenuOpen(!isMenuOpen)}>Menu</button>
            {isMenuOpen && (
                <div className="bg-gray-700 p-4 rounded shadow-lg flex flex-col">
                    <button onClick={() => setMenuOpen(false)}>Esconder Menu</button>
                    <div>
                        <button onClick={() => setPageListOpen(!isPageListOpen)}>Selecione a Página</button>
                        {isPageListOpen && (
                            <ul>
                                <li>Página 1</li>
                                <li>Página 2</li>
                                <li>Página 3</li>
                            </ul>
                        )}
                    </div>
                    <div>
                        <button onClick={() => setChapterListOpen(!isChapterListOpen)}>Selecione o Capítulo</button>
                        {isChapterListOpen && (
                            <ul>
                                <li>Capítulo 1</li>
                                <li>Capítulo 2</li>
                                <li>Capítulo 3</li>
                            </ul>
                        )}
                    </div>
                    <button>Leitura Contínua</button>
                    <button>Preencher Altura</button>
                    <button>Esconder Navbar</button>
                </div>
            )}
        </div>
    );
};

export default MenuProps;
