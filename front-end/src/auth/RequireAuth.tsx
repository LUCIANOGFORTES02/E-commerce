import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "@/pages/Login/login";

export const RequireAuth = ({children}: {children: JSX.Element} )=>{//Componente para permitir acesso apenas de pessoas logadas
    
    const auth = useContext(AuthContext);

    if(!auth.user){//Se não tiver um usuário salvo no contexto significa que não está logado
        return <Login/>;
    }
    // if(auth.user.level < level){//Para quando for usa admin
    //     return
    // }

    return children;//Só é retornada se estiver logado
}