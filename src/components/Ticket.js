import React from "react";

function Ticket(props){
    return(
        <div>
            <h3>Maintenance Tickets</h3>
            <p>Ticket: {props.title}</p>
            <p>Description: {props.body}</p>
            <p>Completed: {props.completed}</p>
        </div>
    )
}

export default Ticket