import { User } from "@/types/User";
import { createContext } from "react"

export type AuthContextType ={//Criando um tipo para o contexto
       user: User | null;
       signin : (email: string, password: string)=>Promise<boolean|undefined>;
       signup : () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

