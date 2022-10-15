import React from "react";

import "../stylesheets/Footer.css";

export default function Footer(): JSX.Element {
    return (
        <>
            <footer id={"footer"}>
                <h1 id={"author"}>Giorgos Athanasopoulosg@<a rel={"noreferrer"} href={"http://www.github.com/"} target={"_blank"}>Github.com</a></h1>
                <button className={"button"}>Add todo</button>
            </footer>
        </>
    );
};