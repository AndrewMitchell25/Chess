import React from "react";

export default class Square extends React.Component {
    constructor(x, y, id, color, piece, style){
        super();
        this.x = x;
        this.y = y;
        this.id = id;
        this.color = color;
        this.style = style;
        this.piece = piece;
    }
    
    render(){
        return(
            <div className={"square " + this.color + "-square"}
                style={this.style}>
                    {this.piece}
            </div>
        )
    }
}