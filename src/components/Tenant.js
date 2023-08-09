import React from "react";
import axios from "axios";

function Tenant(props) {

    //try add a function in here for handle delete with a button
    async function deleteItem(e){
       e.preventDefault();
       
        let response = await axios.delete(`http://localhost:3000/tenants/${props.id}`,   { headers: { Accept: "application/json" } })
        window.location.reload();
    }

    return (
        <div className="container border rounded m-4">
            
            <p className="cardHeading">Apartment: {props.apartment}</p>
            <p><span className="cardSubHeading">First Name:</span> {props.firstName}</p>
            <p><span className="cardSubHeading">Last Name:</span> {props.lastName}</p>
            <p><span className="cardSubHeading">Phone:</span> {props.phone}</p>
            <p><span className="cardSubHeading">Email:</span> {props.email}</p>
            <button className="btn btn-dark mb-1" onClick={deleteItem}>Delete</button>
        </div>
    )
}

export default Tenant