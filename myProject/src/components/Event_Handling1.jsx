import React, { useState } from 'react'

const Event_Handling1 = () => {

    const [name, setName] = useState("");

    const handleClick = () => {
        alert("I am onClick Event");
    }

    const getInput = (event) => {
        setName(event.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted Successfully...!!!");
    }

    const handleMouseUp = (e) => {
        e.target.style.backgroundColor = 'red';
    }

    const handleMouseOut = (e) => {
        e.target.style.backgroundColor = 'blue';
    }

    return (
        <>
            <h3>Event Handling</h3>


            <button onClick={handleClick}>Click Here</button>
            <br /><br />
            <span onClick={handleClick}> I am Span Tag</span>
            <br /><br />
            <input type="text" onChange={getInput} />
            <br /><br />
            <h3>{name}</h3>

            <form action="" onSubmit={formSubmit}>
                <input type="text" /><br /><br />
                <input type="text" /><br /><br />
                <button type='submit'>Submit</button>
            </form>
            <br /><br />

            {/* <img src="https://www.amazon.in/Beautyful-Flower-Packing-Quality-Secure/dp/B0DL37BCF8" alt="Image not Found" onMouseUp={handleMouseUp} /> */}

            <button onMouseUp={handleMouseUp} onMouseOut={handleMouseOut}>Mouse Up</button>

        </>
    )
}

export default Event_Handling1
