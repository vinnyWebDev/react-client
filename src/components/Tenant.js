import axios from "axios";
import React, { useEffect, useState } from "react";

function Tenant(props) {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [apartment, setApartment] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    function handleFirstName(e) {
        e.preventDefault();
        setFirstName(e.target.value)
    }
    function handleLastName(e) {
        e.preventDefault();
        setLastName(e.target.value)
    }
    function handleApartment(e) {
        e.preventDefault();
        setApartment(e.target.value)
    }
    function handlePhone(e) {
        e.preventDefault();
        setPhone(e.target.value)
    }
    function handleEmail(e) {
        e.preventDefault();
        setEmail(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let response = await axios.put(`http://localhost:3000/tenants/${props.id}`,
            { first_name: firstName, last_name: lastName, apartment: apartment, phone: phone, email: email },
            { headers: { Accept: "application/json" } }
        )
        let data = response.data;
        console.log(response.data);
        window.location.reload();
    }

    //try add a function in here for handle delete with a button
    async function deleteItem(e) {
        e.preventDefault();

        let response = await axios.delete(`http://localhost:3000/tenants/${props.id}`, { headers: { Accept: "application/json" } })
        window.location.reload();
    }

    return (
        <div className="container border rounded m-4 row">

            <div className="container col ">
                <p className="cardHeading">Apartment: {props.apartment}</p>
                <p><span className="cardSubHeading">First Name:</span> {props.firstName}</p>
                <p><span className="cardSubHeading">Last Name:</span> {props.lastName}</p>
                <p><span className="cardSubHeading">Phone:</span> {props.phone}</p>
                <p><span className="cardSubHeading">Email:</span> {props.email}</p>
                <button className="btn btn-dark mb-1" onClick={deleteItem}>Delete</button>
            </div>

            {/*}Form for updating tenant{*/}
            <div className="container col ">
                <p className="cardHeading">Update tenant</p>
                <form className="formContainer" onSubmit={handleSubmit}>
                    
                        <input className="form-control mb-2" name="first name" value={firstName} type="Text" onChange={handleFirstName} placeholder="First Name" required />
                 
                        <input className="form-control mb-2" name="second name" value={lastName} type="Text" onChange={handleLastName} placeholder="Last Name" required />

                        <input className="form-control mb-2" name="apartment" value={apartment} type="Text" onChange={handleApartment} placeholder="Apartment" required />

                        <input className="form-control mb-2" name="phone" value={phone} type="Text" onChange={handlePhone} minlength="10" maxlength="10" placeholder="Phone" required />
                    
                        <input className="form-control mb-2" name="email" value={email} type="email" onChange={handleEmail} placeholder="Email" required />
                    

                    <button className="formBtn btn btn-dark mt-2 mb-3" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Tenant