import React from 'react';
import RoomCanvas from './components/RoomCanvas';
import FurnitureItem from './components/FurnitureItem';

const App = () => {
    return (
        <div className="App">
            <h1>Virtual Room Designer</h1>
            <RoomCanvas />
            {/* Example FurnitureItem */}
            <FurnitureItem name="Chair" image="chair.jpg" />
        </div>
    );
}

export default App;

