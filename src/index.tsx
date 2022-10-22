import React from "react";
import {Root, createRoot} from "react-dom/client";

import App from "./components/App";
import {initLocalStorageVariables} from "./lib/lib";

import "./stylesheets/index.css";

initLocalStorageVariables();

const root: Root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
    <>
        <App/>
    </>
);