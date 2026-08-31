import React, { useState } from 'react'

const Hide_show = () => {

    const [hideMode, setHideMode] = useState(false)

    const changeText = () => {
        setHideMode(!hideMode);
    }

    return (
        <>

            <br /><br />
            <button onClick={changeText}>{hideMode ? "Show Text" : "Hide Text"}</button>


            <div style={{
                // color: hideMode ? "white" : "black"
                display: hideMode ? "none" : "block"
            }}>
                <br /><br />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit ducimus obcaecati magni quidem labore eum omnis soluta ipsam accusamus, iure animi, architecto deleniti quo illum consequatur, esse perspiciatis a error?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi neque, numquam, odio voluptas aliquid necessitatibus tenetur deleniti labore ullam quas possimus. Dicta ipsa necessitatibus alias aperiam soluta velit voluptate deserunt.
                </p>

            </div>

        </>
    )

}

export default Hide_show
