import React from "react";
import Square from "./square";
import King from "../pieces/king";
import Queen from "../pieces/queen";

export default class Board extends React.Component {
    constructor() {
        super()
        this.pieces = []
        this.pieces.push(new King(1, 1, true))
        this.pieces.push(new Queen(1, 1, true))

        this.board = []
        for(let i = 0; i < 8; i++){
            const row = [];
            for(let j = 0; j < 8; j++){
                let color = "light";
                row.push(<Square color={color}/>)
            }
            this.board.push(row);
        }
    }
    
    

    render() {
        return (
            <div>
                <Square color={"light"} piece={this.pieces[1].render()}/>
                <Square color={"dark"} piece={this.pieces[0].render()}/>
                {this.board}
                
            </div>
        )
    }
}