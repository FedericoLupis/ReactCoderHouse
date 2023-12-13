import { ItemListDeleteButton } from "./ItemListDeleteButton"

export const ItemList = ({itemListName, itemListQuatity}) =>{
    return(
            <div className="my-4 p-4 flex justify-between items-center border-1 rounded-2xl shadow-sm">
                {/* <img src="" alt="" /> */}
                <div className="flex items-center">
                    <img className="mx-2" src="https://dummyimage.com/60.x60/000/fff" alt="" />
                    <p className="mx-2">{itemListName}</p>
                    <p className="mx-2">{itemListQuatity}</p>

                </div>

                <ItemListDeleteButton/>
            </div>

    )
}