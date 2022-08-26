import React from "react";
import Square from "./square";
import King from "../pieces/king";
import Queen from "../pieces/queen";
import Rook from "../pieces/rook";
import Knight from "../pieces/knight";
import Bishop from "../pieces/bishop";
import Pawn from "../pieces/pawn";
import Piece from "../pieces/piece";

export default class Board extends React.Component {
    constructor() {
        super()
        this.state = {
            pieces : [],
            squares : [],
            board : []
        }

        //this.state.pieces.push(<Rook id={0} x={0} y={0} isWhite={false}/>)
        this.state.pieces.push({type: "Rook", id: 0, isWhite: true, style: ""})
        this.state.pieces.push({type: "King", id: 29, isWhite: true, style: ""})
        this.state.pieces.push({type: "Queen", id: 32, isWhite: false, style: ""})
        this.state.pieces.push({type: "Pawn", id: 19, isWhite: false, style: ""})
        /*
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
        this.pieces.push(new Piece(5,5, true))
        */

        for(let i = 0; i < 8; i++){
            const row = [];
            for(let j = 0; j < 8; j++){
                let color = "dark";
                if((j%2===0 && i%2===0) || (j%2!==0 && i%2!==0)){
                    color = "light";
                }
                //let square = <Square x={i} y={j} id={i*8+j} color={color} key={i*8+j} pieces={this.state.pieces}/>;
                let square = {id: i*8+j, color: color, style: null}
                this.state.squares.push(square);
                row.push(square);
            }
            this.state.board.push(row);
        }
    }

    renderSquare(id, style, color){
        return(
            <Square key={id} 
                style={style} 
                color={color} 
                piece={this.state.pieces.find(piece => piece.id === id)} 
                renderPiece={this.renderPiece} 
                />
        );
    }

    renderPiece(type, id, style, isWhite, handlePieceClick){
        
        if(type === "King") {
            return(
                <King key={id} 
                style={style} 
                id={id} 
                isWhite={isWhite}
                />
            );
        } else if(type === "Queen") {            
            return(
                <Queen key={id} 
                style={style} 
                id={id} 
                isWhite={isWhite}
                />
            );
        } else if(type === "Rook") {            
            return(
                <Rook key={id} 
                style={style} 
                id={id} 
                isWhite={isWhite}
                />
            );
        } else if(type === "Bishop") {            
            return(
                <Bishop key={id} 
                style={style} 
                id={id} 
                isWhite={isWhite}
                />
            );
        } else if(type === "Knight") {            
            return(
                <Knight key={id} 
                style={style} 
                id={id} 
                isWhite={isWhite}
                />
            );
        } else if(type === "Pawn") {            
            return(
                <Pawn key={id} 
                style={style} 
                id={id} 
                isWhite={isWhite}
                />
            );
        } 
    }

    render() {
        return (
            <div>
                {this.state.board.map((row, i) => <div className="row" key={i}>{row.map(square => this.renderSquare(square.id, square.style, square.color))}</div>)}                
            </div>
        )
    }
}