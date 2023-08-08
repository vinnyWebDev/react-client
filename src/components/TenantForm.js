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
    }

    //form for taking input when creating a new tenant 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input name="first name" value={firstName} type="Text" onChange={handleFirstName} required />
                </label>

                <label>
                    Last Name:
                    <input name="second name" value={lastName} type="Text" onChange={handleLastName} required />
                </label>

                <label>
                    Apartment:
                    <input name="apartment" value={apartment} type="Text" onChange={handleApartment} required />
                </label>

                <label>
                    Phone:
                    <input name="phone" value={phone} type="Text" onChange={handlePhone} minlength="10" maxlength="10"  required />
                </label>

                <label>
                    Email:
                    <input name="email" value={email} type="email" onChange={handleEmail} required />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TenantForm