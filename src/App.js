import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, MainContainer } from './components'
import {CreateItemContainer } from './components'
import { AnimatePresence } from 'framer-motion'
const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
            <Routes>
                <Route path="/*" element={<MainContainer />} />
                <Route path="/create-item" element={<CreateItemContainer />}/>
            </Routes>
        </main>
    </div>
    </AnimatePresence>
  )
}

export default App