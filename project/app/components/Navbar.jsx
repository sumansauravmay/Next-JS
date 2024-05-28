import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>Home</Link>&emsp;&emsp;&emsp;
      <Link href={"/todo"}>Todo</Link>&nbsp;&nbsp;&nbsp;
    </nav>
  )
}

export default Navbar
