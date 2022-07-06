import axios from "axios";
import React, { useState } from "react";
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
type RandomImageType = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
  };

const Normal = () =>{
    const [randomImageList, setRandomImageList] = useState<RandomImageType[]>([])
    const ref = useInfiniteScroll<HTMLDivElement>(()=>{
        getRandomImages();
    });

    const getRandomImages = async () =>{
        try {
            const { data } = await axios.get('https://picsum.photos/v2/list?page=1&limit=10');
            setRandomImageList((prev) => prev.concat(data));
        } catch (error) {
            console.log(error);
        }

    }
    
    return (
        <div>
            <h1>노멀 이미지 로딩</h1>
            {randomImageList.map((randomImage) => {
                return(
                    <>
                        <img 
                            alt="random_image"
                            key={randomImage.id}
                            src={randomImage.download_url}
                            style={{width: '500px', height: '500px'}}
                        />
                        <br/>
                    </>
                )
            })}
            <div ref={ref}>
                마지막 부분
            </div>
        </div>
    )
}

export default Normal;