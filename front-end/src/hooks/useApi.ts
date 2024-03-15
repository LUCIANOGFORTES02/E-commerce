import axios from "axios"
import {baseApiUrl} from "../../global"
//import { User } from "@/types/User"

const api = axios.create({
    baseURL: baseApiUrl,
})
const success = (res:any )=>res
const error=(err:any)=>{
    if(401== err.response.status){
        //window.location='/';

    }
    else{
        return Promise.reject(err)
    }
}
axios.interceptors.response.use(success,error)

export const useApi =()=>({



    validateToken: async (token: string) => {
       const response=  await api.post('/validateToken',{token});
       return response.data
    },

    signin: async (email:string, password: string) =>{
        const response = await api.post('/signin',{email,password});
        return response.data
    },
    register: async (name:string,email:string, password: string,confirmPassword:string)=>{
        const response = await api.post('/users',{name,email,password,confirmPassword})
        return response.data

    },

    // signup: async ()=>{
    //     const response = await api.post('/signup');
    //     return response.data;
    // },

    saveCategory: async()=>{

    },

    loadCategories:async()=>{
        const response = await api.get('/category');
        return response.data
    },

    saveProduct: async ()=>{

    },

    loadProduct: async ()=>{
        const response = await api.get('/product');
        return response.data

    },
    loadProductDiscount: async ()=>{
        const response = await api.get('/productdiscount');
        return response.data

    },
    loadProductCategory: async ()=>{
        const response = await api.get('/productkeyboard');
        return response.data

    }


})
