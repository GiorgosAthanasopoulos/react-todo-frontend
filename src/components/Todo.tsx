import React from "react";

import {deleteTodo, putTodo} from "../api/todoApi";

import "../stylesheets/Todo.css";

export default function Todo(props: any): JSX.Element {
    function _deleteTodo(): void {
        deleteTodo(props.id).then();
    }

    function updateTodo(): void {
        putTodo('', '', false, '').then();
    }

    return (
        <>
            <div className={"todo"}>
                <span className={"span"}>
                    <h1>{props.name}, Id: {props.id}</h1>
                    <span className={"span"}>
                        <input type={"checkbox"} className={"checkbox"} defaultChecked={props.done}/>
                        <button className={"button"}><i className={"fa fa-trash"}></i></button>
                        <button className={"button"}><i className={"fa fa-edit"}></i></button>
                    </span>
                </span>
                <h2>{props.description}</h2>
                <h3>Date created: {props.dateCreated}, Deadline: {props.deadline}</h3>
            </div>
        </>
    );
};