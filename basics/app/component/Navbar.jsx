import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
       <nav>
          <Link href="/">Home</Link> &emsp;&emsp;&emsp;
          <Link href="/about">About</Link> &nbsp;&nbsp;&nbsp;
          <Link href="/contact">Contact</Link> &nbsp;&nbsp;&nbsp;
          <Link href="/todo">Todo</Link> &nbsp;&nbsp;&nbsp;
        </nav>
    </div>
  )
}

export default Navbar
