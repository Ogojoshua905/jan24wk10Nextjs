import React from "react";

export default function Button({status}) {
    return(
        <button className="bg-slate-900 text-white rounded-md p-5">{status}</button>
    )
}