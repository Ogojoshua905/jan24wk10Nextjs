import Link from "next/link"
import React from "react"

export default function Navbar () {

    return (
        
        <nav>
            <ul className="flex justify-between p-8 bg-slate-900 text-white">
                <li>
                    <Link href='/'> Home </Link>
                </li>

                <li>
                    <Link href='/about'> About </Link>
                </li>
                <li>
                    <Link href='/signup'> Signup </Link>
                </li>

                <li>
                    <Link href='/login'> Log in </Link>
                </li>
                
            </ul>
        </nav>
    )
}