class Piece extends React.Component{
    constructor(x, y, isWhite, img){
        this.white = isWhite;
        this.value = 0;
        this.isMoving = false;
        this.img = img;
    }
}

class King extends Piece{
    constructor(x, y, isWhite){
        super(x, y, isWhite);
        this.value = 100;
        if(isWhite){
            this.img = "whiteKing";
        } else {
            this.img = "blackKing";
        }
    }
}