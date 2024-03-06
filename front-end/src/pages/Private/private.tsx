import { AuthContext } from '@/auth/AuthContext'
import { useContext } from 'react'


export default function PrivateTeste () {
    const auth = useContext(AuthContext);//Tem os dados dos usuários, consegue fazer o Login

  return (
    <div>index

        <h2>Página privada</h2>
        {'olá' +auth.user?.name}

    </div>


  )
}
