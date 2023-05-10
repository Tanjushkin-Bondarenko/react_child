import React from "react";

export const ParentTwo = props => {
    return <div className="parent">
        <h4>this is second parent</h4>
        {props.children}
    </div>
}