import React from "react";

export const ParentOne = props => {
    return <div className = "parent">
        <h4>parent block</h4>
        {props.children}
        
    </div>
}