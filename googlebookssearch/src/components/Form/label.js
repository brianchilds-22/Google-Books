import React from "react";

function Label(props) {
    return (
        <label htmlFor={props.name}>{props.children}</label>
    );
}
export default Label;