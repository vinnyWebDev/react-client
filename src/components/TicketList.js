import { useState, useEffect } from "react";
import axios from "axios";
import Ticket from "./Ticket"
import TicketForm from "./TicketForm";

function TicketList() {
    const [ticketList, setTicketList] = useState([]);

    //gete data drom rrails backend
    async function getTickets() {
        let response = await axios.get("http://localhost:3000/tickets",
            { headers: { Accept: "application/json" } });
        setTicketList(response.data)
        console.log(response.data)
    }
    //call above function from useEffect, will run on mount
    useEffect(() => {
        getTickets();
    }, [])

    return (
        <div className="container mt-5">
            <h3 className="text-center">Maintenance Tickets</h3>

            {
                ticketList.map(function (i, index) {
                    return (
                        <Ticket title={i.title} body={i.body} completed={i.completed} id={i.id}></Ticket>
                    )
                })


            }
            <TicketForm></TicketForm>
        </div>
    )
}

export default TicketList;