import Piece from "./piece";

export default class Knight extends Piece {
    constructor(x, y, isWhite){
        super(x, y, isWhite);
        if(isWhite){
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg";
        } else {
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg";
        }

        this.value = 3;
    }

    render() {
        return (
            <div className="piece">
                <img src={this.pic} alt="Knight"/>
            </div>
        )
    }
}