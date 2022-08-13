export default class Piece{
    constructor(x, y, isWhite, pic){
        this.x = x;
        this.y = y;
        this.isWhite = isWhite;
        this.pic = pic;

        this.taken = false;
        this.value = 0;
    }
}