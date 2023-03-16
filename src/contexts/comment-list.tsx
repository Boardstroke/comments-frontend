import React, { PropsWithChildren } from "react";

export const commentList = [
    {
        author: {
            name: "John Doe",
            avatarUrl: "https://i.pravatar.cc/150?img=1",
        },
        date: "2021-01-01",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl.",
    },
    {
        author: {
            name: "Jane Doe",
            avatarUrl: "https://i.pravatar.cc/150?img=2",
        },
        date: "2021-01-01",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl.",
    },
];

export type CommentListContextType = {
    comments: any[];
    setComments: (comments: any[]) => void;
};

const CommentListContext = React.createContext<CommentListContextType>({
    comments: [],
    setComments: () => {},
});

export const CommentListProvider = ({ children }: PropsWithChildren) => {
    const [comments, setComments] = React.useState<any[]>(commentList);
    return (
        <CommentListContext.Provider value={{ comments, setComments }}>
            {children}
        </CommentListContext.Provider>
    );
};

export const useCommentList = () => React.useContext(CommentListContext);
