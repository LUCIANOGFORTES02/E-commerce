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

    saveCategory: async()=>{

    },

    loadCategories:async()=>{
        const response = await api.get('/category');
        return response.data
    },

    saveProduct: async ()=>{
        const response = await api.post('/product');
        return response.data

    },
    updateProduct: async(id:string)=>{//Atualizar o produto
        const response = await api.put(`/product/${id}`);
        return response.data
    },

    loadProductAndCategory: async()=>{
        const response = await api.get('/productandcategory');//Busca o produto e o nome da categoria
        return response.data
    },
    
    loadProduct: async ()=>{//Busca todos os produto
        const response = await api.get('/product');
        return response.data

    },
    loadProductBySlug: async(slug:string)=>{//Busca os produtos com deconto pelo slug
        const response = await api.get(`/product/${slug}`);
        return response.data

    },
    loadProductDiscount: async ()=>{//Retorna os preços com desconto
        const response = await api.get('/productdiscount');
        return response.data

    },
    loadKeyboardsCategory: async ()=>{//Retorna os teclados
        const response = await api.get('/productkeyboard');
        return response.data

    },
    loadMousesCategory: async ()=>{//Retorna os moues
        const response = await api.get('/productmouses');
        return response.data

    },
    loadCategoryProducts: async (slug:string)=>{//Retorna a categoria e seus respectivos produtos
        const response = await api.get(`/category/${slug}`);
        return response.data
    }


})
