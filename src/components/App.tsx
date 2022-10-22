import React, {ReactElement, useEffect, useState} from "react";

import Todo from "./Todo";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Form from "./Form";

import {getTodos} from "../api/todoApi";

import "../stylesheets/App.css";

let counter: number = 0;

export default function App(): JSX.Element {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setInterval(() => {
            let _todos: ReactElement[] = [];

            getTodos(sessionStorage.getItem("search-key") as string).then((__todos) => {
                for (let i: number = 0; i < __todos.length; i++) {
                    const todo = __todos[i];
                    _todos.push(
                        <Todo key={counter} id={todo["id"]} name={todo["name"]}
                              description={todo["description"]}
                              dateCreated={todo["dateCreated"]} deadline={todo["deadline"]}
                              done={todo["done"] === "true"}/>
                    );
                    counter++;
                }
                // @ts-ignore
                setTodos(_todos);
            });
        }, 500);
    }, []);

    return (
        <>
            <Navbar/>
            <div id={"todos"}>
                {todos}
            </div>
            <Form id={"post"} title={"Add todo"}/>
            <Form id={"put"} title={"Edit todo"}/>
            <div id={"spacer"}></div>
            <Footer/>
        </>
    );
};