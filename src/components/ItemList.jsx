import SingleItem from "./SingleItem"

export default function ItemList({items,deleteItem,selectItem}){    
      let total=items.reduce((acc,ele)=> {
        return acc=acc+ele.quantity * ele.price
      },0)
      return(
        <>
        <div className="item-list-container">
        <h3>Items</h3>
        {
        items.map(item=>{
            return <SingleItem item={item} deleteItem={deleteItem} selectItem={selectItem}></SingleItem>
        })
        }
        <h4>Total: Rs. {total}</h4>
        </div>
        </>
      )  
    
}