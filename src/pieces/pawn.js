import Piece from "./piece";

export default class Pawn extends Piece {
    constructor(x, y, isWhite, style){
        super(x, y, isWhite, style);
        if(isWhite){
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
        } else {
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
        }

        this.value = 1;
        this.hasMoved = false;
    }

    render() {
        return (
            <div className={"piece " + this.style}>
                <img src={this.pic} alt="Pawn"/>
            </div>
        )
    }
}