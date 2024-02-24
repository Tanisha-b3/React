// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React"); 
import React from 'react';
import ReactDOM from 'react-dom/client';

// console.log(heading);
// root.render(heading);
const parent = React.createElement("div",{id: "parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{}, "I am hhh tag")
)
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);