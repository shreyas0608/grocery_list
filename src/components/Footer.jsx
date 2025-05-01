export default function Footer({items}){
    const totalPrice=items.reduce((acc,ele)=> acc=acc+ele.price * ele.quantity,0);
    const selectedItems=items.filter((ele)=> ele.selected);
    const selectedItemsPrice=selectedItems.reduce((acc,ele)=> acc=acc+ele.price * ele.quantity,0);


    return (<div>
        <footer>
            <div>
            Total Items  : {items.length} & 
            Total Price  : {totalPrice}
            </div>
            <div>
             Selected Items: {selectedItems.length} &   
             Selected Items Priice: {selectedItemsPrice} 
            </div>
        </footer>
        
        </div>
        )
}