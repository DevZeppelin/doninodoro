import Link from 'next/link'
import React from 'react'

const CustomButton = ({ text, href }) => {
    return (
        <div
            className='uppercase text-secundary border-2 border-primary p-3 md:p-6 rounded-xl bg-gradient-to-b from-liveColor to-mainColor font-black cursor-pointer hover:bg-gradient-to-b hover:from-primary hover:to-mainColor hover:text-liveColor'>
            <Link href={href}>
                {text}
            </Link>
        </div>
    )
}

export default CustomButton