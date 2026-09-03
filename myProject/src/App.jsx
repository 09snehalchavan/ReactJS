import { useState } from 'react'
import './App.css'
import FunctionBasedComponent from './components/FunctionBasedComponent'
import ClassBasedComponent from './components/ClassBasedComponent'
import Footer from './components/Footer'
import Header from './components/Header'
import ParentComponent from './components/ParentComponent'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import Hide_show from './components/Hide_show'
import UsersData from './components/UsersData'
import UseRef_example from './components/UseRef_example'
import { UserContext_example } from './components/UserContext_example'
import Home from './components/Home'
import About from './components/About'
import UseMemo_example from './components/UseMemo_example'


function App() {

  const [user] = useState("ABC");

  return (
    <>
      {/* <div className='d-flex flex-column min-vh-100'> */}

      {/* display: flex;
        flex-direction: column;
        min-height: 100vh; */}

      {/* 
      <Header />
      <main className='flex-grow-1'> */}

      {/*       
            <br /><br />
            <h2>Welcome To ReactJS</h2>
            <p>ReactJS popural language</p>
            <FunctionBasedComponent />
            <ClassBasedComponent /> 
          */}
      {/* 
        <ParentComponent />

      </main>
      <Footer /> */}
      {/* </div > */}

      {/* <Counter /> */}

      {/* <Toggle /> */}

      {/* <Hide_show /> */}

      {/* <UseEffectExample /> */}

      {/* <UsersData /> */}

      {/* <UseRef_example /> */}

      {/* <UserContext_example.Provider value={user}>

        <Home />
        <About />

      </UserContext_example.Provider> */}

      <UseMemo_example />

    </>
  )
}

export default App
