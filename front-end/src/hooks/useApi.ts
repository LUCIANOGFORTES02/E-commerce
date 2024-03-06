import axios from "axios"
import {baseApiUrl} from "../../global"

const api = axios.create({
    baseURL: baseApiUrl
})

export const useApi =()=>({

    validateToken: async (token: string) => {
       const response=  await api.post('/validate',{token});
       return response.data
    },

    signin: async (email:string, password: string) =>{
        const response = await api.post('/signin',{email,password});
        return response.data
    },

    signup: async ()=>{
        const response = await api.post('/logout');
        return response.data;
    }

})
