import React from 'react'
import Navbar from './components/Navbar'
import TodoCard from './components/TodoCard'

function Mainpage({setAuthorized,email, setDeleteVisibility, setCreateVisibility, setEditVisibility}) {
    return (
        <div className='z-0'>
            <Navbar email={email} setAuthorized = {setAuthorized}></Navbar>
            <button onClick={()=>setCreateVisibility(true)} className='px-5 py-3 my-3 text-bold border rounded-[15px] mx-2 bg-amber-400 hover:bg-amber-500'>Create Card</button>
            <div className='flex flex-wrap'>
                <TodoCard setDeleteVisibility={setDeleteVisibility} setEditVisibility={setEditVisibility}></TodoCard>
                <TodoCard setDeleteVisibility={setDeleteVisibility} setEditVisibility={setEditVisibility}></TodoCard>
                <TodoCard setDeleteVisibility={setDeleteVisibility} setEditVisibility={setEditVisibility}></TodoCard>
                <TodoCard setDeleteVisibility={setDeleteVisibility} setEditVisibility={setEditVisibility}></TodoCard>
            </div>
        </div>
    )
}

export default Mainpage