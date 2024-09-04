import { createContext } from "react";



export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const storetokenInLS = (serverToken) => {

    }
    return <AuthContext.Provider value={{ storetokenInLS}}> 
{children}


    </AuthContext.Provider>
}