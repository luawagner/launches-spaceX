import { useState } from 'react'

export function Counter () {
    const [counter, setCounter] = useState(0)

    return (
        <>
        <span className="text-yellow-300 text-xl mr-4"> {counter} </span>
        <button className="text-white border px-4 py-2 text-xl" onClick={() => setCounter(counter => counter + 1)}> + </button>
        <button className="text-white border px-4 py-2 text-xl" onClick={() => setCounter(counter => counter - 1)}> - </button>
        </>
    )
}

