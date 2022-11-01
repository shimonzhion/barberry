import { useState,createContext, useEffect } from "react";
import {barbersService} from '../services/barbers-service'




export const barbersContext = createContext()


export default function BarbersProvider({children}){

const [barbers,setBarbers] = useState()
useEffect(()=>{
barbersService().then(result=>setBarbers(result))
},[])
return (
<barbersContext.Provider value={{barbers,setBarbers}}>
    {children}
</barbersContext.Provider>
)

}