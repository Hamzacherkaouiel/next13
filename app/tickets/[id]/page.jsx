import axios from "axios";
import {notFound} from "next/navigation";

export default async function TicketsDetailsPage({params}) {
    const {id}=params;
    const ticket= await fetchDetails(id)
    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>

            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    )




}
async function fetchDetails(id){
    try {
        const res= await axios.get(`http://localhost:4000/tickets/${id}`)
        return res.data;
    }
    catch (error) {
        notFound();
    }
}