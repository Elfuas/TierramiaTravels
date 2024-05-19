import { Route, Routes } from "react-router-dom"
import { Contact, Home, Hotels, Tours, Blog } from "@/components/Pages"

export const RouterApp = function( {} ){
   return(
      <Routes>         
         <Route path="/" element={ <Home /> } />
         <Route path="/tours" element={ <Tours /> } />
         <Route path="/tours/:country" element={ <Tours /> } />
         <Route path="/hoteles/" element={ <Hotels /> } />
         <Route path="/hoteles/:country" element={ <Hotels /> } />

         <Route path="/contact" element={ <Contact /> } />
         <Route path="/blog" element={ <Blog /> } />
         <Route path="/sign-in" element={ <Home /> } />           
         <Route path="/sign-up" element={ <Home /> } />
      </Routes>
   )
}