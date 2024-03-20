import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Foot from './styles.module.css'
import Link from 'next/link';



export default function Footer() {
  return (
    <footer className={Foot.foot}>
      <Link href='https://github.com/Ogojoshua905'>
      <FaGithub />
      </Link>

      <Link href="www.linkedin.com/in/ogo-joshua-9572832a4">
       <FaLinkedin />
      </Link>

      <Link href='https://www.instagram.com/officialalgebra905/'>
      <GrInstagram />
      </Link>
    </footer>
  )
}
