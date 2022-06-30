import axios from "axios";
import React, { useState, useEffect } from "react";

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

    const getRandomImages = async () =>{
        try {
            const { data } = await axios.get('https://picsum.photos/v2/list?page=1&limit=10');
            console.log(data)
            setRandomImageList((prev) => prev.concat(data));
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getRandomImages();
        return () => {
    
        }
    }, [])
    
    useEffect(()=>{
        console.log(randomImageList)
    },[randomImageList])

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
        </div>
    )
}

export default Normal;