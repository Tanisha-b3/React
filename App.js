import React from 'react';
import ReactDOM from 'react-dom/client';


const container = React.createElement(
    "h1",{
    id: "container",
    key:2
    },
    [React.createElement(
        "h1",{},
        "Heading" 
    ),React.createElement(
        "ul",{},
        [
            React.createElement(
                "li",{},
                "About Us"),
                React.createElement(
                    "li",{},
                    "Home"),
                    React.createElement(
                        "li",{},
                        "Contact"),
                        React.createElement(
                            "li",{},
                            "NEW"),
        ]),
    ]
);
const root = ReactDOM.createRoot(
    document.getElementById("root"));
    root.render(container);
