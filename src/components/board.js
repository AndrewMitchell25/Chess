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
        this.state = {
            pieces : [],
            squares : [],
            board : []
        }

        this.state.pieces.push({type: "Rook", x: 0, y: 0, isWhite: false, style: ""})
        this.state.pieces.push({type: "Knight", x: 0, y: 1, isWhite: false, style: ""})
        this.state.pieces.push({type: "Bishop", x: 0, y: 2, isWhite: false, style: ""})
        this.state.pieces.push({type: "Queen", x: 0, y: 3, isWhite: false, style: ""})
        this.state.pieces.push({type: "King", x: 0, y: 4, isWhite: false, style: ""})
        this.state.pieces.push({type: "Bishop", x: 0, y: 5, isWhite: false, style: ""})
        this.state.pieces.push({type: "Knight", x: 0, y: 6, isWhite: false, style: ""})
        this.state.pieces.push({type: "Rook", x: 0, y: 7, isWhite: false, style: ""})

        this.state.pieces.push({type: "Pawn", x: 1, y: 0, isWhite: false, style: ""})
        this.state.pieces.push({type: "Pawn", x: 1, y: 1, isWhite: false, style: ""})
        this.state.pieces.push({type: "Pawn", x: 1, y: 2, isWhite: false, style: ""})
        this.state.pieces.push({type: "Pawn", x: 1, y: 3, isWhite: false, style: ""})
        this.state.pieces.push({type: "Pawn", x: 1, y: 4, isWhite: false, style: ""})
        this.state.pieces.push({type: "Pawn", x: 1, y: 5, isWhite: false, style: ""})
        this.state.pieces.push({type: "Pawn", x: 1, y: 6, isWhite: false, style: ""})
        this.state.pieces.push({type: "Pawn", x: 1, y: 7, isWhite: false, style: ""})

        this.state.pieces.push({type: "Pawn", x: 6, y: 0, isWhite: true, style: ""})
        this.state.pieces.push({type: "Pawn", x: 6, y: 1, isWhite: true, style: ""})
        this.state.pieces.push({type: "Pawn", x: 6, y: 2, isWhite: true, style: ""})
        this.state.pieces.push({type: "Pawn", x: 6, y: 3, isWhite: true, style: ""})
        this.state.pieces.push({type: "Pawn", x: 6, y: 4, isWhite: true, style: ""})
        this.state.pieces.push({type: "Pawn", x: 6, y: 5, isWhite: true, style: ""})
        this.state.pieces.push({type: "Pawn", x: 6, y: 6, isWhite: true, style: ""})
        this.state.pieces.push({type: "Pawn", x: 6, y: 7, isWhite: true, style: ""})

        this.state.pieces.push({type: "Rook", x: 7, y: 0, isWhite: true, style: ""})
        this.state.pieces.push({type: "Knight", x: 7, y: 1, isWhite: true, style: ""})
        this.state.pieces.push({type: "Bishop", x: 7, y: 2, isWhite: true, style: ""})
        this.state.pieces.push({type: "Queen", x: 7, y: 3, isWhite: true, style: ""})
        this.state.pieces.push({type: "King", x: 7, y: 4, isWhite: true, style: ""})
        this.state.pieces.push({type: "Bishop", x: 7, y: 5, isWhite: true, style: ""})
        this.state.pieces.push({type: "Knight", x: 7, y: 6, isWhite: true, style: ""})
        this.state.pieces.push({type: "Rook", x: 7, y: 7, isWhite: true, style: ""})


        for(let i = 0; i < 8; i++){
            const row = [];
            for(let j = 0; j < 8; j++){
                let color = "dark";
                if((j%2===0 && i%2===0) || (j%2!==0 && i%2!==0)){
                    color = "light";
                }
                //let square = <Square x={i} y={j} id={i*8+j} color={color} key={i*8+j} pieces={this.state.pieces}/>;
                let square = {id:i*8+j, color: color, style: null}
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
                piece={this.state.pieces.find(piece => piece.x*8 + piece.y === id)} 
                renderPiece={this.renderPiece} 
                />
        );
    }

    renderPiece(type, x, y, id, style, isWhite){
        
        if(type === "King") {
            return(
                <King key={id} 
                style={style} 
                x={x}
                y={y} 
                isWhite={isWhite}
                />
            );
        } else if(type === "Queen") {            
            return(
                <Queen key={id} 
                style={style} 
                x={x}
                y={y}  
                isWhite={isWhite}
                />
            );
        } else if(type === "Rook") {            
            return(
                <Rook key={id} 
                style={style} 
                x={x}
                y={y}  
                isWhite={isWhite}
                />
            );
        } else if(type === "Bishop") {            
            return(
                <Bishop key={id} 
                style={style} 
                x={x}
                y={y}  
                isWhite={isWhite}
                />
            );
        } else if(type === "Knight") {            
            return(
                <Knight key={id} 
                style={style} 
                x={x}
                y={y} 
                isWhite={isWhite}
                />
            );
        } else if(type === "Pawn") {            
            return(
                <Pawn key={id} 
                style={style} 
                x={x}
                y={y} 
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