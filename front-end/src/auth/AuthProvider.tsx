import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "@/types/User";
import { useApi } from "@/hooks/useApi";

export const AuthProvider=({children}:{children: JSX.Element})=>{
    const [user,setUser]=useState<User| null>(null);
    const api = useApi();

    useEffect(()=>{
        const validateToken = async ()=>{
            const storageData = localStorage.getItem('authToken');
            if(storageData){
                const data = await api.validateToken(storageData);
                if(data.user){
                    setUser(data.user)
                }
            }
        }
        validateToken();

    },[api]);


    
    const signin = async(email: string, password: string)=>{//Requisição ao backend e irá receber a resposta positiva ou não
        const data = await api.signin(email,password);

        if(data.user && data.token){
            setUser(data.user);
            setToken(data.token)
            return true;
        }
        return false;
    }

    const signup= async ()=>{
        await api.signup();
        setUser(null);
        setToken('');

    }

    const setToken=(token: string)=>{//Salvar o token no localStorage
        localStorage.setItem('authToken',token)
    }


return(
    <AuthContext.Provider value={{user, signin, signup}}>
        {children}
    </AuthContext.Provider>
)
}