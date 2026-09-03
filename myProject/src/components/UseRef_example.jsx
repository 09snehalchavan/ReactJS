import React, { useRef } from 'react'

const UseRef_example = () => {

    const myinput = useRef();

    const handleSubmit = () => {
        // console.log(myinput);
        console.log(myinput.current.value);
        alert(myinput.current.value);
    }

    return (
        <>
            {/* <h2>Wel-Come</h2> */}

            <input type="text" name="" ref={myinput} />
            <br /><br />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default UseRef_example
