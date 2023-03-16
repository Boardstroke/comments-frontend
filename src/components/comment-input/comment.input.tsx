import { Button } from "../button/button";

export type CommentInputProps = {
    placeholder?: string;
};

export const CommentInput = ({ placeholder }: CommentInputProps) => {
    return (
        <div className="flex gap-x-2 flex-col mt-4 gap-y-2">
            <div className="flex-1">
                <textarea
                    className="resize-none  w-full p-2 border border-l-0 border-r-0 md:border-l md:border-r border-gray-300 dark:bg-slate-900 dark:border-slate-700 md:rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder={placeholder || "Write a comment"}
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
