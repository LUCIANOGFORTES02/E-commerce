import { Button } from '@/components/ui/button'
import { useApi } from '@/hooks/useApi'
import { Category } from '@/types/Category';
import { SaveIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function AddProducts() {
    
    const[selectCategorys,setSelectCategorys] = useState<Category[]>([]);

    const[name,setName]=useState<string>('');
    const[slug,setSlug]=useState<string>('');
    const[description,setDescription]=useState<string>('');
    const[basePrice,setBasePrice]=useState<number>(NaN);
    const[category,setCategory] = useState<string>('');
    const[discount,setDiscount] = useState<number>(NaN);
    const[imageUrls,setImageurls] = useState<string[]>(['https://example.com/image1.jpg', 'https://example.com/image2.jpg']);




    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newImages = [...imageUrls];
        newImages[index] = e.target.value; // Atualiza a URL da imagem no índice especificado
        setImageurls(newImages);
    };

    
    

    const api = useApi()
    const handleSaveProduct= async()=>{
        //SALVAR O PRODUTO
        try {
            await api.saveProduct(name,slug,description,basePrice,category,discount,imageUrls);
            toast.success('Operação realizada com sucesso')
            
        } catch (error) {
            toast.error('Opps... Erro.',{
                position: "top-right",
                theme: "dark",
         })

        }
    }

    useEffect(()=>{

        const fetchCategories= async()=>{
            try {  
                const data = await  api.loadCategories();
                console.log(data)
                setSelectCategorys(data);
            } catch (error) {
            }           
        }
        fetchCategories();
    },[]);


  return (
    <div className='p-5  shadow-md' >
        <p className='text-lg font-semibold mb-4'>Preencha os campos</p>
        <div className='flex flex-col gap-4 text-black '>
            <input 
                className="appearance-none rounded-lg w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary border-2"
                type="text" placeholder='Informe o nome'  value={name} onChange={e=>setName(e.target.value)}/>
            <input
                className="appearance-none rounded-lg w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary border-2" 
                type="text"  placeholder='Informe o slug' value={slug} onChange={e=>setSlug(e.target.value)} />
            <input 
                className="appearance-none rounded-lg w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary border-2"
                type="text"  placeholder='Informe o description' value={description} onChange={e=>setDescription(e.target.value)} />
            <input 
                className="appearance-none rounded-lg w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary border-2"
                type="number"  placeholder='Informe o preço base' value={basePrice } onChange={e=>setBasePrice(parseFloat(e.target.value)||0)} />
            <select 
                className=" rounded-lg w-full py-2 px-4  focus:outline-none focus:bg-white focus:border-primary border-2"
                id='categoryId' value={category} onChange={e=>setCategory(e.target.value)}>
                <option>Selecione uma Categoria</option>
                {
                    selectCategorys.map((category)=>(

                        <option key={category.id} value={category.id}> {category.name}</option>
                    ))
                }

            </select>
            <input 
                className="appearance-none rounded-lg w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary border-2"
                type="number"  placeholder='Informe o desconto' value={discount !==undefined ? discount:''} onChange={e=>setDiscount( parseFloat(e.target.value)||0)} />
            <input 
                className="appearance-none rounded-lg w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary border-2"
                type="text"  placeholder='Informe a url da imagem' value={imageUrls[0]|| " "} onChange={e=>handleImageChange(e,0)} />
            <input 
                className="appearance-none rounded-lg w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary border-2"
                type="text"  placeholder='Informe a url da imagem' value={imageUrls[1]|| " "} onChange={e=>handleImageChange(e,1)} />
        </div>


       

        <div className='flex items-center justify-end mt-4'>
            <Button onClick={handleSaveProduct} className=' flex gap-1'> 
                <SaveIcon size={18}/>
            Salvar
            </Button>
        </div>
        <ToastContainer/>
       
    </div>
  )
}
