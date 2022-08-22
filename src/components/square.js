import React from "react";

export default function Square(props) {
    return(
        <div className={"square " + props.color + "-square"}
            style={props.style}>
                {props.piece}
        </div>
    )
}