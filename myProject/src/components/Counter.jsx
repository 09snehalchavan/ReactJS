import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Count : {count} </h2>
            <br />
            <button onClick={() => setCount(count + 1)}>+</button>
            <br />
            <br />
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}

export default Counter
