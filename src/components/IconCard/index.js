import React from "react";

function IconCard(props) {
    return(
    <div className="card">
      <div className="img-container">
        <img alt={props.skill} src={props.icon} />
      </div>
      <span>
          {props.children}
      </span>
    </div>
    )
};

export default IconCard;