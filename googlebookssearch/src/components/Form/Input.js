import React from "react";
import { Label } from "./Label";

function Input(props) {
    return (
        < div className="form-group">
            <Label htmlFor={props.name}>{props.label}</Label>
            <input className ="form-control" {...props}/>
        </div>
    );
}
export default Input;
