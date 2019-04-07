import React from "react";

function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Runescape Skill Click</h1>
            <p className="lead">Click the skill icons! It's React!</p>
            <p>Score {props.score}</p>
        </div>
    )
}

export default Jumbotron;