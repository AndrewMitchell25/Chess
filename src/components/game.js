import React from "react";
import Board from "./board";

export default class Game extends React.Component {
    constructor(){
        super();
        this.board = new Board();
        this.board.pieces[30].style = "moving";
    }

    render() {
        return (
            <div>
                {this.board.render()}
            </div>
        )
    }
}