//nunca superar stock
//sin click cuando n hay stock. no bajar de 0

import { useState } from "react"
import { ItemCountButton } from "./ItemCountButton"

export const ItemCount = () =>{
    const [count, setCount] = useState(0)


    const sumar = ()=>{
        setCount(count +1)
        console.log(count)
    }

    const restar = ()=>{
        setCount(count -1)
        console.log(count)
    }

    return(

        <div className="m-2 p-2 mx-auto flex justify-center w-80 border-2">
            <ItemCountButton textButton="-" onClick={restar}/>
            <span className="w-20 px-4 border-2 rounded-lg mx-2 text-center">{count}</span>
            <ItemCountButton textButton="+" onClick={sumar}/>
        </div>

    )
}