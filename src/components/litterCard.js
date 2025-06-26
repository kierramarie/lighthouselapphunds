import React from "react";


const LitterCard = ({ male, female, names, time }) => {
    return (
        <div className="card">
            <div className="photoRow">
                <img src={female} alt="dog" />
                <img src={male} alt="dog" />
            </div>
            <div className="litterCardText">
                <p>{names}</p>
                <p>{time}</p>
            </div>
        </div>
    );
}

export default LitterCard;