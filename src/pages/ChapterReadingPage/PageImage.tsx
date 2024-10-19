import React from 'react';

interface PageImageProps {
    pageUrl: string;
    onPreviousPage: () => void;
    onNextPage: () => void;
}

const PageImage: React.FC<PageImageProps> = ({ pageUrl, onPreviousPage, onNextPage }) => {
    return (
        <div
            className="page-image-container"
            onClick={(e) => {
                const { clientX, currentTarget } = e;
                const { width } = currentTarget.getBoundingClientRect();

                if (clientX < width / 2) {
                    onPreviousPage();
                } else {
                    onNextPage();
                }
            }}
        >
            <img src={`data:image/jpeg;base64,${pageUrl}`} alt="Manga Page" className="page-image" />
        </div>
    );
};

export default PageImage;
