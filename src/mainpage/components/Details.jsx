import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const { message } = useParams();
    return (
        <div className='text-3xl w-screen h-screen flex justify-center items-center'>
            <p>{message}</p>
        </div>
    )
}

export default Details