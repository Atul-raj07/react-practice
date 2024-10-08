import React, { createContext, useState } from 'react';

export const DataContext = createContext(null)

const Dataprovider = (props) => {
    const [data, setdata] = useState("yeh ek data hai")
  return (
    <DataContext.Provider value={[data, setdata]}>
        {props.children}
        </DataContext.Provider>
  )
}

export default  Dataprovider;