import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'

import Header from '../Components/Header'
import Skills from '../Pages/Skills'
import Connect from '../Pages/Connect'

const Routing = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="/Contact" element={<Connect />} />
                

            </Routes>
        </div>
    )
}

export default Routing