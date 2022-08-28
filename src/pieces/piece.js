import React from "react";

export default class Piece extends React.Component{

    constructor(props){
        super(props);

        this.pic = "";
        this.taken = false;
        this.dragging = false;
        this.value = 0;
        this.state = {

        }
    }

    withinBounds(x,y) {
        if(x >= 0 && x < 8 && y >= 0 && y < 8){
            return true;
        }
        return false;
    }

    render() {
        return (
            <div className={"piece " + this.props.style} 
                onMouseDown={() => this.props.updateState("down", this.props.x, this.props.y)}
                onMouseUp={() => this.props.updateState("up", this.props.x, this.props.y)}
                >
                <img src={this.pic} alt={this.value}/>
            </div>
        )
    }
}