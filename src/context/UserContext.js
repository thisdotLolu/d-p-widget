import { createContext, useState } from "react";


export const UserContext= createContext()
    

export function UserProvider({children}){
    const[arrowbtc1,setArrowbtc1]=useState(true)
    const[arrowbtc2,setArrowbtc2]=useState(false)
    const[arrowusd1,setArrowusd1]=useState(true)
    const[arrowusd2,setArrowusd2]=useState(false)
    const[arrowsp1,setArrowsp1]=useState(true)
    const[arrowsp2,setArrowsp2]=useState(false)
    const[username,setUsername]=useState('')
    const[socialprofile,setSocialprofile]=useState('')
    const[email, setEmail]=useState('')

    console.log('BTCGREEN:'+ arrowbtc1,'BTCRED:'+ arrowbtc2,'USDGREEN:'+ arrowusd1,'USDRED:'+arrowusd2,'SPYGREEN:'+arrowsp1,'SPYRED: '+ arrowsp2)

    return(
        <UserContext.Provider value={{arrowbtc1,arrowbtc2,arrowusd2,arrowusd1,arrowsp1,arrowsp2,setArrowbtc1,setArrowbtc2,setArrowusd1,setArrowusd2,setArrowsp1,setArrowsp2, username,email,socialprofile,setUsername,setSocialprofile,setEmail}}>
            {children}
        </UserContext.Provider>
    )
}




