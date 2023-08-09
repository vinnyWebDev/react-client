import React from "react";

function Tenant(props) {
    return (
        <div className="container border rounded m-4">
            <p className="cardHeading">Apartment: {props.apartment}</p>
            <p><span className="cardSubHeading">First Name:</span> {props.firstName}</p>
            <p><span className="cardSubHeading">Last Name:</span> {props.lastName}</p>
            <p><span className="cardSubHeading">Phone:</span> {props.phone}</p>
            <p><span className="cardSubHeading">Email:</span> {props.email}</p>
        </div>
    )
}

export default Tenant