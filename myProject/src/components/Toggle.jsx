import React, { useState } from 'react'


const Toggle = () => {

    const [darkMode, setDarkMode] = useState(false);

    const changeBackground = () => {
        setDarkMode(!darkMode);
    }

    return (
        <>
            <div style={{
                backgroundColor: darkMode ? "black" : "white",
                color: darkMode ? "white" : "black",
                height: "50vh",
                width: "50vh"
            }}>
                <h2>Welcome to Toggle </h2><br /><br />
                <button onClick={changeBackground}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
            </div>
        </>
    )

}

export default Toggle
