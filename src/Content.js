import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import ItemList from "./ItemList";

//Below is an array of objects
// Trashcans added with: npm i react-icons -D

const Content = ({items, handleCheck, handleDelete}) => {

    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />

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