import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";


export default function Header() {
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
                <div className="mt-2 flex flex-col gap-2">
                    <Button variant="outline" className="w-full justify-start gap-2">
                        <LogInIcon size={16}/>
                        Fazer Login
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                        <HomeIcon size={16}/>
                        Ofertas
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                        <ListOrderedIcon size={16}/>
                        Catálogo
                    </Button>

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
