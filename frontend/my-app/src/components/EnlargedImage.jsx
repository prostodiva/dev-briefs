import React, { useState } from 'react';

const EnlargedImage = ({ src, alt, className }) => {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const handleClick = () => {
        setIsEnlarged(!isEnlarged);
    };

    return (
        <>
            <img
                src={src}
                alt={alt}
                className={`cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
                onClick={handleClick}
            />
            
            {isEnlarged && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={handleClick}
                >
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-[90vw] max-h-[90vh] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
};

export default EnlargedImage; 