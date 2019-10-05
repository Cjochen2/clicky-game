import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img
                    alt={props.name}
                    src={props.image}
                    onClick={() => props.handleClick(props.id, 1)} />
            </div>
            <div className="content">
                state: {props.clicked}
            </div>
        </div>
    );
}

export default Card;