//import React from "react";
import Piece from "./piece";

export default class King extends Piece{
    constructor(props){
        super(props);
        if(props.isWhite){
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg";
        } else {
            this.pic = "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
        }

        this.value = 99;
        
    }

}