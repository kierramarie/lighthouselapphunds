import React from "react";


const LitterCard = ({ photos, names, time }) => {
    return (
        <div className="card">
            <div className="photoRow">
                {photos.map((photo, idx) => (
                    <img src={photo} alt="dog" key={idx} />
                ))}
            </div>
            <div className="litterCardText">
                <p>{names}</p>
                <p>{time}</p>
            </div>
        </div>
    );
}

export default LitterCard;