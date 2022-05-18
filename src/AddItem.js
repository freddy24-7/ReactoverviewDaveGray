import React from 'react';
import {FaPlus} from 'react-icons/fa';
import {useRef} from "react";

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef();
    //most common useCase for refs is to focus on an element
    //adding ref to input and onclick on button

    return (
        <div>
            <form className="addForm" onSubmit={handleSubmit}>
                <label htmlFor="addItem"></label>
                <input
                    autoFocus
                    ref={inputRef}
                    id='addItem'
                    type="text"
                    placeholder="Add Item"
                    required
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button
                    type="submit"
                    aria-label="Add Item"
                    onClick={() => inputRef.current.focus()}
                >
                    <FaPlus />
                </button>
            </form>
        </div>
    );
};

export default AddItem;