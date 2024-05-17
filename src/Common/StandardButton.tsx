import React, {Children} from "react";

import "./StandardButton.css"

export default function StandardButton(props : any)
{
    const children = props.children;
    return(
        <div className="StandardButton" onClick={props.onClick}>
            <div className={props.className} style={props.style}>
                {Children.map(children, (child, index) =>
                    child
                )}
            </div>
        </div>
    );
}