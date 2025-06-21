import Ticket from './Tickets';
import {Suspense} from "react";
import Loading from "../loading";

export default  function Tickets(){


    return (
        <>
        <div>
            <h2>Tickets</h2>
        </div>
        <Suspense fallback={<Loading/>}>
        <Ticket></Ticket>
        </Suspense>
        </>
    );

}