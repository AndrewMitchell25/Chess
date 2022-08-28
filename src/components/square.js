import React from "react";

export default class Square extends React.Component {
    render(){
        return(
            <div className={"square " + this.props.color + "-square"}
                style={this.props.style}>
                    {this.props.piece !== undefined ? this.props.renderPiece(this.props.piece, this.props.updateState) : null}
            </div>
        )
    }
}