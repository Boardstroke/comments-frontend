import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CommentListProvider } from "./contexts/comment-list";
import "./index.css";

import { Page404 } from "./pages/404";
import { Root } from "./pages/root";
import { Post } from "./pages/post";
import { ThemeProvider } from "./contexts/theme";
import { Posts } from "./pages/posts";

if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mock-server/msw-worker");

    worker.start();
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Page404 />,
        children: [
            {
                path: "/:userId/:postId",
                element: <Post />,
            },
            {
                path: "/",
                element: <Posts />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <CommentListProvider>
                <RouterProvider router={router} />
            </CommentListProvider>
        </ThemeProvider>
    </React.StrictMode>
);
