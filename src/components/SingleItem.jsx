export default function SingleItem({item,deleteItem,selectItem}){
    function deleteSelectedItem(id){
        deleteItem(id)
    }
    function selectItems(id){
        selectItem(id)
    }
    return (    
        <div class="item-row">
            <div>
                <input type="checkbox" checked={item.selected} onChange={()=>selectItems(item.id)}></input>
            </div>
            <div>{item.item}</div>
            <div>{item.quantity}</div>
            <div>Rs. {item.price}</div>
            <div className="delete-icon" onClick={()=>deleteSelectedItem(item.id)}>X</div>

        </div>
    )

}