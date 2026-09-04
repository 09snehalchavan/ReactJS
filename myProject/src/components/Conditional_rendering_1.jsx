import React from 'react'

const Conditional_rendering_1 = () => {

    let isLoggedIn = true;

    // if (isLoggedIn) {
    //     alert("Welcome User..!!");
    // }
    // else {
    //     alert("Please Login....!!!");
    // }

    return (
        <>
            <h2>Conditional Rendering</h2>
            {isLoggedIn ? <button>Logout</button> : <button>Login</button>}

            {isLoggedIn && <h3>Good Morning</h3>}
        </>
    )
}

export default Conditional_rendering_1
