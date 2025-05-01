import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import AddItem from './components/AddItem'
import ItemList from './components/ItemList'
import Header from './components/Header'

function App() {
  let [items,setItems]=useState([]);
  
  function addItem(item){
    let itemList=[...items]
    let payload={
      id: new Date().getTime(),
      selected:false,
      ...item
    }
    itemList.push(payload);
    setItems(itemList);
  }

    
  function deleteItem(id){
    let itemList=[...items]
    itemList=itemList.filter(item=>item.id!=id);
    setItems(itemList);
  }

  function selectItem(id){

    let itemList=[...items]
    let selectedItemIndex=itemList.findIndex(item=>item.id==id);
    if(selectedItemIndex>-1){
      let itemsList=[...items];
      itemsList[selectedItemIndex]={
        ...itemsList[selectedItemIndex],
        selected: !itemsList[selectedItemIndex].selected
      }
      setItems(itemsList);
    }
  }


  return (
    <>
      <Header></Header>
      <div class="body-container">
        <AddItem addItem={addItem} ></AddItem>
        <ItemList items={items} deleteItem={deleteItem} selectItem={selectItem}></ItemList>
      </div>
      <Footer  items={items}></Footer>
    </>
  )
}

export default App
