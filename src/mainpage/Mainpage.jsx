import {useState} from 'react'
import Navbar from './components/Navbar'
import TodoCard from './components/TodoCard'
import Form from './components/Form'
import CreateCard from './components/CreateCard'
import DeleteCard from './components/DeleteCard'
import EditCard from './components/EditCard'

function Mainpage({ setAuthorized, email }) {
    const [editVisibility, setEditVisibility] = useState(false)
    const [createVisibility, setCreateVisibility] = useState(false)
    const [deleteVisibility, setDeleteVisibility] = useState(false)

    return (
        <div className={`${editVisibility || createVisibility || deleteVisibility ? 'overflow-hidden' : ''} relative`}>
            <CreateCard createVisibility={createVisibility} setCreateVisibility={setCreateVisibility}></CreateCard>
            <DeleteCard deleteVisibility={deleteVisibility} setDeleteVisibility={setDeleteVisibility}></DeleteCard>
            <EditCard editVisibility={editVisibility} setEditVisibility={setEditVisibility}></EditCard>
            <Navbar email={email} setAuthorized={setAuthorized}></Navbar>
            <button onClick={() => setCreateVisibility(true)} className='px-5 py-3 my-3 text-bold border rounded-[15px] mx-2 bg-amber-400 hover:bg-amber-500'>Create Card</button>
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