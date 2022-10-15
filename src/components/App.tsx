import React from "react";

import Todo from "./Todo";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "../stylesheets/App.css";

export default function App(): JSX.Element {
    return (
        <>
            <Navbar/>
            <div id={"todos"}>
                <Todo name={"Todo"} id={1} description={"Todo1 description"} done={false} dateCreated={"2022-10-15"} deadline={"2022-10-16"}/>
            </div>
            <div id={"spacer"}></div>
            <Footer/>
        </>
    );
};