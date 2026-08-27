import React from 'react'

// const ChildComponent = (props) => {
//     return (
//         <>
//             <h2>Hello {props.name}</h2>
//             <h2>Address : {props.address}</h2>
//             <h2>Roll No : {props.rollno}</h2>
//         </>
//     )
// }


const ChildComponent = ({ name, address, rollno }) => {
    return (
        <>
            <h2>Hello {name}</h2>
            <h2>Address : {address}</h2>
            <h2>Roll No : {rollno}</h2>
        </>
    )
}



export default ChildComponent
