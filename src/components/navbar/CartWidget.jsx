export const CartWidget=({itemsTotal})=>{
    return(
        <>
                <img src="./CartWidgetIcon.svg" alt="Cart Widget Icon" />
                <p>{itemsTotal}</p>
        </>

    )
}