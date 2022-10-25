import React from 'react'
import { useState } from 'react'
import './Style.css'
import TodoList from "./components/TodoList";


const App  = () =>  {

    const [inputList, setInputList] = useState("");

    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
      setInputList(event.target.value);

    };

    const listOfItems = () => {

      setItems((oldItems) => {
        return [...oldItems, inputList];
      } )

      setInputList("");
      
    }

    const deleteItem = (id) => {
      setItems((oldItems) => {
        return oldItems.filter((arrElem, index) => {
          return index !== id;
        })
      })
  }

  return (
    <>
        <div className="main-div">
          <div className="center-div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" value={inputList} placeholder='Add a Items' onChange={itemEvent}/>
            <button onClick={listOfItems}> + </button>

            <ol>
              {/* <li>{inputList}</li> */}

              {Items.map((itemval, index) => {
               return <TodoList  key={index} id = {index} text = {itemval} onSelect = {deleteItem}/>
              })}
            </ol>
          </div>
        </div>
    </>
  )
}

export default App
