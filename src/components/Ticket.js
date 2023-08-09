import axios from "axios";
import React, { useEffect, useState } from "react";

function Ticket(props) {

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
        let response = await axios.put(`http://localhost:3000/tickets/${props.id}`,
            { title: title, body: body, completed: completed },
            { headers: { Accept: "application/json" } }
        )
        let data = response.data;
        console.log(response.data);
        window.location.reload();
    }

    //handle item deletion based on unique ID
    async function deleteItem(e) {
        e.preventDefault();

        let response = await axios.delete(`http://localhost:3000/tickets/${props.id}`, { headers: { Accept: "application/json" } })
        window.location.reload();
    }

    return (
        <div className="container border rounded m-4 p-3 row">
            <div className="container col">
                <p className="cardHeading">{props.title}</p>
                <p><span className="cardSubHeading">Description:</span> {props.body}</p>
                <p><span className="cardSubHeading">Completed: </span>{props.completed.toString()}</p>
                <button className="btn btn-dark mb-1" onClick={deleteItem}>Delete</button>
            </div>

            {/*}Form for updating maintanence tickets{*/}
            <div className="container col">
                <p className="cardHeading">Update Maintenance Ticket</p>
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

                    <button className="formBtn btn btn-dark mt-3 mb-5" type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Ticket