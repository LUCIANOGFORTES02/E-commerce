import { useContext, useState } from "react"
import { AuthContext } from "@/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function Login() {
       const auth = useContext(AuthContext);
       const navigate = useNavigate();

    //Armazenar os valores
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmpassword,setConfirmpassword]=useState('');
    const [showSignup, setShowSignup] = useState(false);
    
    const handleLogin=async()=>{
       if (email && password){
              const isLogged = await auth.signin(email,password);
       
       if(isLogged){
              toast.success('Operação realizada com sucesso')
              navigate('/');
       }
       else{
              toast.error('Opps... Erro inesperado.',{
                     position: "top-center",
                     theme: "dark",
              })
       }
       }
    }


  return (
    <div className="h-full flex justify-center items-center">
        <div className="bg-background w-[21.875rem] p-[2.1875rem] flex-col ">
            <div className=" " >{showSignup?'Cadastro':'Login'}</div>
            
                <div className="w-full">
                <input className="border border-gray-300 text-red-500 w-full mb-3 px-3 py-2 " 
                       type="text" placeholder='Nome' value={username} onChange={e=> setUsername(e.target.value)} />
                <input className="border border-gray-300 w-full mb-3 px-3 py-2 " 
                       type="email" placeholder='Email' value={email}  onChange={e=> setEmail(e.target.value)}
                       />
                <input className="border border-gray-300 w-full mb-3 px-3 py-2 " 
                       type="password" placeholder='Senha'value={password}  onChange={e=> setPassword(e.target.value)}
                       />
                <input className="border border-gray-300 w-full mb-3 px-3 py-2 " 
                       type="password" placeholder='Confirme a Senha' value={confirmpassword} onChange={e=> setConfirmpassword(e.target.value)} />
                </div>
                <hr />
                <a className="" href="#" onClick={handleLogin}>
                    <span className="flex justify-center">Já tem cadastro? Acesse o Login!</span>
                    <span className="flex justify-center">Não tem cadastro? Registre aqui!</span>
                </a>
        
        </div>
    </div>
  )
}
