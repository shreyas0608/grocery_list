import { useState } from "react"

export default function AddItem({addItem}){

    let [item,setItem]=useState('');
    let [quantity,setQuantity]=useState('1');
    let [price,setPrice]=useState('');

    function addItemToList(event){
        event.preventDefault();
        if(item.toString() && quantity.toString() && price.toString()){
        let payload={
            item,
            quantity,
            price
        }
        addItem(payload);
        setItem('');
        setPrice('');
        setQuantity(1);
        }
    }

    return (
        <>
        <form onSubmit={(e)=>addItemToList(e)}>
        <div class="add-item-container">
            <div>
                <label>Item:</label>
                <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}></input>
            </div>
            <div>
                <label>Quantity:</label>
                <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                    {
                        Array.from({length:12},(_,i)=>i).map(item=>{
                            return <option value={item}>{item}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <label>Price:</label>
                <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}></input>
            </div>
            <div>
                <button type="submit">Add Item</button>
            </div>
        </div>  
        </form>      
        </>


    ) 
}