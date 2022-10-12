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
            board : [],
            mousePos : {x: 0, y:0}
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
                let square = {id:i*8+j, color: color, style: null}
                this.state.squares.push(square);
                row.push(square);
            }
            this.state.board.push(row);
        }
    }

    renderSquare(square){
        return(
            <Square key={square.id} 
                style={square.style} 
                color={square.color} 
                piece={this.state.pieces.find(piece => piece.x*8 + piece.y === square.id)} 
                renderPiece={this.renderPiece}
                updateState={this.updateState} 
                />
        );
    }

    renderPiece(piece, updateState){        
        if(piece.type === "King") {
            return(
                <King key={piece.id} 
                style={piece.style} 
                x={piece.x}
                y={piece.y} 
                isWhite={piece.isWhite}
                dragging={piece.dragging}
                updateState={updateState}
                />
            );
        } else if(piece.type === "Queen") {            
            return(
                <Queen key={piece.id} 
                style={piece.style} 
                x={piece.x}
                y={piece.y}  
                isWhite={piece.isWhite}
                dragging={piece.dragging}
                updateState={updateState}
                />
            );
        } else if(piece.type === "Rook") {            
            return(
                <Rook key={piece.id} 
                style={piece.style} 
                x={piece.x}
                y={piece.y}  
                isWhite={piece.isWhite}
                dragging={piece.dragging}
                updateState={updateState}
                />
            );
        } else if(piece.type === "Bishop") {            
            return(
                <Bishop key={piece.id} 
                style={piece.style} 
                x={piece.x}
                y={piece.y}  
                isWhite={piece.isWhite}
                dragging={piece.dragging}
                updateState={updateState}
                />
            );
        } else if(piece.type === "Knight") {            
            return(
                <Knight key={piece.id} 
                style={piece.style} 
                x={piece.x}
                y={piece.y} 
                isWhite={piece.isWhite}
                dragging={piece.dragging}
                updateState={updateState}
                />
            );
        } else if(piece.type === "Pawn") {            
            return(
                <Pawn key={piece.id} 
                style={piece.style} 
                x={piece.x}
                y={piece.y} 
                isWhite={piece.isWhite}
                dragging={piece.dragging}
                updateState={updateState}
                />
            );
        } 
    }

    updateState = (type, x,y) => {
        const newPieces = this.state.pieces.map(piece => {
            if(piece.x === x && piece.y === y) {
                if(type==="down"){
                    return {...piece, style: "dragging" }
                } else {
                    return {...piece, dragging: false, style: "" }
                }
            }
            return piece;
        })

        this.setState({pieces: newPieces })
    }

    handleMouseMove(event){
        this.setState({
            mousePos: {x: event.screenX, y: event.screenY}
        });
      };

    render() {
        return (
            <div className="board" onMouseMove={(event) => this.handleMouseMove(event)}>
                <div>
                    {this.state.board.map((row, i) => <div className="row" key={i}>{row.map(square => this.renderSquare(square))}</div>)}                
                </div>
            </div>
        )
    }
}