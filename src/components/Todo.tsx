import React from "react";

import {deleteTodo, putTodo} from "../api/todoApi";
import {refresh} from "../lib/lib";

import "../stylesheets/Todo.css";

export default function Todo(props: any): JSX.Element {
    function _deleteTodo(): void {
        deleteTodo(props.id).then();
        refresh();
    }

    function updateTodo(): void {
        (document.getElementById("form-input-name-put") as HTMLInputElement).value = props.name;
        (document.getElementById("form-input-description-put") as HTMLInputElement).value = props.description;
        (document.getElementById("form-input-deadline-put") as HTMLInputElement).value = props.deadline;
        const form: HTMLFormElement = document.getElementById("form-put") as HTMLFormElement;
        form.style.display = form.style.display === "none" ? "block" : "none";
        sessionStorage.setItem("updateId", props.id);
        sessionStorage.setItem("updateDone", (document.getElementById("checkbox" + props.id) as HTMLInputElement).checked as unknown as string);
    }

    function checkTodo(): void {
        putTodo(props.id, props.name, props.description, (document.getElementById("checkbox" + props.id) as HTMLInputElement).checked, props.deadline).then(() => {
            refresh();
        });
    }

    return (
        <>
            <div className={"todo"}>
                <span className={"span"}>
                    <h1>{props.name}, Id: {props.id}</h1>
                    <span className={"span"}>
                        <input id={"checkbox" + props.id} type={"checkbox"} className={"checkbox"} checked={props.done.toString() === "true"} onChange={checkTodo}/>
                        <button className={"button icons"} onClick={_deleteTodo}><i className={"fa fa-trash"}></i></button>
                        <button className={"button icons"} onClick={updateTodo}><i className={"fa fa-edit"}></i></button>
                    </span>
                </span>
                <h2>{props.description}</h2>
                <h3>Date created: {props.dateCreated},<br/> Deadline: {props.deadline}</h3>
            </div>
        </>
    );
};