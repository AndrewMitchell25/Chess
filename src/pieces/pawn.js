import Piece from "./piece";

export default class Pawn extends Piece {
    constructor(props){
        super(props);
        if(props.isWhite){
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
        } else {
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
        }

        this.value = 1;
        this.hasMoved = false;
    }

}