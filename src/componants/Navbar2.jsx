import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';

const Navbar2 = () => {


    const [click , setclick] = useState(true);
    const handleClick = () => setclick (!click)


  return (
    <div>
      <div className="class1">
        <Link>Pranay Meshram</Link>

        <ul className='class2'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>

        </ul>

        <div className="hambarge" onClick={handleClick}>
            {click ?(
                <FaTimes />
            ):(
                <FaBars/>
            )

            }

        </div>

      </div>
    </div>
  )
}

export default Navbar2
