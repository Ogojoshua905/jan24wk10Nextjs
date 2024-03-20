import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import image from "../components/styles.module.css"


export default function LogIn() {
    return (
        <section className="m-auto w-1/2">
        <form className={image.login}>
            <ul>
            <Input type="text" place="your username" userid="user"/>
            <Input type="password" place="your password" userid="pwd"/>
                
                
            </ul>
                    <Button status='log in'/>
        </form>
       </section>
    )
}