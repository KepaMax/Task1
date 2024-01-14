import React from 'react'

function TodoCard({ setDeleteVisibility, setEditVisibility }) {
    return (
        <div className='max-w-[560px] min-h-[330px] rounded-[20px] m-4'>
            <div className='flex py-5 flex-col rounded-t-[7px] h-3/4 items-center justify-center px-3 bg-zinc-200'>
                <div className='w-full'>
                    <h3 className='text-3xl font-bold'>Card title</h3>
                </div>
                <p className='my-1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
            </div>
            <div className='flex justify-end items-center rounded-b-[7px]  bg-zinc-300 h-1/4'>
                <button onClick={() => setEditVisibility(true)} className='mx-3 text-xl font-bold rounded-[7px] h-3/5 px-6 bg-[#f6b819] hover:bg-yellow-700'>Edit</button>
                <button onClick={() => setDeleteVisibility(true)} className='mx-3 text-xl font-bold rounded-[7px] h-3/5 px-5 bg-[#f6b819] hover:bg-yellow-700'>Delete</button>
            </div>
        </div>
    )
}

export default TodoCard