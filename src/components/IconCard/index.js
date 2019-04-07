import React from "react";



function IconCard(props) {

    const myChildren = React.Children.map(props.children , child => {
        return (
            React.cloneElement(child, {
                id: props.id,
                skill: props.skill
            })
        )
    })

    return(
    <div className="card">
      <div className="img-container">
        <img alt={props.skill} src={props.icon} />
      </div>
      <span>
          {myChildren}
      </span>
    </div>
    )
};

export default IconCard;