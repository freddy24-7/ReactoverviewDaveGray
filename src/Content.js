import React from 'react';

const Content = () => {

    const handleNameChange = (event) => {
        const names = ['John', 'Jane', 'Joe'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    return (
        <main>
            <p>Hello {handleNameChange()}</p>
        </main>
    );
};

export default Content;