import { useEffect, useState } from "react";
import { CommentInput } from "./components/comment-input/comment.input";
import { CommentList } from "./components/comment-list/comment-list";
import { Comment } from "./components/comment/comment";
import { Divider } from "./components/divider/divider";
import { Layout } from "./components/layout/layout";
import { Select } from "./components/select/select";
import { commentList } from "./contexts/comment-list-context";

const filterSelectOptions = [
    { value: "all", label: "All" },
    { value: "relevants", label: "Most relevant" },
    { value: "recents", label: "Most recents" },
];

function App() {
    return (
        <Layout>
            <Comment
                comment={{
                    author: {
                        name: "John Doe",
                        avatarUrl: "https://i.pravatar.cc/150?img=1",
                    },
                    date: "5h ago",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl.",
                }}
            />

            <CommentInput />

            <Divider />
            <CommentList />
        </Layout>
    );
}

export default App;
