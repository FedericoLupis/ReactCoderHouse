export const CartWidget=({itemsTotal})=>{
    return(
        <>
                <img className="w-8" src="./CartWidgetIcon.svg" alt="Cart Widget Icon" />
                <p>{itemsTotal}</p>
        </>

    )
}