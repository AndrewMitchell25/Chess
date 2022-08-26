import Piece from "./piece";

export default class Bishop extends Piece {
    constructor(props){
        super(props);
        if(props.isWhite){
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg";
        } else {
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
        }

        this.value = 3;
    }

}