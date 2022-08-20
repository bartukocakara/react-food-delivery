import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components'
import {CreateItemContainer, MainContainer} from './views'
import { AnimatePresence } from 'framer-motion'
const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-24 p-8 w-full">
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