import React, { useEffect, useState } from "react";
import axios from "axios";

function TenantForm(){

    /*There are more efficient ways of handling 
    this much form input, but using curder method due to time contraints!*/
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [apartment, setApartment] = useState("");

    function handleFirstName(e){
        e.preventDefault();
        setFirstName(e.target.value)
    }
    function handleLastName(e){
        e.preventDefault();
        setLastName(e.target.value)
    }
    function handleApartment(e){
        e.preventDefault();
        setApartment(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault();
        let response = await axios.post("http://localhost:3000/tenants",
        {first_name: firstName, last_name: lastName, apartment: apartment},
        {headers: {Accept: "application/json"}}
        )
        let data = response.data;
        console.log(response.data);
    }

    return(
        <div>
            <label>
                First Name:
                <input name ="first name" value={firstName} type="Text" onChange={handleFirstName}/>
            </label>

            <label>
                Last Name:
                <input name="second name" value={lastName} type="Text" onChange={handleLastName}/>
            </label>

            <label>
                Apartment:
                <input name="apartment" value={apartment} type="Text" onChange={handleApartment}/>
            </label>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default TenantForm