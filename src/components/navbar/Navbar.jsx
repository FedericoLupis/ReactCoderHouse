import { NavbarLink } from './NavbarLink'
import { CartWidget } from './CartWidget'


export const Navbar = () =>{
    
    return(
        <header className="bg-pink-950 w-full h-32 flex justify-around items-center text-white">


                <img className="h-24" src="./logo.png" alt="logo" />

                <nav className="">
                        <NavbarLink NavbarLinkItem="Quienes Somos"/>
                        <NavbarLink NavbarLinkItem="Vinos Argentinos"/>
                        <NavbarLink NavbarLinkItem="Vinos del Mundo"/>
                </nav>

                <div className="flex justify-between items-center">
                    <CartWidget itemsTotal={10}/>
                </div>


        </header>
    )


}