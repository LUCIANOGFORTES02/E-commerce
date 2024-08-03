import { useState } from "react";

interface PropsImageProduct{
    name: string;
    imageUrls: string[];
}

export default function ProductImages({name,imageUrls}:PropsImageProduct) {
    const[currentImage, setCurrentImage]=useState(imageUrls[0])

    const handleclickImage=(image:string)=>{
        setCurrentImage(image)
    }


  return (
    <div className="flex flex-col lg:min-h-full lg:w-3/5">
        <div className="flex h-[380px] w-full items-center justify-center bg-accent lg:h-full lg:rounded-lg">
            <img
            src={currentImage}
            alt={name}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            />

        </div>
        <div  className="mt-5 grid grid-cols-4 gap-4 px-5 lg:px-0">
            {imageUrls.map((image)=>(
                 <button onClick={()=>handleclickImage(image)} key={image}
                  className={`flex justify-center items-center h-[100px] rounded-lg bg-accent
                 ${image === currentImage && "border-2 border-solid border-primary" }`}>
                    <img 
                    src={image} 
                    alt={name}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w-[80%]" />

                 </button>
            ))

               
            }


        </div>
        
    </div>
  )
}
