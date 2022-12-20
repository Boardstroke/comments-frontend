import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CommentListProvider } from "./contexts/comment-list-context";
import "./index.css";

if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mock-server/msw-worker");

    worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <CommentListProvider>
            <App />
        </CommentListProvider>
    </React.StrictMode>
);
