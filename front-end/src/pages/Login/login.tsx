import {  useContext, useState } from "react"
import { AuthContext } from "@/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useApi} from '../../hooks/useApi'


export default function Login() {
       const auth = useContext(AuthContext);
       const navigate = useNavigate();
       const api = useApi();

       

    //Armazenar os valores
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmpassword,setConfirmpassword]=useState('');
    const [showSignup, setShowSignup] = useState(false);
    
    const handleLogin= async() =>{

       const isLogged = await auth.signin(email,password);
       if(isLogged){
              toast.success('Usuário logado com sucesso')
              navigate('/');//Para onde vai depois de logado 
       }
       else{
              toast.error('Opps... Email ou senha incorretos.',{
                     position: "top-right",
                     theme: "dark",
              })
       }
       }
   
    const handleCadastrar=async()=>{//Enviar na rota save
      try {
        await api.register(username,email,password,confirmpassword);
        toast.success('Operação realizada com sucesso')
      } catch (error) {
        toast.error('Opps... Erro.',{
          position: "top-right",
          theme: "dark",
   })
        
      }
      
    }

    const handleTelaCdastro = (e: any)=>{
      e.preventDefault(); 
      setShowSignup(!showSignup);
      setUsername('')
      setEmail('')
      setPassword('')
      setConfirmpassword('')

    }


  return (
       
    <div className="h-full flex justify-center items-center">
       <div className="bg-background w-[21.875rem] p-[2.1875rem] flex flex-col items-center">
              <div className="text-lg font-semibold mt-[0.625rem] mb-[0.9375rem]" >
                     {showSignup?'Cadastro':'Login'}
              </div>
              <hr className=" w-full"/>
            
             
                     {showSignup &&(
                     <input className="border border-border text-black w-full mb-3 px-3 py-2 outline-none" 
                       type="text" placeholder='Nome' value={username} onChange={e=> setUsername(e.target.value)} 
                     />
                     )}
                     <input className="border border-border  text-black w-full mb-3 px-3 py-2 outline-none" 
                       type="email" placeholder='Email' value={email}  onChange={e=> setEmail(e.target.value)}
                     />
                     <input className="border border-border  text-black w-full mb-3 px-3 py-2 outline-none" 
                       type="password" placeholder='Senha'value={password}  onChange={e=> setPassword(e.target.value)}
                     />
                     {showSignup &&(
                     <input className="border border-border text-black w-full mb-3 px-3 py-2 outline-none" 
                       type="password" placeholder='Confirme a Senha' value={confirmpassword} onChange={e=> setConfirmpassword(e.target.value)} 
                     />
                     )}
              
              {showSignup ? <button className=" bg-primary py-1 px-4" onClick={handleCadastrar}>Registrar</button> : 
                            <button className="mt-2 bg-primary py-1 px-4" onClick={handleLogin} >Entrar</button>
              }

              <a className="mt-3" href="#" onClick={handleTelaCdastro}>
                      <span className="flex justify-center text-ring py-2">{showSignup ? 'Já tem cadastro? Acesse o Login!' : 'Não tem cadastro? Registre aqui!'}</span> 
                    
              </a>
        
        </div>
        <ToastContainer/>
    </div>
  )
}
