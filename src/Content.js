import React from 'react';
import {useState} from "react";
import { FaTrashAlt } from "react-icons/fa";

//Below is an array of objects
// Trashcans added with: npm i react-icons -D

const Content = () => {

        const [items, setItems] = useState([
            {
                id: 1,
                checked: true,
                item: "One half bag of almonds"
            },
            {
                id: 2,
                checked: false,
                item: "Item 2"
            },
            {
                id: 3,
                checked: false,
                item: "Item 3"
            }
        ]);

        const handleCheck = (id) => {
            const listItems = items.map((item) => item.id === id ?
                {...item, checked: !item.checked} : item);
            setItems(listItems);
            localStorage.setItem('shoppinglist', JSON.stringify(listItems));
        };

        const handleDelete = (id) => {
            const listItems = items.filter((item) => item.id !== id);
            setItems(listItems);
            localStorage.setItem('shoppinglist', JSON.stringify(listItems));
        };


    return (
        <main>
            {items.length ? (
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input type="checkbox"
                               onChange={() => handleCheck(item.id)}
                               checked={item.checked}
                        />
                        <label
                            onDoubleClick={() => handleCheck(item.id)}
                            style={item.checked ? {textDecoration: "line-through"} : null}
                        >{item.item}</label>
                        <FaTrashAlt
                            onClick={() => handleDelete(item.id)}
                            role="button"
                            tabIndex="0"
                        />
                    </li>
                ))}
            </ul>
            ) : (
                <p style={{
                    marginTop: "20px",
                    color: "red",
                }}
                >No items here</p>
            )}
        </main>
    );
};

export default Content;