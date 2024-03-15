import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/auth/AuthContext";
import { Avatar } from "./avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Gravatar from "react-gravatar";
import { Separator } from "@radix-ui/react-separator";


export default function Header() {

    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const handleLoginClick =async()=>{
     await navigate('/login');

   }
   const handleLogoutClick =async()=>{
    await auth.signup()
    window.location.href = window.location.href
   //await navigate('/');
  }

    return <Card className="flex items-center p-[1.875rem] justify-between">
       <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                    <MenuIcon/>
                </Button>
            </SheetTrigger>

            <SheetContent side="left">
                <SheetHeader className="text-left text-lg font-semibold">
                    Menu
                </SheetHeader>

                {auth.user &&(
                    <div className="flex flex-col">

                        <div className="flex itens-center gap-2 py-4">
                            <Avatar>
                                <AvatarFallback className="">{auth.user.name?.[0].toUpperCase()}</AvatarFallback>
                            </Avatar>

                            <Gravatar email={auth.user.email} alt="User"/>

                            <div className="flex flex-col">
                            <p className="font-medium">{auth.user.name}</p>
                            <p className="font-sm opacity-75">Boas compras</p>
                            </div>
                        </div>
                        <Separator/>
                   </div>
                )}



                <div className="mt-2 flex flex-col gap-2">
                   {!auth.user &&(
                    <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2">
                        <LogInIcon size={16}/>
                        Fazer Login
                    </Button>
                   ) }

                    {auth.user &&(
                    <Button onClick={handleLogoutClick} variant="outline" className="w-full justify-start gap-2">
                        <LogOutIcon size={16}/>
                        Fazer Logout
                    </Button>
                   ) }

                    <Button  variant="outline" className="w-full justify-start gap-2">
                        <HomeIcon size={16}/>
                        Ofertas
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                        <ListOrderedIcon size={16}/>
                        Catálogo
                    </Button>

                    {auth.user &&(
                    <Button variant="outline" className="w-full justify-start gap-2">
                        <UserIcon size={16}/>
                        Admin
                    </Button>
                    )}

                </div>


            </SheetContent>
       </Sheet>

        <h1 className="text-lg font-semibold">
            <span className="text-primary">E-commerce</span></h1>
        <Button size="icon" variant="outline">
            <ShoppingCartIcon/>
        </Button>

    </Card>

}
