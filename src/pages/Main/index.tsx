import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () =>{
    const navigate = useNavigate();
    return (
        <div>
            <h1>이미지 로딩 성능 비교</h1>
            <h2><a onClick={()=>navigate("/normal")}>노멀 이미지 로딩</a></h2>
        </div>
    )
}

export default Main;