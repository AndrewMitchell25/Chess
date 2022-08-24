export default class Piece{
    constructor(x, y, isWhite, pic, style){
        this.x = x;
        this.y = y;
        this.isWhite = isWhite;
        this.pic = pic;

        this.taken = false;
        this.value = 0;
        this.style = style;
    }

    withinBounds(x,y) {
        if(x >= 0 && x < 8 && y >= 0 && y < 8){
            return true;
        }
        return false;
    }
}