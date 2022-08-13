import Piece from "./piece";

export default class Rook extends Piece {
    constructor(x, y, isWhite){
        super(x, y, isWhite);
        if(isWhite){
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg";
        } else {
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
        }

        this.value = 5;
    }
}