import { createContext, useEffect, useState } from "react";
import { userService } from "../services/users-service";


export const usersContext = createContext()

export function UserProvider ({children}){


    const [users,setUsers] = useState()
    const [toggle,setToggle] =useState(false)
    const [login,setLogin]=useState(true)
    

useEffect(()=>{
    userService().then(result=>setUsers(result))

},[])
return(
    <usersContext.Provider value={{users,setUsers,toggle,setToggle,login,setLogin}}>
        {children}
    </usersContext.Provider>
)

}