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
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input name="title" value={title} type="text" onChange={handleTitle}></input>
                </label>
                <label>
                    Body:
                    <textarea name="title" value={body} type="text" onChange={handleBody}></textarea>
                </label>

                <label>Completed</label>
                <input
                    type="radio"
                    name="topping"
                    value={true}
                    onChange={handleCompleted}
                />
                <label htmlFor="regular">False</label>

                <input
                    type="radio"
                    name="topping"
                    value={false}
                    onChange={handleCompleted}
                />
                <label htmlFor="regular">True</label>

                <button type="submit">Submit</button>
            </form>

        </div>
    )


}

export default TicketForm