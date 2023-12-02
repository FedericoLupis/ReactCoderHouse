import { ItemList } from "./ItemList";

export const ItemListContainer = () =>{
    return(
        <section>
            <div>
                <h1>Este es el carrito</h1>
                <h2>Aca esta todo lo qu queres comprar</h2>

                <ItemList itemListName="vinito" itemListQuatity={2}/>
                <ItemList itemListName="cerveza" itemListQuatity={4}/>
            </div>


        </section>

    )
}