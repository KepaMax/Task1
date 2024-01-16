import React from 'react'

function TodoCard({ setDeleteVisibility, setEditVisibility }) {
    return (
        <div className='w-full h-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  sm:min-h-[330px] rounded-[20px] m-2 sm:m-3 md:m-4 lg:m-6 xl:m-8'>
            <div className='flex py-5 flex-col rounded-t-[7px] h-auto items-center justify-center px-3 bg-zinc-200'>
                <div className='w-full text-center sm:text-left'>
                    <h3 className='text-3xl font-bold'>Card title</h3>
                </div>
                <p className='my-1 text-center sm:text-left'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
            </div>
            <div className='flex justify-center flex-col sm:flex-row sm:justify-end items-center rounded-b-[7px] p-4 bg-zinc-300 h-auto'>
                <button onClick={() => setEditVisibility(true)} className='mx-3 sm:mx-1 text-xl w-full sm:w-auto font-bold rounded-[7px] h-3/5 py-2 px-6 bg-[#f6b819] hover:bg-yellow-700'>Edit</button>
                <button onClick={() => setDeleteVisibility(true)} className='mx-3 sm:mx-1 mt-4 sm:mt-0 text-xl w-full sm:w-auto font-bold rounded-[7px] h-3/5 py-2 px-5 bg-[#f6b819] hover:bg-yellow-700'>Delete</button>
            </div>
        </div>
    )
}

export default TodoCard