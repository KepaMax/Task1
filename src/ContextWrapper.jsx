import { createContext, useState, useReducer } from "react";

const Context = createContext();
export default Context;

export const ContextWrapper = ({ children }) => {
    const [authorized, setAuthorized] = useState(false);
    const [cards, setCards] = useState([])
    const [state, dispatch] = useReducer(reducer, { type: '' })
    const [email, setEmail] = useState('');

    const getCards = async () => {
        const request = await fetch(`http://localhost:3000/cards/${email}`);
        const response = await request.json()
        setCards(response);
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'create':
                return { type: state.type = 'create' }
            case 'edit':
                return { type: state.type = 'edit' }
            case 'delete':
                return { type: state.type = 'delete' }
            case 'reset':
                return { type: state.type = '' }
            default:
                return state
        }
    }

    const contextData = {
        email: email,
        setEmail: setEmail,
        authorized: authorized,
        setAuthorized: setAuthorized,
        dispatch: dispatch,
        state: state,
        cards: cards,
        setCards: setCards,
        getCards: getCards
    }

    return (
        <Context.Provider value={contextData}>{children}</Context.Provider>
    )
}