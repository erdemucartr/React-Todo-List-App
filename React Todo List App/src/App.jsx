import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Başka bir yapılacak ekle");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldItems) => [...oldItems, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <>
      <div className="App">
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Yapılacak ekle"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={() => addItem()}>Ekle</button>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                {item.value}{" "}
                <button onClick={() => deleteItem(item.id)}>Sil</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
