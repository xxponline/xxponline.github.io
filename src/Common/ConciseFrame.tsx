import React, {Children} from "react";


export default function ConciseFrame(props : any)
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