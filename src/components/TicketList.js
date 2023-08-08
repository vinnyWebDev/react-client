import { useState, useEffect } from "react";
import axios from "axios";
import Ticket from "./Ticket"

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
        <div>
            {
                ticketList.map(function (i, index) {
                    return (
                        <Ticket title = {i.title} body={i.body} compleyed={i.completed}></Ticket>
                    )
                })


            }
        </div>
    )
}

export default TicketList;