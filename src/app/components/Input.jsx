import React from 'react'

export default function input({type,username,userid,place}) {
  return (
    <li>
        <input type={type} name={username} id={userid} placeholder={place} className='p-4 border-4 border-solid border-slate-900 rounded-md m-5 w-[50%] shadow-2xl ' style={{borderbottom: '5px solid red'}}/>
    </li>
  )
}
