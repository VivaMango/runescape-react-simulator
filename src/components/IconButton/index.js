import React from "react";

function IconButton(props) {
    return(
        <button type="button" className="btn btn-primary" onClick={props.increaseScore}>Skill</button>
    )
};

export default IconButton;