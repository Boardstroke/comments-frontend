import { Button } from "../button/button";
import { Card } from "../card/card";
import { EllipsisIcon, FireIcon, MessageIcon } from "../icons";

export type CommentProps = {
    comment: {
        author: {
            name: string;
            avatarUrl: string;
        };
        date: string;
        text: string;

        imageUrl?: string;
    };
};

export const Comment = ({ comment }: CommentProps) => {
    return (
        <Card>
            <header className="flex justify-between flex-1">
                <div className="flex">
                    <img
                        src={comment.author.avatarUrl}
                        alt={comment.author.name}
                        className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                        <h4 className="text-lg font-bold dark:text-white">
                            {comment.author.name}
                        </h4>
                        <p className="text-gray-600 text-sm dark:text-gray-400">
                            {comment.date}
                        </p>
                    </div>
                </div>

                <Button icon={<EllipsisIcon />} variant="text" rounded />
            </header>
            <article>
                <p className="text-gray-700 dark:text-gray-200">
                    {comment.text}
                </p>
                <figure className="w-full flex items-start">
                    {comment.imageUrl && (
                        <img
                            src={comment.imageUrl}
                            alt="comment"
                            className="max-w-screen-xl h-auto object-contain rounded-lg mt-4"
                        />
                    )}
                </figure>
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
        </Card>
    );
};
