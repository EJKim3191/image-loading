import React from "react";
import './index.css';

import useIsElementInViewport from '../../../hooks/useIsElementInViewport';

interface props {
    randomImage: {
        id: string,
        download_url: string,
    };
}

const Image = ({ randomImage }:props) =>{
    const { elementRef, isVisible } = useIsElementInViewport();

    return (
        <div ref={elementRef} style={{width: '500px', height: '500px'}}>
            {isVisible && 
                <img 
                    className="img"
                    alt="random_image"
                    key={randomImage.id}
                    src={randomImage.download_url}           
                    style={{width: '500px', height: '500px'}}
                />}
            <br/>
        </div>
    )
}

export default Image;