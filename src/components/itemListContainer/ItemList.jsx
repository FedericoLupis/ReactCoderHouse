export const ItemList = ({itemListName, itemListQuatity}) =>{
    return(
        <div>
            <div className="flex justify-around">
                <img src="" alt="" />
                <p>{itemListName}</p>
                <p>{itemListQuatity}</p>
            </div>

            <button>Eliminar Item</button>
        </div>
    )
}