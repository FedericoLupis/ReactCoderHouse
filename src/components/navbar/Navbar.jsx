import { NavbarLink } from './NavbarLink'
import { CartWidget } from './CartWidget'


export const Navbar = () =>{

    const logo = "Chateau Buenos Aires"
    
    return(
        <header className="bg-red-900 w-full h-14">
            <div className="flex justify-around text-amber-50">

                <h1>{logo}</h1>

                <nav className="">
                    <NavbarLink NavbarLinkItem="item 1"/>
                    <NavbarLink  NavbarLinkItem="item 2"/>
                    <NavbarLink  NavbarLinkItem="item 3"/>
                </nav>

                <div className="flex justify-between">
                    <CartWidget itemsTotal={10}/>
                </div>

            </div>
        </header>
    )


}