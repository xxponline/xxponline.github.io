import React, {Children} from "react";

import "./StandardButton.css"

export default function NoInteractButton(props : any)
{
    const children = props.children;
    return(
        <div className="StandardButtonNoInteract">
            <div className={props.className} style={props.style}>
                {Children.map(children, (child, index) =>
                    child
                )}
            </div>
        </div>
    );
}