import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice"

function UpdateItemQuantity({pizzaId,currenQuantity}) {
    const dispatch=useDispatch()
    return (
        <div className="flex gap-1 md:gap-3 items-center">
            <Button type='round' onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>−</Button>
        <span className="text-sm font-medium">{currenQuantity}</span>
            <Button type='round' onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>✚</Button>
        </div>
    )
}

export default UpdateItemQuantity
