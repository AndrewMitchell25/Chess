import Piece from "./piece";

export default class Bishop extends Piece {
    constructor(x, y, isWhite){
        super(x, y, isWhite);
        if(isWhite){
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg";
        } else {
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
        }

        this.value = 3;
    }

    render() {
        return (
            <div className="piece">
                <img src={this.pic} alt="Bishop"/>
            </div>
        )
    }
}