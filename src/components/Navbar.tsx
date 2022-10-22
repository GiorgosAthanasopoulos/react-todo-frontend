import React from "react";

import "../stylesheets/Navbar.css";

function sourceCodeButtonClicked(): void {
    window.open("https://www.github.com/giorgosathanasopoulos/react-todo", "_blank");
}

function authorsGithubButtonClicked(): void {
    window.open("https://www.github.com/giorgosathanasopoulos", "_blank");
}

function searchBarValueChanged(): void {
    sessionStorage.setItem("search-key", (document.getElementById("search-bar") as HTMLInputElement).value);
}

export default function Navbar(): JSX.Element {
    return (
        <>
            <div id={"navbar"}>
                <h1 id={"title"}>Todo App</h1>

                <div id={"navbar-right"}>
                    <input placeholder={"Enter filter"} autoComplete={"off"} type={"text"} id={"search-bar"} onChange={searchBarValueChanged}/>
                    <button className={"button"} onClick={sourceCodeButtonClicked}>Source code</button>
                    <button className={"button"} onClick={authorsGithubButtonClicked}>Author's github</button>
                </div>
            </div>
        </>
    );
};