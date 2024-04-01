import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "@/pages/Login/login";
import UnauthorizedPage from "@/pages/admin/components/Unauthorized";

export const RequireAuth = ({children}: {children: JSX.Element} )=>{//Componente para permitir acesso apenas de pessoas logadas
    
    const auth = useContext(AuthContext);

    if(!auth.user){//Se não tiver um usuário salvo no contexto significa que não está logado
        return <Login/>;
    }
    if(auth.user.admin === false){//Para quando for usa admin
        return <UnauthorizedPage/>
    }

    return children;//Só é retornada se estiver logado
}