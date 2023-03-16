import { Link } from "react-router-dom";
import { useCommentList } from "../../contexts/comment-list";
import { Comment } from "../comment/comment";
import { Select } from "../select/select";

const filterSelectOptions = [
    { value: "all", label: "All" },
    { value: "relevants", label: "Most relevant" },
    { value: "recents", label: "Most recents" },
];

export const CommentList = () => {
    const response = useCommentList();
    console.log(response);
    return (
        <div className="flex flex-col gap-y-4">
            <div className="self-end">
                <Select
                    options={filterSelectOptions}
                    defaultValue={filterSelectOptions[0]}
                />
            </div>

            <ul className="flex flex-col md:gap-y-4">
                {response.comments.map((comment) => {
                    return (
                        <li>
                            <Link to={"userid/postid"}>
                                <Comment comment={comment} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
