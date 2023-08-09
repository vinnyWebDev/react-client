import React from "react";

function Ticket(props){
    return(
        <div className="container border rounded m-4">
            <p className="cardHeading">{props.title}</p>
            <p><span className="cardSubHeading">Description:</span> {props.body}</p>
            <p><span className="cardSubHeading">Completed: </span>{props.completed.toString()}</p>
        </div>
    )
}

export default Ticket