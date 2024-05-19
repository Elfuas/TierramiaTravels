import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu"
import { Link } from "react-router-dom"

export const ButtonAction = function({ children, title, path }){
   return(  
      <NavigationMenuItem>
         <Link to={ path }>
            <NavigationMenuLink className={ navigationMenuTriggerStyle() }>
               { children }
               { title }
            </NavigationMenuLink>
         </Link>
      </NavigationMenuItem>
   )
}