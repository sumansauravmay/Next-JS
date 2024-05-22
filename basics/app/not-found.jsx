import Link from 'next/link';
import React from 'react'

const notFound = () => {
  return (
    <div>
      Not Found Page
      <br/>
      
      <Link href={'/'}>
      <button>Go to Home Page</button>
      </Link>
      
    </div>
  )
}

export default notFound;
