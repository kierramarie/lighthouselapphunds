import React from "react";


const PhotoCard = ({ photo, title, info }) => {
    return (
        <div className="card">
            <p>{title}</p>
            <img src={photo} alt="dog" />
            <p>{info}</p>
        </div>
    );
}

export default PhotoCard;