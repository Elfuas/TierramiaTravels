import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "../ui/navigation-menu"

export const SecctionNavigationDescriptive = function({ title, path, ArrayPaths = [] }){
   return(
      <NavigationMenuItem>
         <NavigationMenuTrigger>{ title }</NavigationMenuTrigger>  
         <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[250px] lg:grid-cols-[.75fr_1fr] after:border-yellow-400">
               
            </ul>
         </NavigationMenuContent>
      </NavigationMenuItem>
   )
}