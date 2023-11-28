import { useState } from "react"
import ValidatedShoppingListForm from "./ValidatedShoppingListForm"
import { v4 as uuid } from "uuid"

export default function ShoppingList() {
    const [items, setItems] = useState(
        [{ id: uuid(), product: "Bannanas", quantity: 8 },
        { id: uuid(), product: "Eggs", quantity: 12 }
        ])

    const addItem = (item) => {
        setItems(currItems => {
            return [...currItems, { ...item, id: uuid() }]
        })
    }
    return (
        <div>
            <h1>Shopping list</h1>
            <ul>
                {items.map((i) => (
                    <li key={i.id}>
                        {i.product} - {i.quantity}
                    </li>
                ))}
            </ul>
            <ValidatedShoppingListForm addItem={addItem} />
        </div>
    )
}