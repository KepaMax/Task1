import React from 'react'

function DeleteCard({deleteVisibility,setDeleteVisibility}) {
    return (
        <div className={`${deleteVisibility ? 'fixed inset-0': 'hidden'} flex justify-center items-center z-10 w-screen bg-opacity-50 bg-[#000000]`}>
            <div className=' flex flex-col justify-around px-20 py-10 items-center w-[700px] max-h-[240px] rounded-[13px]  bg-white relative'>
                <button onClick={()=> setDeleteVisibility(false)} class="w-5 h-5 bg-red-600 rounded-full absolute top-[10px] right-[10px]"></button>
                <h3 className='text-2xl font-bold'>DELETE CARD</h3>
                <p className='text-zinc-400'>Are you sure you want to delete card “Card name”?</p>
                <div className=''>
                    <button onClick={()=> setDeleteVisibility(false)} className='px-5 py-3 border rounded-[15px] mx-2 bg-white hover:bg-[#DFDFDF]'>Close</button>
                    <button className='px-5 py-3 border rounded-[15px] mx-2 bg-amber-400 hover:bg-amber-500'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteCard