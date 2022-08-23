import React from "react";
import Square from "./square";
import King from "../pieces/king";
import Queen from "../pieces/queen";
import Rook from "../pieces/rook";
import Knight from "../pieces/knight";
import Bishop from "../pieces/bishop";
import Pawn from "../pieces/pawn";

export default class Board extends React.Component {
    constructor() {
        super()
        this.pieces = [];
        this.squares = [];
        
        this.pieces.push(new Rook(0, 0, false))
        this.pieces.push(new Knight(0, 1, false))
        this.pieces.push(new Bishop(0, 2, false))
        this.pieces.push(new Queen(0, 3, false))
        this.pieces.push(new King(0, 4, false))
        this.pieces.push(new Bishop(0, 5, false))
        this.pieces.push(new Knight(0, 6, false))
        this.pieces.push(new Rook(0, 7, false))
        this.pieces.push(new Pawn(1, 0, false))
        this.pieces.push(new Pawn(1, 1, false))
        this.pieces.push(new Pawn(1, 2, false))
        this.pieces.push(new Pawn(1, 3, false))
        this.pieces.push(new Pawn(1, 4, false))
        this.pieces.push(new Pawn(1, 5, false))
        this.pieces.push(new Pawn(1, 6, false))
        this.pieces.push(new Pawn(1, 7, false))

        this.pieces.push(new Pawn(6, 0, true))
        this.pieces.push(new Pawn(6, 1, true))
        this.pieces.push(new Pawn(6, 2, true))
        this.pieces.push(new Pawn(6, 3, true))
        this.pieces.push(new Pawn(6, 4, true))
        this.pieces.push(new Pawn(6, 5, true))
        this.pieces.push(new Pawn(6, 6, true))
        this.pieces.push(new Pawn(6, 7, true))
        this.pieces.push(new Rook(7, 0, true))
        this.pieces.push(new Knight(7, 1, true))
        this.pieces.push(new Bishop(7, 2, true))
        this.pieces.push(new Queen(7, 3, true))
        this.pieces.push(new King(7, 4, true))
        this.pieces.push(new Bishop(7, 5, true))
        this.pieces.push(new Knight(7, 6, true))
        this.pieces.push(new Rook(7, 7, true))

        this.board = []
        for(let i = 0; i < 8; i++){
            const row = [];
            for(let j = 0; j < 8; j++){

                let color = "dark";
                if((j%2===0 && i%2===0) || (j%2!==0 && i%2!==0)){
                    color = "light";
                }
                let square = new Square(i, j, i*8+j, color);
                this.squares.push(square);
                row.push(square);
            }
            this.board.push(row);
        }
    }
    
    assignPieces(){
        for(let i = 0; i < this.squares.length; i++){
            for(let j = 0; j < this.pieces.length; j++){
                if(this.pieces[j].x === this.squares[i].x && this.pieces[j].y === this.squares[i].y){
                    this.squares[i].piece = this.pieces[j].render();
                }
            }
        }
    }


    render() {

        this.assignPieces();
        return (
            <div>
                {this.board.map(row => <div className="row">{row.map(square => square.render())}</div>)}                
            </div>
        )
    }
}