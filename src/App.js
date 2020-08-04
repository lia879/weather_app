import React from 'react';

const api = {
  key: "5144153d0f17b798530f8451c9135420",
  base: "https://api.openweathermap.org/data/2.5",
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search .."
          />

        </div>
      </main>
    </div>
  );
}

export default App;
