import Piece from "./piece";

export default class King extends Piece {
    constructor(x, y, isWhite, style){
        super(x, y, isWhite, style);
        if(isWhite){
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg";
        } else {
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
        }

        this.value = 99;
    }

    render() {
        return (
            <div className={"piece " + this.style}>
                <img src={this.pic} alt="King"/>
            </div>
        )
    }
}