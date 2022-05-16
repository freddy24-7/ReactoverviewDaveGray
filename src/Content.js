import React from 'react';

const Content = () => {

    const handleNameChange = (event) => {
        const names = ['John', 'Jane', 'Joe'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
    const handleClick = () => {
        console.log('Clicked');

    }
    const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
    }
    const handleClick3 = (event) => {
        console.log(event.target.innerText);
    }

    return (
        <main>
            {/*<p onDoubleClick={handleClick}>*/}
            {/*    Hello {handleNameChange()}*/}
            {/*</p>*/}
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClick2('John')}>Click Me</button>
            <button onClick={(event) => handleClick3(event)}>Click Me</button>
        </main>
    );
};

export default Content;