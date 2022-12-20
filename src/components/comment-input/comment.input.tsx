import { Button } from "../button/button";

export const CommentInput = () => {
    return (
        <div className="flex gap-x-2 flex-col mt-4 gap-y-2">
            <div className="flex-1">
                <textarea
                    className="resize-none  w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Write a comment..."
                />
            </div>
            <div className="flex justify-end">
                <Button.Group>
                    <Button variant="danger">Cancel</Button>
                    <Button>Post</Button>
                </Button.Group>
            </div>
        </div>
    );
};
