import { CommentInput } from "../components/comment-input/comment.input";
import { CommentList } from "../components/comment-list/comment-list";
import { Divider } from "../components/divider/divider";

export const Posts = () => {
    return (
        <div className="h-full">
            <CommentInput placeholder="Something is in your mind?" />
            <Divider />
            <CommentList />
        </div>
    );
};
