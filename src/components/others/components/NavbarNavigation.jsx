import { Menubar } from "../../ui/menubar"
import { PathTours, PathsHoteles } from "../helpers/paths"
import { NavigationMenu, NavigationMenuList} from "../../ui/navigation-menu"
import { SecctionNavigationDescriptive } from "../../layout/SectionNavigationDescriptive"
import { ButtonAction } from "../../layout/ButtonAction"
import { SectionMenuBar } from "../../layout/SectionMenuBar"

export const NavbarNavigation = function(){
   return (
      <Menubar className="rounded-none flex h-[75px] items-center">
         <section id="container__navigator" className="w-full max-w-[1300px] flex justify-around">
            <section>
               <img src="/vite.svg" alt="this is tierramia logo" />
            </section>

            <NavigationMenu>
               <NavigationMenuList>

                  <SecctionNavigationDescriptive
                     title="Hoteles"
                     path="/hoteles"
                     rest={ PathsHoteles }                     
                  />

                  <SecctionNavigationDescriptive
                     title="Tours"
                     path="/tours"
                     rest={ PathTours }
                  />

                  <SectionMenuBar />

                  <ButtonAction title="Iniciar Sesión" path="/iniciar-sesion">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                     </svg>
                  </ButtonAction>

                  <ButtonAction title="Favoritos" path="/favoritos">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                     </svg>
                  </ButtonAction>

               </NavigationMenuList>
            </NavigationMenu>
         </section>
      </Menubar>
   )
}