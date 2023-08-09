import React, { useEffect, useState } from "react";
import axios from "axios";

function TenantForm() {

    /*There are more efficient ways of handling 
    this much form input, but using curder method due to time contraints!*/
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
        let response = await axios.post("http://localhost:3000/tenants",
            { first_name: firstName, last_name: lastName, apartment: apartment, phone: phone, email: email },
            { headers: { Accept: "application/json" } }
        )
        let data = response.data;
        console.log(response.data);
        window.location.reload();
    }

    //form for taking input when creating a new tenant 
    return (
        <div className="container mt-5">
            <h3 className="text-center">Add Tenant</h3>
            <div className="container mt-3">
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
                    <input className="form-control" name="phone" value={phone} type="Text" onChange={handlePhone} minlength="10" maxlength="10"  required />
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

export default TenantForm