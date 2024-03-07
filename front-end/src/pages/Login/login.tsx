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
              navigate('/');//Para onde vai depois de logado 
       }
       else{
              toast.error('Opps... Erro inesperado.',{
                     position: "top-center",
                     theme: "dark",
              })
       }
       }
    }
    const handleCadastrar=()=>{

    }


  return (
    <div className="h-full flex justify-center items-center">
       <div className="bg-background w-[21.875rem] p-[2.1875rem] flex-col ">
              <div className="text-lg font-thin mt-[0.625rem] mb-[0.9375rem]" >
                     {showSignup?'Cadastro':'Login'}
              </div>
              <hr className=" w-full"/>
            
              <div className="w-full">
                     {showSignup &&(
                     <input className="border border-gray-300 text-black w-full mb-3 px-3 py-2 " 
                       type="text" placeholder='Nome' value={username} onChange={e=> setUsername(e.target.value)} 
                     />
                     )}
                     <input className="border border-gray-300  text-black w-full mb-3 px-3 py-2 " 
                       type="email" placeholder='Email' value={email}  onChange={e=> setEmail(e.target.value)}
                     />
                     <input className="border border-gray-300  text-black w-full mb-3 px-3 py-2 " 
                       type="password" placeholder='Senha'value={password}  onChange={e=> setPassword(e.target.value)}
                     />
                     {showSignup &&(
                     <input className="border border-gray-300  text-black w-full mb-3 px-3 py-2 " 
                       type="password" placeholder='Confirme a Senha' value={confirmpassword} onChange={e=> setConfirmpassword(e.target.value)} 
                     />
                     )}
              </div>
              {showSignup ? <button className="self-end bg-primary py-1 px-4" onClick={handleCadastrar}>Registrar</button> : 
                            <button className="self-end bg-primary py-1 px-4" onClick={handleLogin} >Entrar</button>
              }

              <a className="mt-7" href="#" onClick={e=>{e.preventDefault(); setShowSignup(!showSignup);}}>
                      <span className="flex justify-center">{showSignup ? 'Já tem cadastro? Acesse o Login!' : 'Não tem cadastro? Registre aqui!'}</span> 
                    
              </a>
        
        </div>
    </div>
  )
}
