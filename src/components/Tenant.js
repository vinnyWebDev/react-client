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
                    <label className="cardSubHeading mb-3">
                        First Name:
                        <input className="form-control" name="first name" value={firstName} type="Text" onChange={handleFirstName} required />
                    </label>

                    <label className="cardSubHeading mb-3">
                        Last Name:
                        <input className="form-control" name="second name" value={lastName} type="Text" onChange={handleLastName} required />
                    </label>

                    <label className="cardSubHeading mb-3">
                        Apartment:
                        <input className="form-control" name="apartment" value={apartment} type="Text" onChange={handleApartment} required />
                    </label>

                    <label className="cardSubHeading mb-3">
                        Phone:
                        <input className="form-control" name="phone" value={phone} type="Text" onChange={handlePhone} minlength="10" maxlength="10" required />
                    </label>

                    <label className="cardSubHeading mb-3">
                        Email:
                        <input className="form-control" name="email" value={email} type="email" onChange={handleEmail} required />
                    </label>

                    <button className="formBtn btn btn-dark mt-3 mb-5" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Tenant