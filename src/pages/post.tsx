import { CommentInput } from "../components/comment-input/comment.input";
import { CommentList } from "../components/comment-list/comment-list";
import { Comment } from "../components/comment/comment";
import { Divider } from "../components/divider/divider";

export const Post = () => {
    return (
        <>
            <Comment
                comment={{
                    author: {
                        name: "John Doe",
                        avatarUrl: "https://i.pravatar.cc/150?img=1",
                    },
                    imageUrl: "https://picsum.photos/seed/picsum/600/400",
                    date: "5h ago",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl.",
                }}
            />

            <CommentInput />

            <Divider />
            <CommentList />
        </>
    );
};
