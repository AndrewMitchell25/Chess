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

    handleMouseDown = (e) => {
        this.dragging = true;
        console.log(this.dragging)
        this.setState({style: "dragging"});
        console.log(this.x)
    }

    render() {
        return (
            <div className={"piece " + this.props.style} onMouseDown={this.handleMouseDown}>
                <img src={this.pic} alt={this.value}/>
            </div>
        )
    }
}