import React from "react";

function Tenant(props){
    return(
        <div>
            <h3>Tenant</h3>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Apartment: {props.apartment}</p>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default Tenant