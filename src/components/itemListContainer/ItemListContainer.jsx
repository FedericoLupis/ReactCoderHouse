import { ItemList } from "./ItemList";

export const ItemListContainer = () =>{
    return(
        <section>
            <div className="m-auto my-4 w-10/12 p-8 border-2 rounded-lg shadow">
                <h1 className="text-xl text-center	font-bold">Este es tu carrito compras</h1>
                <h2 className="text-lg text-center">Estos son todos los items que estas por comprar</h2>

                <ItemList itemListName="vinito" itemListQuatity={2}/>
                <ItemList itemListName="cerveza" itemListQuatity={4}/>
                <ItemList itemListName="Catena" itemListQuatity={10}/>
            </div>


        </section>

    )
}