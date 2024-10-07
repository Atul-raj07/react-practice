import React, { createContext, useState } from 'react'
import Header from './components/Header'
import Headerchild from './components/Headerchild'

export const DataContext = createContext(null)

const App = () => {
  const [data,setdata] = useState("data json data data  set data  update boolean")
  return (
    <DataContext.Provider value={[data,setdata]}>
      <Header/>
      </DataContext.Provider>
  )
}

export default App