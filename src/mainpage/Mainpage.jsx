import { useEffect, useState, useContext } from 'react'
import Navbar from './components/Navbar'
import TodoCard from './components/TodoCard'
import CreateCard from './components/CreateCard'
import DeleteCard from './components/DeleteCard'
import EditCard from './components/EditCard'
import Context from '../ContextWrapper'

function Mainpage() {
    const { email } = useContext(Context)
    const [openModal, setOpenModal] = useState('')
    const [cards, setCards] = useState([])
    const [filteredCards, setFilteredCards] = useState([])
    const [activeCard, setActiveCard] = useState()

    useEffect(() => {
        setFilteredCards(cards.filter((card) => card.author === email));
    }, [cards])

    return (
        <div className={`relative h-screen ${openModal ? 'overflow-hidden' : ''}`}>

            {openModal === "create" ?
                <div className='fixed inset-0 flex justify-center items-center w-screen z-10 bg-opacity-50 bg-black'>
                    <CreateCard setCards={setCards} setOpenModal={setOpenModal} email={email} />
                </div> : null
            }

            {openModal === "edit" ?
                <div className='fixed inset-0 flex justify-center items-center w-screen z-10 bg-opacity-50 bg-black'>
                    <EditCard activeCard={activeCard} setCards={setCards} setOpenModal={setOpenModal} />
                </div> : null
            }

            {openModal === "delete" ?
                <div className='fixed inset-0 flex justify-center items-center w-screen z-10 bg-opacity-50 bg-black'>
                    <DeleteCard activeCard={activeCard} setCards={setCards} setOpenModal={setOpenModal} />
                </div> : null
            }

            <Navbar />
            <div className='mx-2 lg:mx-5 px-2'>
                <button onClick={() => setOpenModal('create')} className='w-full sm:w-max px-4 sm:px-5 py-2 sm:py-3 m my-2 sm:my-3 text-bold border rounded-[15px] bg-amber-400 hover:bg-amber-500'>Create Card</button>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 p-2 lg:p-5'>
                {filteredCards.length ? filteredCards.map((card) => (<TodoCard setActiveCard={setActiveCard} setOpenModal={setOpenModal} key={card.id} data={card} />)

                ) : <p className='col-span-3 text-center font-bold'>No cards found</p>}
            </div>
        </div>
    )
}

export default Mainpage