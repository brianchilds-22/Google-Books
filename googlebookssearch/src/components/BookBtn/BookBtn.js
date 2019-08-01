import React from "react";
import "./BookBtn.css";

function BookBtn(props) {
    return (
        <button className={`book-btn btn btn=${props.btntype} btn-md`} {...props}>
            {props.children}
        </button>
    );
}
export default BookBtn;