import React from "react";

import {refresh} from "../lib/lib";
import {postTodo, putTodo} from "../api/todoApi";

import "../stylesheets/Form.css";

export default function Form(props: any): JSX.Element {
    function closeForm(): void {
        (document.getElementById("form-" + props.id) as HTMLFormElement).style.display = "none";
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function submit(): void {
        const name: string = (document.getElementById("form-input-name-" + props.id) as HTMLInputElement).value;
        const description: string = (document.getElementById("form-input-description-" + props.id) as HTMLInputElement).value;
        const deadline: string = (document.getElementById("form-input-deadline-" + props.id) as HTMLInputElement).value;

        if(props.id === "post") {
            postTodo(name, description, deadline).then(() => {
                refresh();
            });
        } else if(props.id === "put") {
            putTodo(Number.parseInt(String(sessionStorage.getItem("updateId"))), name, description, sessionStorage.getItem("updateDone") === "true", deadline).then(() => {
                refresh();
            });
        } else {
            return;
        }
    }

    return (
        <>
            {/* eslint-disable-next-line no-script-url */}
            <form id={"form-" + props.id} action={"javascript:;"} onSubmit={submit}>
                <h1>{props.title}</h1>

                <label htmlFor={"name"}>Name</label>
                <br/>
                <input type={"text"} placeholder={"Name"} autoComplete={"off"} name={"name"} required id={"form-input-name-" + props.id}/>
                <hr/><hr/>

                <label htmlFor={"description"}>Description</label>
                <br/>
                <input type={"text"} placeholder={"Description"} autoComplete={"off"} name={"description"} required id={"form-input-description-" + props.id}/>
                <hr/><hr/>

                <label htmlFor={"deadline"}>Deadline</label>
                <br/>
                <input type={"text"} placeholder={"YYYY-MM-DD"} autoComplete={"off"} name={"deadline"} required id={"form-input-deadline-" + props.id}/>
                <hr/><hr/>

                <input type={"submit"}/>
                <hr/><hr/>
                <button className={"cancel"} onClick={closeForm}>Cancel</button>
            </form>
        </>
    );
};