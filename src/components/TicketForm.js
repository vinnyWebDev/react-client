import React, { useEffect, useState } from "react";
import axios from "axios";


function TicketForm() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [completed, setCompleted] = useState(false);

    function handleTitle(e) {
        e.preventDefault();
        setTitle(e.target.value)
    }

    function handleBody(e) {
        e.preventDefault();
        setBody(e.target.value)
    }

    function handleCompleted(e) {
        e.preventDefault();
        setCompleted(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let response = await axios.post("http://localhost:3000/tickets",
            { title: title, body: body, completed: completed },
            { headers: { Accept: "application/json" } }
        )
        let data = response.data;
        console.log(response.data);
        window.location.reload();
    }

    return (
        <div className="container mt-5">
            <h3 className="text-center">Add Maintenance Ticket</h3>

            <div className="container mt-3 border rounded pt-3 mb-5">
                <form className="formContainer" onSubmit={handleSubmit}>
                    <label className="cardSubHeading ">
                        Title:
                        <input name="title" value={title} type="text" onChange={handleTitle} className="form-control"></input>
                    </label>
                    <label className="cardSubHeading mb-3">
                        Body:
                        <textarea name="title" value={body} type="text" onChange={handleBody} className="form-control"></textarea>
                    </label>

                    <label className="cardSubHeading mb-3">Completed</label>

                    <label className="cardSubHeading mb-3" htmlFor="regular">
                        False
                        <input className="radio" type="radio" name="topping" value={false} onChange={handleCompleted} />
                    </label>

                    <label className="cardSubHeading mb-3" htmlFor="regular">
                        True
                        <input className="radio" type="radio" name="topping" value={true} onChange={handleCompleted} />
                    </label>

                    <button className="formBtn btn btn-dark mt-3 mb-5" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )


}

export default TicketForm