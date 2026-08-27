import { useState } from 'react'
import './App.css'
import FunctionBasedComponent from './components/FunctionBasedComponent'
import ClassBasedComponent from './components/ClassBasedComponent'
import Footer from './components/Footer'
import Header from './components/Header'
import ParentComponent from './components/ParentComponent'


function App() {
  return (
    <>
      {/* <div className='d-flex flex-column min-vh-100'> */}

      {/* display: flex;
        flex-direction: column;
        min-height: 100vh; */}


      <Header />
      <main className='flex-grow-1'>

        {/*       
            <br /><br />
            <h2>Welcome To ReactJS</h2>
            <p>ReactJS popural language</p>
            <FunctionBasedComponent />
            <ClassBasedComponent /> 
          */}

        <ParentComponent />

      </main>
      <Footer />
      {/* </div > */}
    </>
  )
}

export default App
