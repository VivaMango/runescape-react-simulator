import React from "react";

class IconButton extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    state = {
        id: this.props.id
    }

    increaseScore = _=> {
        console.log(this.state.id, "increaseScore run")
        this.props.scoreManipulator(this.state.id)
        this.props.setLastClicked(this.state.id)
      }

    componentDidMount() {
        console.log(this.state.id , "TSI")
    }
    

    render() {
        return(
        <button type="button" className="btn btn-primary" id={this.props.id} onClick={this.increaseScore}>Skill</button>
        )}
};

export default IconButton;