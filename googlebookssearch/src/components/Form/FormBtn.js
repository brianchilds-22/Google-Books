import React from "react";

function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right" , marginBottom: 10}} className="btn btn-info">
            {props.children}
        </button>
    );
}
export default FormBtn;