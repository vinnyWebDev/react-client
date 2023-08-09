import React from "react";
import axios from  "axios";

function Ticket(props){

    //handle item deletion based on unique ID
    async function deleteItem(e){
       e.preventDefault();
       
        let response = await axios.delete(`http://localhost:3000/tickets/${props.id}`,   { headers: { Accept: "application/json" } })
        window.location.reload();
    }

    return(
        <div className="container border rounded m-4">
            <p className="cardHeading">{props.title}</p>
            <p><span className="cardSubHeading">Description:</span> {props.body}</p>
            <p><span className="cardSubHeading">Completed: </span>{props.completed.toString()}</p>
            <button className="btn btn-dark mb-1" onClick={deleteItem}>Delete</button>
        </div>
    )
}

export default Ticket