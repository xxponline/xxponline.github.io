import React, {Children, useState} from "react";
import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from "lucide-react";

import "./ProjectPhotoSlider.css"

export default function ProjectPhotoSlider(props : any)
{
    const [imageIndex, setImageIndex] = useState(0);
    const children = props.children;
    const imgCount = Children.count(children)

    function showPrevImage()
    {
        if(imageIndex > 0)
        {
            setImageIndex(imageIndex - 1);
        }
    }

    function showNextImage()
    {
        if(imageIndex < imgCount - 1)
        {
            setImageIndex(imageIndex + 1);
        }
    }

    return(
        <div>
            <div style={{
                aspectRatio: "16/9",
                backgroundColor: "#ffffff",
                width: "100%", display: "flex", flexDirection: "column",
                overflow: "hidden", objectFit: "cover"
            }}>
                <div style={{ height: "100%", display: "flex" }}>
                    {Children.map(children, (child, index) =>
                        <div className="img-slider-img"  style={{ height: "100%", translate: `${-100 * imageIndex}%` }}>
                            {child}
                        </div>
                    )}
                </div>
                <div
                    style={{
                        display: "flex", justifyContent: "space-between", width: "100%",
                        position: "relative", top: "-100%", minHeight: "-webkit-fill-available"
                    }}>
                    <button
                        onClick={showPrevImage}
                        className="img-slider-btn"
                        style={{ left: 0 }}
                        aria-label="View Previous Image"
                    >
                        <ArrowBigLeft aria-hidden style={{ backgroundColor: "#FFFFFF80", borderRadius: 45}} />
                    </button>

                    <button
                        onClick={showNextImage}
                        className="img-slider-btn"
                        style={{ right: 0 }}
                        aria-label="View Next Image"
                    >
                        <ArrowBigRight aria-hidden style={{ backgroundColor: "#FFFFFF80", borderRadius: 45}} />
                    </button>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
                <div style={{ display:"flex", padding: "5px 5px", gap: "5px", backgroundColor: "#FFFFFF40",
                borderRadius: 15
                }}>
                    {Children.map(children, (child, index) =>
                        <button
                            onClick={ () => { setImageIndex(index)} }
                            className="img-slider-index-btn"
                            style={{ right: 0 }}
                            aria-label="View Next Image"
                        >
                            {index === imageIndex ? <CircleDot/> : <Circle/>}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
