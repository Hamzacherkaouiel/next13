import Link from "next/link";

export  default function NavBar(){

    return (
        <nav>
        <Link href={"/"}> Hello Page</Link>
        <Link href={"/tickets"}>Tickets</Link>
        </nav>
    )

}