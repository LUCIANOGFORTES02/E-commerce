export type User={
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword?: string

}

export type Category={
    id:string,
    name:string,
    slug:string,
    imageUrl:String
}

export type Product={
    id:string,
    name:string,
    slug:string,
    imageUrl:String[],
    description: string,
    //basePrice: Float,
    categoryId: string,
    //discountPercentege: Integer

}