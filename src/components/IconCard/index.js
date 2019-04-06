import React from "react";

function IconCard(props) {
    return(
    <div className="card">
      <div className="img-container">
        <img alt={props.skill} src={props.icon} />
      </div>
      <div className="content">
        <ul>
            <li>
                <strong>ID:</strong> {props.id}
            </li>
            <li>
                <strong>Skill:</strong> {props.skill}
            </li>
        </ul>
      </div>
    </div>
    )
};

export default IconCard;