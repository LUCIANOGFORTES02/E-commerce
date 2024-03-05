import { useState } from "react"
import axios from 'axios'
import {baseApiUrl} from '../../../global.ts'

export default function Auth() {
    //Armazenar os valores
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmpassword,setConfirmpassword]=useState('');
    const [showSignup, setShowSignup] = useState(false);

    const handleSignin = () =>{
        axios.post(`${baseApiUrl}/signin`,)
        .then()

        

        
    }

    const handleSignup = () =>{


    }
    

  return (
    <div className="h-full flex justify-center items-center">
        <div className="w-[21.875rem] p-[2.1875rem] flex-col ">
            <div className=" " >{showSignup?'Cadastro':'Login'}</div>
            
                <div className="w-full">
                <input className="border border-gray-300 w-full mb-3 px-3 py-2 " 
                       type="text" placeholder='Nome' value={username} />
                <input className="border border-gray-300 w-full mb-3 px-3 py-2 " 
                       type="email" placeholder='Email' value={email}  
                       />
                <input className="border border-gray-300 w-full mb-3 px-3 py-2 " 
                       type="password" placeholder='Senha'value={password}  
                       />
                <input className="border border-gray-300 w-full mb-3 px-3 py-2 " 
                       type="password" placeholder='Confirme a Senha' value={confirmpassword}  
                       />
                </div>
                <hr />
                <a className="" href="#" onClick={e => { e.preventDefault(); setShowSignup(!showSignup); }}>
                    <span className="flex justify-center">Já tem cadastro? Acesse o Login!</span>
                    <span className="flex justify-center">Não tem cadastro? Registre aqui!</span>
                </a>
        
        </div>
    </div>
  )
}
