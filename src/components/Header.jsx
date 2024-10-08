import React, { useContext } from 'react';
import{ DataContext} from '../Contexts/Dataprovider';


const Header = () => {
   const [data,setdata] = useContext(DataContext)
  return (
    <div>
        {data}
    </div>
  )
}

export default Header