import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Nav";
import Input from "../components/Input";

export default function Signup() {

    return(
       <section className="m-auto w-1/2">
        <form>
            <ul>

            <Input type="text" place="your username" userid="user"/>
            <Input type="email" place="your email address" userid="email"/>
            <Input type="password" place="your password" userid="pswd"/>

            </ul>
                    <Button status='SignUp' />
        </form>
       </section>
    )
}