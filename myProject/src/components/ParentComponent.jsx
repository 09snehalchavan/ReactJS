import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    return (
        <>
            <ChildComponent name='ABC' address='Kolhapur' rollno={101} />
        </>
    )
}

export default ParentComponent
