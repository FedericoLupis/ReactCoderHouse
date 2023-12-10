export const ItemCountButton = ({textButton, onClick})=>{

    return <button onClick={onClick} className="w-10 m-auto 
    p-2 rounded-md 
    bg-pink-950 
    text-white text-sm 
    hover:bg-pink-900"> {textButton} </button>
}