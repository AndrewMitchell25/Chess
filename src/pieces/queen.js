import Piece from "./piece";

export default class Queen extends Piece {
    constructor(props){
        super(props);
        if(props.isWhite){
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg";
        } else {
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
        }

        this.value = 9;
    }

}