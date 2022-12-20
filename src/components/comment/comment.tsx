import { Button } from "../button/button";
import { EllipsisIcon, FireIcon, MessageIcon } from "../icons";

export type CommentProps = {
    comment: {
        author: {
            name: string;
            avatarUrl: string;
        };
        date: string;
        text: string;
    };
};

export const Comment = ({ comment }: CommentProps) => {
    return (
        <div className="bg-white p-4 rounded-lg border border-gray-300 flex flex-col gap-y-4 hover:bg-gray-50 cursor-pointer">
            <header className="flex justify-between flex-1">
                <div className="flex">
                    <img
                        src={comment.author.avatarUrl}
                        alt={comment.author.name}
                        className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                        <h4 className="text-lg font-bold">
                            {comment.author.name}
                        </h4>
                        <p className="text-gray-600 text-sm">{comment.date}</p>
                    </div>
                </div>

                <Button icon={<EllipsisIcon />} variant="text" rounded />
            </header>
            <article>
                <p className="text-gray-700">{comment.text}</p>
            </article>

            <footer>
                <div className="flex justify-end mt-4">
                    <Button.Group>
                        <Button.Badge count={2}>
                            <Button
                                icon={<FireIcon isActive={true} />}
                                variant="text"
                                rounded
                            />
                        </Button.Badge>
                        <Button icon={<MessageIcon />} variant="text" rounded />
                    </Button.Group>
                </div>
            </footer>
        </div>
    );
};
