import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import {useState, useEffect} from "react";
import SearchItem from "./SearchItem";

//Return function returns JSX
//Title becomes a prop, rule 14
//This chapter is an example of prop drilling - this case four levels down,
//refer components on devtools

function App() {
    const API_URL = "http://localhost:3500/items";

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    //2 (after making search component)setting state for search
    const [search, setSearch] = useState("");
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    //Below is good for making ajax calls
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error("Did not receive expected data")
                const listItems = await response.json();
                console.log(listItems);
                setItems(listItems);
                setFetchError(null);
            } catch (error) {
                setFetchError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        setTimeout(async () => {
            fetchItems();
        }, 2000);

    },[]);

    const addItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = {
            id: id,
            checked: false,
            item: item
        };
        //spread operator
        const listItems = [...items, myNewItem];
        setItems(listItems);

    }

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ?
            {...item, checked: !item.checked} : item);
        setItems(listItems);
    };

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem("");
    };

    //3) Below add search item
    //4) Define props for search item
    //5) Add filter to item

  return (
    <div className="App">
      <Header title="Grocery list man"/>
        <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        />
        <SearchItem
            search={search}
            setSearch={setSearch}
        />
        <main>
            {isLoading && <p>Loading Items...</p>}
            {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
            { !fetchError && !isLoading && <Content
          items={items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
        </main>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
