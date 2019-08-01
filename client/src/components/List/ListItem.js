import React from "react";

function ListItem(props) {
    return (
        <li className="list-group-item">
            {props.children}
        </li>
    );
}
export default ListItem;