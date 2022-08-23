import React from "react";
import Square from "./square";
import King from "../pieces/king";
import Queen from "../pieces/queen";

export default class Board extends React.Component {
    constructor() {
        super()
        this.pieces = [];
        this.squares = [];
        this.pieces.push(new King(1, 1, true))
        this.pieces.push(new Queen(1, 1, true))

        this.board = []
        for(let i = 0; i < 8; i++){
            const row = [];
            for(let j = 0; j < 8; j++){

                let color = "dark";
                if((j%2===0 && i%2===0) || (j%2!==0 && i%2!==0)){
                    color = "light";
                }
                row.push(<Square color={color} x={i} y={j} key={i*8+j}/>)
            }
            this.board.push(<div className="row">{row}</div>);
        }
    }
    
    assignPieces(){
        for(let square in this.squares){
            for(let piece in this.pieces){
                
            }
        }
    }


    render() {

        //this.assignPieces();

        return (
            <div>
                {this.board}                
            </div>
        )
    }
}