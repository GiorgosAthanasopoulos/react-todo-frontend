import React from "react";

import "../stylesheets/Footer.css";

function openForm(): void {
    const form: HTMLFormElement = document.getElementById("form-post") as HTMLFormElement;
    form.style.display = form.style.display === "none" ? "block" : "none";
}

export default function Footer(): JSX.Element {
    return (
        <>
            <footer id={"footer"}>
                <h1 id={"author"}>Giorgos Athanasopoulosg@<a rel={"noreferrer"} href={"https://www.github.com/"} target={"_blank"}>Github.com</a></h1>
                <button className={"button"} onClick={openForm}>Add todo</button>
            </footer>
        </>
    );
};