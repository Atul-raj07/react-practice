import React, { useContext } from 'react'
import { DataContext } from '../App'

const Headerchild = () => {
  const [data,setdata] =  useContext(DataContext) 
     return (
    <div>Headerchild :{data}</div>
  )
}

export default Headerchild