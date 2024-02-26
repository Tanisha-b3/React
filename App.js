import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    "h1",{id: "heading"},
    "Namaste React"
);
const heading1 = React.createElement(
    "h1",{id: "heading1"},
    "Namaste React"
);
const root = ReactDOM.createRoot(
    document.getElementById("root"));
    root.render(heading);
