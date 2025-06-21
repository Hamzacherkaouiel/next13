import axios from "axios";
import {NextResponse as res} from "next/server";
import Link from "next/link";

export default async function fetching() {
    const tickets = await getTickets();

    return (
        <>
            {tickets.map(ticket => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`/tickets/${ticket.id}`}>
                      <h3>{ticket.title}</h3>
                      <p>{ticket.body.slice(0, 200)}...</p>
                      <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                      </div>
                    </Link>

                </div>
            ))}

            {tickets.length === 0 && (
                <p className="text-center">There are no tickets</p>
            )}
        </>
    );
}
 function  getTickets(){
    return axios.get('http://localhost:4000/tickets')
        .then(res=> {return res.data})


}