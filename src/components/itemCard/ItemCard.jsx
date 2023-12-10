import {ItemCardDetailsButton} from './ItemCardDetailsButton'


export const ItemCard = ()=>{

    const stock = 10
    
    return(
        <div className="w-52 m-4 p-4 border-2 rounded-lg hover:shadow-xl content-center">
            <img src="https://dummyimage.com/200.x200/000/fff" alt="" />
            <h2 className='my-2 text-xl font-PT-serif'>Rutini</h2>
            <h2 className='text-lg font-bold font-Roboto'>$190</h2>
            <p className='text-sm font-Roboto'>stock: {stock}</p>
            <ItemCardDetailsButton/>
        </div>
    )
}